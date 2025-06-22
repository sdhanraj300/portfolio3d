'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCardProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  children?: React.ReactNode;
  title?: string;
}

export default function FloatingCard({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0],
  children,
  title 
}: FloatingCardProps) {
  const groupRef = useRef<THREE.Group>(null);
  const cardRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
    
    if (cardRef.current) {
      cardRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
    }
  });

  return (
    <group position={position as [number, number, number]} rotation={rotation as [number, number, number]} ref={groupRef}>
      <group position={[0, 0, 0]}>
        {/* Card background - larger size */}
        <mesh ref={cardRef} castShadow receiveShadow>
          <boxGeometry args={[10, 6, 0.2]} />
          <meshStandardMaterial 
            color="#1e293b" 
            metalness={0.1}
            roughness={0.5}
            transparent
            opacity={0.95}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Card border */}
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(10, 6, 0.2)]} />
          <lineBasicMaterial color="white" transparent opacity={0.9} linewidth={2} />
        </lineSegments>
        
        {/* Title */}
        {title && (
          <Text
            position={[0, 2, 0.12]}
            fontSize={0.35}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={7}
            lineHeight={1}
            letterSpacing={0.02}
          >
            {title}
          </Text>
        )}
        
        {/* Content */}
        {typeof children === 'string' && (
          <Text
            position={[0, 0.8, 0.12]}
            fontSize={0.22}
            color="white"
            anchorX="center"
            anchorY="top"
            maxWidth={7}
            lineHeight={1.4}
            letterSpacing={0.01}
          >
            {children}
          </Text>
        )}
      </group>
    </group>
  );
}
