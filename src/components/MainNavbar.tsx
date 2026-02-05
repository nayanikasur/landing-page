"use client";

import { ChevronDown } from "lucide-react";
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
    return (
        <div className="max-w-full bg-[#000000] border-b border-[#323539] text-[#FFFFFF] p-[20px]">

            <div className="max-w-7xl mx-auto px-6">


                <div className="flex items-center justify-center gap-8 text-sm text-white">

                    {menu.map((item, i) => (
                        <div key={i} className="relative group cursor-pointer">


                            <div className="flex items-center gap-1 hover:text-zinc-300 transition">
                                {item.name}
                                {item.dropdown && <ChevronDown size={14} />}
                            </div>


                            {item.dropdown && (
                                <div className="absolute rounded-full overflow-hidden top-8 left-0 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px]">

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

            </div>
        </div>
    );
};

export default MainNavbar;
