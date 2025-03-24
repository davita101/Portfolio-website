import React, {useRef, useState} from 'react'
import {Float, useGLTF} from '@react-three/drei'
import gsap from "gsap"
import {useGSAP} from "@gsap/react"

export function Cube(props) {
    const {nodes, materials} = useGLTF('/models/cube.glb')


    const [hovered, setHovered] = useState(false)
    const cubeRef = useRef()

    useGSAP(() => {
        const animation = gsap
            .timeline({
                repeat: -1,
                yoyo: true,
            })
            .to(cubeRef.current.rotation, {
                y: `+=${Math.PI * 2}`,
                x: `-=${Math.PI * 2}`,
                duration: 2.5,
                yoyo: true,
            })

        return () => {
            animation.kill()
        }
    })

    useGSAP(() => {
        if (hovered) {
            gsap.to(cubeRef.current.rotation, {
                ease: "power2.inOut",
            })
            gsap.globalTimeline.timeScale(.5)
        }else{
            gsap.globalTimeline.timeScale(1)

        }
    }, [hovered])
    return (
        <Float floodOpacity={2}>
            <group position={[9, -4, 0]} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null} {...props}>
                <mesh
                    ref={cubeRef}
                    onPointerEnter={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    geometry={nodes.Object_2.geometry}
                    material={materials.None}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/cube.glb')






