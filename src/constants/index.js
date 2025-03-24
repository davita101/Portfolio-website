export const navLinks = [
    {
        id: 1,
        title: "Home",
        href: "#Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        href: "#About",
        url: "/about",
    },
    {
        id: 3,
        title: "Services",
        href: "#Services",
        url: "/services",
    },
    {
        id: 4,
        title: "Contact",
        href: "#Services",
        url: "/contact",
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet,) => {
    return {
        scale: isMobile ?  .8 : 2.0,
        objectPosition: isMobile ? [0.7, 3.5, 2.5] : [2.3, -2.5, -10.0],

    }

}