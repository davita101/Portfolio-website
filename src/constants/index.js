export const navLinks = [
    {
        id: 1,
        title: "Home",
        href: "#home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        href: "#about",
        url: "/about",
    },
    {
        id: 3,
        title: "Projects",
        href: "#projects",
        url: "/projects",
    },
    {
        id: 4,
        title: "Contact",
        href: "#contact",
        url: "/contact",
    },
];

export const calculateSizes = (isSmall, isMobile,) => {
    return {
        objectPosition: isMobile ? [0.7, 3.5, 2.5] : [2.3, -2.5, -10.0],
        targetPosition: isMobile ? [-3, 3.3, 6.1] : [-8.3, -1.3, 2.5],
        reactLogoPosition: isMobile ? [4, 10, 1] : [6, 6, 8],
        rectanglePosition: isMobile ? [-4.1, 10.4, 0]  : [-10, 8.9, 2.5],
        tapePosition: isMobile ? [4, 2 ,6]  : [8, -5 ,0],
        scale: isMobile ? .8 : 2.0,
        targetScale: isMobile ? 1.2 : 2,
        tapeScale: isMobile ? .6  : 1,
        rectangleSize: isMobile ? .6  : 1,
    }
}
