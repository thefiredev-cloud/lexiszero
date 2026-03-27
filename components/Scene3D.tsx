'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function ScalesOfJustice() {
  const groupRef = useRef<THREE.Group>(null)
  const beamRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
    if (beamRef.current) {
      beamRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  const violetColor = '#8b5cf6'

  return (
    <group ref={groupRef}>
      {/* Central pole */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2]} />
        <meshBasicMaterial color={violetColor} wireframe />
      </mesh>

      {/* Horizontal beam */}
      <mesh ref={beamRef} position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 2]} />
        <meshBasicMaterial color={violetColor} wireframe />
      </mesh>

      {/* Left chain */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([-1, 1, 0, -1, 0.2, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={violetColor} />
      </line>

      {/* Right chain */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([1, 1, 0, 1, 0.2, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={violetColor} />
      </line>

      {/* Left pan */}
      <mesh position={[-1, 0.2, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.05]} />
        <meshBasicMaterial color={violetColor} wireframe />
      </mesh>

      {/* Right pan */}
      <mesh position={[1, 0.2, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.05]} />
        <meshBasicMaterial color={violetColor} wireframe />
      </mesh>
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ScalesOfJustice />
      <OrbitControls autoRotate={false} enableZoom={true} enablePan={false} />
    </Canvas>
  )
}
