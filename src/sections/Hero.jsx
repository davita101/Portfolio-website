import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {ProgrammersRoom} from "../components/models/ProgrammersRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import {ReactLogo} from "../components/models/ReactLogo.jsx";
import {Target} from "../components/Target.jsx";
import {Leva, useControls} from "leva";
import {Cube} from "../components/models/Cube.jsx";
import HeroCamera from "../components/Hero-camera.jsx";
import {Tape} from "../components/models/Tape.jsx";

export default function Hero() {
    // const isTablet = useMediaQuery({maxWidth: 768})
    const isMobile = useMediaQuery({maxWidth: 634})
    const isSmall = useMediaQuery({maxWidth: 440})

    const sizes = calculateSizes(isSmall, isMobile)

    // const x = useControls("ProgrammersRoom",
    //     {
    //         positionX: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10,
    //         },
    //         positionY: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10,
    //         },
    //         positionZ: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10,
    //         },
    //         scale: {
    //             value: 1,
    //             min: 0.1,
    //             max: 10,
    //         },
    //         rotationY: {
    //             value: 0,
    //             min: -10,
    //             max: 10,
    //         },
    //         rotationX: {
    //             value: 0,
    //             min: -10,
    //             max: 10,
    //         },
    //         rotationZ: {
    //             value: 0,
    //             min: -10,
    //             max: 10,
    //         },
    //     })


    return (<section id="home">
        <div className="min-h-screen border-blue-500 w-full flex flex-col relative overflow-hidden">
            <div className="c-space w-full mx-auto  flex flex-col sm:mt-36 mt-20 gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center "> I am Davit <span
                    className="waweing-heand">&#128075;</span></p>
                <p className="text-gradient font-bold text-center md:text-5xl text-3xl  ">I am a web developer</p>
            </div>
            <div className="w-full h-full absolute ">
                {/*<Leva/>*/}
                <Canvas>
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        <HeroCamera isMobile={isMobile}>
                            <ProgrammersRoom
                                scale={sizes.scale}
                                position={sizes.objectPosition}
                                rotation={[-.1, 0, 0]}
                            />
                        </HeroCamera>
                        <group>
                            <Target
                                scale={sizes.targetScale}
                                position={sizes.targetPosition}
                                rotation={[3, 1.7, 0]}

                            />
                            <ReactLogo
                                position={sizes.reactLogoPosition}/>
                            <Cube
                                position={sizes.rectanglePosition}
                                scale={sizes.rectangleSize}
                            />

                            <Tape
                                scale={sizes.tapeScale}
                                position={sizes.tapePosition}
                            />

                        </group>

                        <ambientLight
                            intensity={1.5}/>
                        <directionalLight
                            position={[10, 10, 10]}
                            intensity={0.5}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="flex absolute bottom-1 left-0 right-0 w-full z-10 c-space">
                <div className="p-1 px-3 rounded-sm bg-neutral-950 mx-auto gap-2 flex items-center justify-center  ">
                    <div className="p-2 bg-neutral-50 rounded-full animate-pulse"/>
                    <p className="text-neutral-300">Lets have a business</p>
                </div>
            </div>
        </div>
    </section>)
}
