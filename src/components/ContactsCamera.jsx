import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
export default function ContactsCamera({children, isMobile}) {
    const objRef = useRef(null);
    useFrame(() => {
        if (objRef.current) {
            objRef.current.rotation.y += 0.01
        }
    })
    return (
        <group ref={objRef}>{children}</group>
    )
}
