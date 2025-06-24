import type { SpringOptions } from "framer-motion";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltedCardProps {
    captionText?: string;
    containerHeight?: React.CSSProperties['height'];
    containerWidth?: React.CSSProperties['width'];
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
    className?: string;
    children?: React.ReactNode;
}

const springValues: SpringOptions = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

export default function TiltedCard({
    captionText = "",
    containerHeight = "100%",
    containerWidth = "100%",
    scaleOnHover = 1.02,
    rotateAmplitude = 8,
    showTooltip = false,
    overlayContent = null,
    displayOverlayContent = false,
    className = "",
    children,
}: TiltedCardProps) {
    const ref = useRef<HTMLElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e: React.MouseEvent<HTMLElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <motion.figure
            ref={ref}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            style={{
                height: containerHeight,
                width: containerWidth,
                perspective: 1000,
            }}
            className={`relative overflow-hidden rounded-2xl bg-gray-900/50 ${className}`}
        >
            <div className="absolute inset-0 w-full h-full">
                <motion.div
                    className="w-full h-full [transform-style:preserve-3d] flex items-center justify-center"
                    style={{
                        rotateX,
                        rotateY,
                        scale,
                    }}
                >
                    {children}

                    {displayOverlayContent && overlayContent && (
                        <div className="absolute inset-0 z-10">
                            {overlayContent}
                        </div>
                    )}
                </motion.div>
            </div>

            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption,
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </motion.figure>
    );
}
