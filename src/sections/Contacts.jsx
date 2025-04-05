import React, {Suspense,  useRef, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useGSAP} from "@gsap/react";
import {useHeaderStore} from "../store/header-store.js";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import SliceText from "../hooks/slice-text.jsx";
import {FlyHouse} from "../components/models/FlyHouse.jsx";
import {useMediaQuery} from "react-responsive";
import ContactsCamera from "../components/ContactsCamera.jsx";
import emailjs from "@emailjs/browser"
import {RefreshCcw} from "lucide-react";


gsap.registerPlugin(ScrollTrigger)

export default function Contacts() {
    const {setIsContact, unsetIsContact, isContact} = useHeaderStore()
    const [isLoading, setIsLoading] = useState(false)
    const [isSend, setIsSend] = useState("Submit")
    const formRef = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault()
        setIsLoading(true)
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false)
            setIsSend("Send! Successfully!")
            setTimeout(() => {
                setIsSend("Submit")
            }, 2000)
        })
            .catch(() => setTimeout(() => {
                setIsSend("Error!")
            }, 2000))
    }
    const isSmall = useMediaQuery({maxWidth: 800})
    useGSAP(() => {
        const animation = gsap
            .timeline({
                repeat: -1,
                yoyo: true,
            })
            .to("#contact", {
                scrollTrigger: {
                    trigger: '#contact',
                    start: 'top ',
                    onEnter: () => {
                        setIsContact()
                    },
                    onToggle: () => {
                        unsetIsContact()
                    },
                    scrub: true,
                }
            })
            .to("#text div", {
                y: isSmall ? 30 : 100,
                ease: "Power2.easeIn",
                stagger: 0.2,
            })
        return () => {
            animation.endTime()
        }
    })

    return (
        <section id="contact">
            <div className="overflow-x-hidden">
                <div className="relative  h-[120vh] bg-[url(/textures/sky-house-bg.png)] bg-no-repeat bg-cover">
                    <div className="absolute top-0 left-0 right-0 bottom-0">
                        <div
                            className="absolute md:top-[50%] top-[55%] md:left-[20%] right-[50%] left-[50%] translate-x-[-50%] md:size-86 w-full z-[99]">
                            <div className="p-2 relative">
                                <h2 className="text-white text-2xl px-5 font-bold font-mono">Thank you for reading my portfolio</h2>
                                <p className=" px-5">if you are interested for my portfolio send me email</p>
                                <form ref={formRef} className="relative z-[99] flex flex-col gap-2  p-5">
                                    <input type="email" name="email_from" id="e1" placeholder="Email"/>
                                    <textarea name="message" id="m1" cols="md:30" rows="md:10" placeholder="Message"/>
                                    <button onClick={(e) => sendEmail(e)}
                                            className="p-2 flex justify-center gap-2 items-center rounded-md cursor-pointer hover:bg-neutral-950/80 bg-neutral-950 text-neutral-50"
                                            type="submit"> {isSend} {isLoading && (
                                        <RefreshCcw className="animate-spin"/>)}
                                    </button>
                                </form>
                            </div>
                        </div>


                        <h2 id="text"
                            className={`absolute font-mono font-bold ${isSmall ? "text-4xl top-[0%]" : "text-6xl"} left-[50%] translate-x-[-50%] text-white top-[20%] ${isContact ? " opacity-100" : "opacity-0"} transition-all flex`}>
                            <SliceText>CONTACT ME</SliceText></h2>
                        <Canvas>
                            <Suspense fallback={<CanvasLoader/>}>
                                <group>
                                    <ContactsCamera isMobile={isSmall}>
                                        <FlyHouse
                                            scale={isSmall ? .8 : 1.5}
                                            position={[0, isSmall ? .7 : -1, 0]}
                                        />
                                    </ContactsCamera>
                                </group>
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </div>
        </section>)
}
