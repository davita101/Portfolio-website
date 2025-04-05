import React, {useState} from 'react'
import {Menu, X} from "lucide-react";
import {navLinks} from "../constants/index.js";
import {useHeaderStore} from "../store/header-store.js";

const NavItems = ({setIsOpen, isOpen}) => {
    return (
        <ul className=" flex sm:items-center items-start sm:flex-row flex-col sm:space-x-5 max-sm:space-y-5">
            {navLinks.map(({id, title, href}) => (
                <a
                    onClick={() => setIsOpen(!isOpen)}
                    key={id} href={href} className="w-full">
                    <li className="nav-link w-full">
                        {title}
                    </li>
                </a>
            ))}
        </ul>
    )
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const {isContact} = useHeaderStore()
    const toggleMenu = () => setIsOpen((prevState) => !prevState)
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 ${isContact ? "bg-linear-0" : "bg-black/90"} duration-300 text-white transition-all`}>
            <div className="container mx-auto">
                <div className="flex justify-between py-4  sm:px-10 px-5 flex-col sm:flex-row">
                    <div className="flex items-center space-x-5 w-full justify-between">
                        <a href="#home"
                           className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                            Davita
                        </a>
                        <button
                            className={"sm:hidden"}
                            areria-label="Toggle Menu"
                            onClick={toggleMenu}>
                            {!isOpen ? <Menu/> : <X/>}
                        </button>
                    </div>
                    <div className={`${isOpen ? 'max-h-screen' : 'max-h-0'} max-sm:w-full nav-sidebar`}>
                        <nav className="sm:flex">
                            <div className="py-2 ">
                                <NavItems isOpen={isOpen} setIsOpen={setIsOpen}/>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </header>)
}
``