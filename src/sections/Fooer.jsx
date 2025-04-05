import React from 'react'
import {FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon} from "lucide-react";
import {socialLinks} from "../constants/index.js";

export default function Footer() {
    return (
        <div className="sm:-mt-16 -mt-24 relative flex justify-between container mx-auto">
            <div className="bg-neutral-950/50 transition-all p-5 w-full max-sm:flex-col max-sm:gap-3 items-center flex justify-between rounded-t-xl">
                <p className="hover:text-neutral-50">Davit GdzelIshvili 2025</p>
                <div className="flex gap-5">
                    <a href={socialLinks.fb} target="_blank"><FacebookIcon className="stroke-white hover:stroke-neutral-50"/></a>
                    <a href={socialLinks.instagram} target="_blank"> <InstagramIcon className="stroke-white hover:stroke-neutral-50"/></a>
                    <a href={socialLinks.linkedin} target="_blank"> <LinkedinIcon className="stroke-white hover:stroke-neutral-50"/></a>
                    <a href={socialLinks.github} target="_blank"> <GithubIcon className="stroke-white hover:stroke-neutral-50"/></a>
                </div>
            </div>
        </div>
    )
}
