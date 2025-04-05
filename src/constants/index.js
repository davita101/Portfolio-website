import {
    GsapIcon, NextJsIcon,
    NodeIcon,
    ReactIcon,
    ShadCnIcon,
    TailwindIcon, ThreeJsIcon,
    TsIcon,
    ZodIcon,
    ZustandIcon
} from "../assets/icons/index.js";

export const navLinks = [{
    id: 1, title: "Home", href: "#home", url: "/",
}, {
    id: 2, title: "About", href: "#about", url: "/about",
}, {
    id: 3, title: "Projects", href: "#projects", url: "/projects",
}, {
    id: 4, title: "Contact", href: "#contact", url: "/contact",
},];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        objectPosition: isMobile ? [0.7, 3.5, 2.5] : [2.3, -2.5, -10.0],
        targetPosition: isMobile ? [-3, 3.3, 6.1] : [-12, -1.3, 2.5],
        reactLogoPosition: isMobile ? [4, 10, 1] : [11, 7, 8],
        rectanglePosition: isMobile ? [-4.1, 10.4, 0] : [-11, 8.9, 2.5],
        aboutPosition: isMobile ? [-10, -1, 0] : isTablet ? [0, 0, 0] : [0, 0, 0],
        tapePosition: isMobile ? [4, 2, 6] : [11, -5, 6],
        scale: isMobile ? .8 : isTablet ? 2.5 : 3.0,
        aboutScale: isSmall ? 1 : isMobile ? 1 : isTablet ? .5 : .68,
        aboutRotate: isMobile ? [0, 0, 0] : isTablet ? [0, 0, 0] : [0, 0, 0],
        targetScale: isMobile ? 1.2 : 2,
        tapeScale: isMobile ? .6 : 1,
        rectangleSize: isMobile ? .6 : 1,

    }
}

export const projects = [
    {
        title: "PixelPulse",
        paragraph: "This project aims to make full responsive, landing website, with combine of GSAP , TailwindCss and React.js. Website has modern, animation style",
        videoUrl: "/video/PixelPulse-website.mp4",
        status: "Active",
        github: "https://github.com/davita101/PixelPulse",
        website: "https://davita101.github.io/PixelPulse/",
        icons: [ReactIcon, GsapIcon, TailwindIcon],
    },
    {
        title: "Goal Oriented Website",
        paragraph: "Goal Oriented Academy (GOA) is a comprehensive platform designed to manage and facilitate the activities of leaders, mentors, and students. This project includes backend services built with Node.js and Express, and a frontend built with React.",
        videoUrl: "/video/goa-website.mp4",
        status: "Not finished",
        github: "https://github.com/grdzelo-cloud/Goal-Oriented-Academy-Server-Website",
        website: "https://goa-website.onrender.com/",
        icons: [ReactIcon, GsapIcon, TailwindIcon, TsIcon, ZodIcon, NodeIcon, ShadCnIcon, ZustandIcon],
    },
    {
        title: "Postivus",
        paragraph: "This project aims to create a website using React with the goal of connecting different components using NEXT js. Additionally, Tailwind CSS will be used to style the website.",
        videoUrl: "/video/postivus-website.mp4",
        status: "Active",
        github: "https://github.com/davita101/positivus",
        website: "https://positivus-jade-seven.vercel.app/",
        icons: [ReactIcon, TailwindIcon, NextJsIcon],
    },   {
        title: "Portfolio",
        paragraph: "My personal developer portfolio showcasing projects and skills. Crafted using React, Tailwind CSS, Three.js, GSAP, and Zustand. Built with performance and interactivity in mind.",
        videoUrl: "/video/portfolio-website.mp4",
        status: "Active",
        github: "https://github.com/grdzelo-cloud/Portfolio",
        website: "https://positivus-jade-seven.vercel.app/",
        icons: [ReactIcon, TailwindIcon, ThreeJsIcon, ZustandIcon, GsapIcon, ],
    },
]

export const socialLinks = {
    fb: "https://www.facebook.com/gela.gelashvili.71465572",
    linkedin: "https://www.linkedin.com/in/davit-grdzelishvili/",
    instagram: "https://www.instagram.com/davitactor/",
    github: "https://github.com/davita101?"
}