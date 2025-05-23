"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
 
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <div onClick={() => scrollToSection('home')}>
                    <MenuItem setActive={setActive} active={active} item="Home" />
                </div>
                <div onClick={() => scrollToSection('about')}>
                    <MenuItem setActive={setActive} active={active} item="About" />
                </div>
                <div onClick={() => scrollToSection('skills')}>
                    <MenuItem setActive={setActive} active={active} item="Skills" />
                </div>
                <div onClick={() => scrollToSection('projects')}>
                    <MenuItem setActive={setActive} active={active} item="Projects" />
                </div>
                <div onClick={() => scrollToSection('journey')}>
                    <MenuItem setActive={setActive} active={active} item="My Journey" />
                </div>
                <div onClick={() => scrollToSection('contact')}>
                    <MenuItem setActive={setActive} active={active} item="Contact" />
                </div>
            </Menu>
        </div>
    );
}

export default Navbar;
