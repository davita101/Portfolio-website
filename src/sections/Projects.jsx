import React, {Suspense, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Center, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {ProjectComputer} from "../components/models/RetroComputer.jsx";
import {StepBack, StepForward} from "lucide-react";
import {useMediaQuery} from "react-responsive";
import {ReactIcon} from "../assets/icons/index.js";
import {projects} from "../constants/index.js";
import Button from "../components/ui/Button.jsx";

export default function Projects() {
    const isSmall = useMediaQuery({maxWidth: 440})

    const [counter, setCounter] = useState(0);
    return (
        <section className="bg-linear-to-t xl:container c-space mx-auto py-20"
                 id="projects">
            <div className="grid grid-rows-2 grid-cols-2 gap-5 ">
                <div
                    className="rounded-xl bg-neutral-950 justify-between  col-span-2 lg:col-span-1 lg:row-span-2 md:row-span-2 row-span-1 flex flex-col gap-3 md:gap-5  c-space p-6">
                    <div>
                        <h2 className="font-bold text-neutral-50 text-2xl">{projects[counter].title}</h2>
                    </div>
                    <div>
                        <p>{projects[counter].paragraph}</p>
                        <br/>
                        <a className="text-neutral-300 hover:text-neutral-50 bg-neutral-800/40 rounded-md p-2 mr-3"
                           target="_blank" href={projects[counter].github}>Github</a>
                        <a className="text-neutral-300 hover:text-neutral-50 bg-neutral-800/40 rounded-md p-2"
                           target="_blank" href={projects[counter].website}>Website</a>
                    </div>
                    <div>
                        <div className="flex gap-5 flex-wrap ">
                            {projects[counter].icons.map((icon, index) => (
                                <div key={index}
                                     className="bg-neutral-800/20 xs:w-15 w-11 flex items-center rounded-md p-2">
                                    <img src={icon} alt={icon.title}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex max-md:flex-col md:gap-5  justify-between bg-neutral-800/20 rounded-xl p-4">
                        <div className='flex gap-3 ml-auto md:flex w-full '>
                            <h2 className=" text-neutral-50">Status</h2>
                            <div className="flex items-center gap-2 ">
                                <h3 className=" text-neutral-50">{projects[counter].status}</h3>
                                <div
                                    className={`mt-1 size-3 animate-pulse ${projects[counter].status === "Active" ? "bg-green-400" : projects[counter].status === "Not finished" ? "bg-yellow-400" : "bg-red-500"} rounded-full`}/>
                            </div>
                        </div>
                        <div className='max-md:hidden flex gap-3'>
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

                    <div className='md:hidden flex justify-between w-full col-span-2 row-start-2'>
                        <StepBack
                            color={"white"}
                            className="cursor-pointer bg-neutral-800/20 size-10 py-1 rounded-sm"
                            onClick={() =>
                                counter > 0 ? setCounter(counter - 1) : setCounter(projects.length - 1)
                            }
                        />
                        <StepForward
                            color={"white"}
                            className="cursor-pointer bg-neutral-800/20 size-10 py-1 rounded-sm"
                            onClick={() =>
                                counter < projects.length - 1 ? setCounter(counter + 1) : setCounter(0)
                            }
                        />
                    </div>
                </div>
                <div
                    className="rounded-xl c-space col-span-2 lg:col-span-1 lg:row-span-2 md:row-span-2 row-start-2 h-96 bg-neutral-950">
                    <Canvas>
                        <ambientLight
                            intensity={10} color="white"/>
                        <directionalLight
                            position={[2, 20, 20]}
                            intensity={3}/>
                        <Center>
                            <Suspense fallback={<CanvasLoader/>}>
                                {/*<PerspectiveCamera makeDefault position={[0, 0, 30]}/>*/}
                                <group
                                    position={[0, 1, 0]}
                                    scale={isSmall ? .16 : .4}
                                    rotation={[1.5, 0, 0]}>
                                    <ProjectComputer
                                        videoUrl={projects[counter].videoUrl}
                                    />
                                </group>
                            </Suspense>
                            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                        </Center>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
