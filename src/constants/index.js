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
        aboutPosition: isMobile ? [0, -9, 6] : [0, 0, 0],
        tapePosition: isMobile ? [4, 2, 6] : [11, -5, 6],
        scale: isMobile ? .8 : isTablet ? 2.5 : 3.0,
        aboutScale: isMobile ? .4 : 1.0,
        targetScale: isMobile ? 1.2 : 2,
        tapeScale: isMobile ? .6 : 1,
        rectangleSize: isMobile ? .6 : 1,

    }
}

export const projects = [
    {
        title: "Goal Oriented Website",
        paragraph: "Goal Oriented Academy (GOA) is a comprehensive platform designed to manage and facilitate the activities of leaders, mentors, and students. This project includes backend services built with Node.js and Express, and a frontend built with React.",
        videoUrl: "/video/goa-website.mp4",
        status: "Not finished",
        github: "https://github.com/grdzelo-cloud/Goal-Oriented-Academy-Server-Website",
        website: "https://goa-website.onrender.com/"
    },
    {
        title: "PixelPulse",
        paragraph: "This project aims to make full responsive, landing website, with combine of GSAP , TailwindCss and React.js. Website has modern, animation style",
        videoUrl: "/video/goa-website.mp4",
        status: "Active",
        github: "https://davita101.github.io/PixelPulse/",
        website: "https://davita101.github.io/PixelPulse/"
    }
]