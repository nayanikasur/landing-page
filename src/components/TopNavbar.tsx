
import { ChevronDown, CircleUserRoundIcon } from "lucide-react";
import Logo from "../assets/Logo";
import Linkedin from "../assets/Social-media/Linkedin";
import Youtube from "../assets/Social-media/Youtube";

const TopNavbar: React.FC = () => {
    return (
        <div className="w-full bg-[#000000] border-b border-[#323539]">
            <div className="p-[20px] flex justify-center relative">


                <Logo />


                <div className="absolute right-[20px] top-[50%] -translate-y-1/2 flex space-x-2 items-center">

                    <div className="flex items-center gap-2 text-sm text-[#FFFFFF] cursor-pointer">
                        <CircleUserRoundIcon color="white" />
                        <p className="text-white">Priya Rai</p>
                        <ChevronDown color="white" />
                    </div>


                    <div className="flex items-center space-x-2 gap-4 text-zinc-300">
                        <Linkedin />
                        <Youtube />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopNavbar;
