import { ArrowRight } from "lucide-react";
import type { FC } from "react";

interface IButtonProps {
    children: React.ReactNode | string;
    className?: string;
}
const Button: FC<IButtonProps> = ({ children, className }) => {
    return <button className={`cursor-pointer bg-[#0000FF] h-[60px] flex items-center space-x-2 text-[#FFFFFF] px-5 py-2 rounded-md border border-[2px] border-[#ffffff]/[0.33] ${className ?? ""}`}>
        <span>{children}</span>
        <ArrowRight />
    </button>
};

export default Button;