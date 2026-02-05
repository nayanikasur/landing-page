"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import type { MenuItem } from "../types/menu";

const menu: MenuItem[] = [
    { name: "Home" },
    { name: "About", dropdown: ["Our Mission", "Team", "Partners"] },
    { name: "Event" },
    {
        name: "Free Learnings",
        dropdown: ["Webinars", "Workshops", "Resources"],
    },
    {
        name: "Certifications",
        dropdown: ["Comptia", "EC-Council", "Systools"],
    },
    {
        name: "Courses",
        dropdown: ["Frontend", "Backend", "Cybersecurity"],
    },
    { name: "Store" },
];

const MainNavbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [active, setActive] = useState<number | null>(null);

    return (
        <div className="max-w-full bg-[#000000] border-b border-[#323539] text-[#FFFFFF] p-[20px]">

            <div className="max-w-7xl mx-auto px-6">

                {/* ===== Top Row ===== */}
                <div className="flex items-center justify-between">

                    {/* Desktop Menu (UNCHANGED) */}
                    <div className="hidden lg:flex items-center justify-center gap-8 text-sm text-white w-full">

                        {menu.map((item, i) => (
                            <div key={i} className="relative group cursor-pointer">

                                <div className="flex items-center gap-1 hover:text-zinc-300 transition">
                                    {item.name}
                                    {item.dropdown && <ChevronDown size={14} />}
                                </div>

                                {item.dropdown && (
                                    <div className="absolute rounded-md overflow-hidden top-8 left-0 bg-zinc-900 border border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px]">

                                        {item.dropdown.map((sub, j) => (
                                            <div
                                                key={j}
                                                className="px-4 py-2 text-sm bg-[#252525] hover:bg-[#000000]"
                                            >
                                                {sub}
                                            </div>
                                        ))}

                                    </div>
                                )}

                            </div>
                        ))}

                    </div>

                    {/* ===== Mobile Hamburger ===== */}
                    <button
                        className="lg:hidden text-white cursor-pointer"
                        onClick={() => setOpen(true)}
                    >
                        <Menu />
                    </button>

                </div>

            </div>

            {/* ===== Mobile Menu Overlay ===== */}
            {open && (
                <div className="fixed inset-0 bg-black z-50 p-6 lg:hidden">

                    {/* Close */}
                    <div className="flex justify-end mb-6 cursor-pointer">
                        <button onClick={() => setOpen(false)}>
                            <X size={28} />
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <div className="flex flex-col gap-4 text-white">

                        {menu.map((item, i) => (
                            <div key={i}>

                                {/* Parent */}
                                <div
                                    onClick={() =>
                                        setActive(active === i ? null : i)
                                    }
                                    className="flex justify-between items-center py-3 border-b border-zinc-800"
                                >
                                    {item.name}
                                    {item.dropdown && <ChevronDown size={16} className="cursor-pointer" />}
                                </div>

                                {/* Dropdown */}
                                {active === i && item.dropdown && (
                                    <div className="pl-4 flex flex-col gap-2 mt-2 text-zinc-400">

                                        {item.dropdown.map((sub, j) => (
                                            <span key={j}>{sub}</span>
                                        ))}

                                    </div>
                                )}

                            </div>
                        ))}

                    </div>
                </div>
            )}

        </div>
    );
};

export default MainNavbar;
