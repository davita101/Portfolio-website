import React from 'react'
import {Html, useProgress} from "@react-three/drei";

export default function CanvasLoader() {
    const {progress} = useProgress()
    return (
        <Html
            as="div"
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        ><span className="canvas-laoder"/>
            <p style={{fontSize: "14px", color: "#F1F1F1", fontWeight: 800, marginTop: 40}}>
                {progress !== 0 ? `${progress.toFixed(0)}%` : 'Loading...'}
            </p>
        </Html>
    )
}
