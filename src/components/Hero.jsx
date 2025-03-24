import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {ProgrammersRoom} from "./models/ProgrammersRoom.jsx";
import CanvasLoader from "./CanvasLoader.jsx";
import {Leva, useControls} from "leva";

export default function Hero() {

    const x = useControls("ProgrammersRoom",
        {
            positionX: {
                value: 2.5,
                min: -10,
                max: 10,
            },
            positionY: {
                value: 2.5,
                min: -10,
                max: 10,
            },
            positionZ: {
                value: 2.5,
                min: -10,
                max: 10,
            },
            scale: {
                value: 1,
                min: 0.1,
                max: 10,
            },
            rotationX: {
                value: 0,
                min: -10,
                max: 10,
            },
            rotationY: {
                value: 0,
                min: -10,
                max: 10,
            },
            rotationZ: {
                value: 0,
                min: -10,
                max: 10,
            },
        })

    return (<div>
        <div className="min-h-screen border-blue-500 w-full flex flex-col relative">
            <div className="c-space w-full mx-auto  flex flex-col sm:mt-36 mt-20 gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center "> I am Davit <span
                    className="waweing-heand">&#128075;</span></p>
                <p className="text-gradient font-bold text-center md:text-5xl text-3xl  ">I am a web developer</p>
            </div>
            <div className="w-full h-full absolute ">
                <Leva/>
                <Canvas>
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        <ProgrammersRoom
                            // scale={5}
                            // position={[4, -10, 0]}
                            // rotation={[0, 0, 0]}
                            // rotation={[0, 0, 0]}
                            position={[x.positionX, x.positionY, x.positionZ]}
                            rotation={[x.rotationY, x.rotationX, x.rotationZ]}
                            scale={[x.scale, x.scale, x.scale]}
                        />
                        <ambientLight
                            intensity={1}/>
                        <directionalLight
                            position={[10, 10, 10]}
                            intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    </div>)
}
