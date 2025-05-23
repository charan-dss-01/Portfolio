"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsSidebarOpen(false);
        }
    };

    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'journey', label: 'My Journey' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="fixed top-4 right-4 z-50 md:hidden p-2 rounded-lg bg-black/10 backdrop-blur-sm"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

            {/* Desktop Menu */}
            <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 hidden md:block", className)}>
                <Menu setActive={setActive}>
                    {menuItems.map((item) => (
                        <div key={item.id} onClick={() => scrollToSection(item.id)}>
                            <MenuItem setActive={setActive} active={active} item={item.label} />
                        </div>
                    ))}
                </Menu>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-64 bg-black/10 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto",
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                )}
                style={{ marginRight: 0 }}
            >
                <div className="flex flex-col items-start p-8 mt-16 space-y-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-lg font-medium hover:text-white/80 transition-colors w-full text-left"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Overlay when sidebar is open */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </>
    );
}

export default Navbar;
