import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contacts from "./sections/Contacts.jsx";
import Footer from "./sections/Fooer.jsx";

export default function App() {
    return (
        <>
            <main>
                <Navbar/>
                <Hero/>
                <About/>
                <Projects/>
                <Contacts/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>

    )
}
