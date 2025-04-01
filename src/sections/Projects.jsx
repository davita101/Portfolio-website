import React, {Suspense, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {PerspectiveCamera} from "@react-three/drei";
import {ProjectComputer} from "../components/models/RetroComputer.jsx";
import {StepBack, StepForward} from "lucide-react";
import {calculateSizes, projects} from "../constants/index.js";
import {useMediaQuery} from "react-responsive";

export default function Projects() {
    const isTablet = useMediaQuery({maxWidth: 768})
    const isMobile = useMediaQuery({maxWidth: 634})
    const isSmall = useMediaQuery({maxWidth: 440})

    const sizes = calculateSizes(isSmall, isMobile, isTablet)
    const [counter, setCounter] = useState(0);

    return (
        <section className="h-screen relative sm:container mx-auto py-20" id="projects">
            <div className="absolute sm:top-72 top-5 flex flex-col sm:gap-5 gap-3  sm:max-w-md left-0">
                <div className='card z-99'>
                    <h2 className="font-bold text-neutral-50 text-2xl">{projects[counter].title}</h2>
                </div>
                <div className='left-0 card z-99'>
                    <p>{projects[counter].paragraph}</p>
                    <br/>
                    <a className="text-neutral-300 hover:text-neutral-50 bg-neutral-800/40 rounded-md p-2 mr-3"
                       target="_blank" href={projects[counter].github}>Github</a>
                    <a className="text-neutral-300 hover:text-neutral-50 bg-neutral-800/40 rounded-md p-2"
                       target="_blank" href={projects[counter].website}>Website</a>
                </div>
                <div className={"flex max-sm:flex-col sm:gap-5 gap-3"}>
                    <div className='card z-99 flex gap-3 ml-auto sm:flex w-full flex-1'>
                        <h2 className=" text-neutral-50">Status</h2>
                        <div className="flex items-center gap-2">
                            <h3 className=" text-neutral-50">{projects[counter].status}</h3>
                            <div
                                className={`mt-1 size-3 animate-pulse ${projects[counter].status === "Active" ? "bg-green-400" :projects[counter].status === "Not finished" ? "bg-yellow-400" : "bg-red-500"} rounded-full`}/>
                        </div>
                    </div>
                    <div className='card z-99 flex gap-3'>
                        <StepBack
                            color={"white"}
                            className="cursor-pointer"
                            onClick={() =>
                                counter > 0 ? setCounter(counter - 1) : setCounter(projects.length - 1)
                            }
                        />
                        <StepForward
                            color={"white"}
                            className="cursor-pointer"
                            onClick={() =>
                                counter < projects.length - 1 ? setCounter(counter + 1) : setCounter(0)
                            }
                        />
                    </div>
                </div>

            </div>

            <Canvas>
                <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                    <group>
                        <ProjectComputer
                            scale={sizes.aboutScale}
                            position={sizes.aboutPosition}
                            videoUrl={projects[counter].videoUrl}
                        />
                        <ambientLight
                            intensity={10} color="white"/>
                        <directionalLight
                            position={[2, 20, 20]}
                            intensity={3}/>
                    </group>
                </Suspense>
            </Canvas>
        </section>
    )
}
