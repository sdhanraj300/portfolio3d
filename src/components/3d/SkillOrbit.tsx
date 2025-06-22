'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

const SkillPoint = ({ position, color, skill }: { position: [number, number, number]; color: string; skill: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group position={position as [number, number, number]}>
      <Sphere ref={ref} args={[0.4, 16, 16]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </Sphere>
      <Text
        position={[1.2, 0, 0]}
        color="white"
        fontSize={0.3}
        anchorX="left"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
};

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: React.ReactNode;
}

const SkillOrbit = ({ skills }: { skills: Skill[] }) => {
  const points = useMemo(() => {
    const count = skills.length;
    const radius = 5;
    const points = [];
    
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      points.push({
        position: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ],
        color: `hsl(${(i * 36) % 360}, 80%, 60%)`,
        skill: skills[i].name
      });
    }
    
    return points;
  }, [skills]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        {points.map((point, i) => (
          <SkillPoint 
            key={i} 
            position={point.position as [number, number, number]} 
            color={point.color} 
            skill={point.skill}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default SkillOrbit;
