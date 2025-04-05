import React, {useRef} from 'react'
import {Float, useGLTF} from '@react-three/drei'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";


export function Tape(props) {
    const {nodes, materials} = useGLTF('/models/tape.glb')
    const targetRef = React.useRef()

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            z: targetRef.current.position.x + .3,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        }, {})
    })
    return (
        <Float>
            <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} {...props}  dispose={null}>
                <group rotation={[Math.PI / 2, 0, 0]}  scale={0.01}>
                    <mesh
                        ref={targetRef}
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_Material001_0.geometry}
                        material={materials['Material.001']}
                        position={[0, 121.244, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    />
                </group>
            </group>
        </Float>
    )
}

useGLTF.preload('/models/tape.glb')
