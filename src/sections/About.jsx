import React, {useRef, useState} from 'react'
import {
    ContactsIcon,
    GitIcon,
    GsapIcon,
    NodeIcon,
    ReactIcon,
    ShadCnIcon,
    TailwindIcon,
    ThreeJsIcon,
    TsIcon,
    ZodIcon,
    ZustandIcon
} from "../assets/icons/index.js"
import {CoddingPicture, ProfilePicture} from "../assets/photos/index.js"
import Globe from "react-globe.gl"
import {Check, Copy} from "lucide-react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Button from "../components/ui/Button.jsx";

export default function About() {
    const [copied, setCopied] = useState(false);
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const timeline = gsap.timeline()
            .from("#aboutText div", {
                scrollTrigger: {
                    trigger: "#home",
                    start: "100px",
                    scrub: true,
                },
                duration: 1,
                ease: "power1",
                opacity: 0,
                stagger: 0.3,

            })

        return () => {
            timeline.endTime()
        }
    })
    const handleCopy = () => {
        navigator.clipboard.writeText('grdzelishvilidvaiti@gmail.com')
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }
    return (
        <section className="relative xl:container mx-auto c-space my-20" id="about">
            <div id={"aboutText"}
                 className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img
                            src={ProfilePicture}
                            alt="Profile picture"
                            className="w-[300px] h-fit object-contain"
                        />
                        <div className="">
                            <p>
                                <span className="text-xl font-bold text-slate-50">Hi I am Davit</span>
                                <br/>
                                I work at GOA as a full stack developer mentor. I have excellent
                                communication skills and i am able to learn quickly, I am also
                                punctual and hard-working person. I have quite good English
                                knowledge as well</p>
                        </div>
                    </div>
                </div>

                <div className=" col-span-1 xl:row-span-3 w-full">
                    <div
                        className="grid-container justify-between">

                        <div className="flex flex-wrap content-center items-center justify-start gap-2">
                            <img src={ReactIcon} alt="React icon" className="img-w"/>
                            <img src={TailwindIcon} alt="Tailwindcss icon" className="img-w"/>
                            <img src={TsIcon} alt="Typescript icon" className="img-w"/>
                            <img src={ZodIcon} alt="Zod icon" className="img-w"/>
                            <img src={NodeIcon} alt="Node express icon" className="img-w"/>
                            <img src={GsapIcon} alt="Gsap icon" className="img-w"/>
                            <img src={GitIcon} alt="Git icon" className="img-w"/>
                            <img src={ThreeJsIcon} alt="Threejs icon" className="img-w"/>
                            <img src={ShadCnIcon} alt="ShadCn icon" className="img-w"/>
                            <img src={ZustandIcon} alt="Zusatand icon" className="sm:w-40 w-30"/>
                        </div>
                        <p>
                            <span className="text-xl font-bold text-slate-50">Tech Stack</span>
                            <br/>
                            I specialize in <span className="font-bold">javaScript/JavaScript, Tailwind CSS</span>, and
                            React libraries like <span className="font-bold">Zod</span>. I also work
                            with <span className="font-bold">Node.js/Express, GSAP, Zustand, shadCn Git</span> to build
                            high-performance and visually engaging
                            web applications.
                        </p>
                    </div>
                </div>

                <div className=' col-span-1 xl:row-span-4'>
                    <div className="grid-container overflow-hidden flex justify-center items-center w-full">

                        <Globe
                            height={344}
                            width={325}
                            showAtmosphere
                            showGraticules
                            backgroundColor={'rgba(0,0,0,0)'}
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"

                        />
                        <div className="flex flex-col justify-start items-start w-full">
                            <p className={"font-bold text-xl text-start text-slate-50"}>I work remotely</p>
                            <p>
                                i'm base in Georgia Tbilisi, with remote work
                            </p>
                            <a href="#contact"
                               className="bg-neutral-800 p-2 rounded-md text-neutral-50 mხ-auto mt-2 flex items-center gap-2"
                            >
                                <div className="size-3 bg-green-400 rounded-full animate-pulse"/>
                                <span className="text-lg text-neutral-50">contact me</span>
                            </a>
                        </div>
                    </div>

                </div>

                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className="grid-container">

                        <img src={CoddingPicture} alt="Coddding photo"
                             className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div className="flex flex-col justify-start items-start w-full">
                            <p className="  mx-auto"><span className="text-lg text-neutral-50">My code base</span>
                                <br/>
                                I create fast and visually appealing websites. I use JavaScript and React to build the
                                functionality, Tailwind CSS for design, and GSAP for animations. Node.js helps with the
                                server, and I use Git to manage changes.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src={ContactsIcon}
                            alt="Contact icon"
                            className="md:w-[126px] sm:w-[276px] w-[276px] mx-auto  object-cover"
                        />
                        <div className="space-y-2 hover:text-neutral-50 group">
                            <p className="grid-subtext text-center text-lg text-neutral-50">Contact me</p>
                            <a
                                onClick={handleCopy}
                                href="#contacts"
                                className="bg-neutral-800 p-2 rounded-md text-neutral-50 mt-2 flex items-center gap-2 justify-center"
                            >
                                {copied ? <Check/> : <Copy/>}
                                <p
                                    className="group-hover:text-neutral-50">grdzelishvilidaviti@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute -bottom-30 left-0 right-0 w-full z-10 flex">
                    <Button>Keep follow my projects</Button>
                </div>
            </div>
        </section>)
}
