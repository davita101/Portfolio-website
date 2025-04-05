import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";

export default function App() {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <About />
            <Projects />
        </main>
    )
}
