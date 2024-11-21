"use client"

import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model() {
  const gltf = useGLTF('/assets/3d/duck.glb')
  const modelRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return <primitive object={gltf.scene} ref={modelRef} scale={[2, 2, 2]} />
}

export function BJJModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  )
}

