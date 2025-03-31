import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import {easing} from "maath"

export default function HeroCamera({children, isMobile}) {

    const groupRef = useRef()

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [.5, 5, 35], 0.25, delta);

        if (!isMobile) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 5, state.pointer.x / 50, 0], 0.25, delta);
        }
    })
    return (
        <group ref={groupRef}>{children}</group>
    )
}
