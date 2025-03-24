import React, {useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

export function Target(props) {
    const targetRef = useRef()

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            z: targetRef.current.position.x + .3,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        }, {})
    })
    const {nodes, materials} = useGLTF('/models/target.glb')

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    ref={targetRef}
                    geometry={nodes.defaultMaterial.geometry}
                    material={materials['1001']}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/target.glb')
