import { ArrowUp } from "lucide-react"
import Logo from "../assets/Logo"
import Linkedin from "../assets/Social-media/Linkedin"
import Youtube from "../assets/Social-media/Youtube"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (<div className="flex flex-col items-center bg-[#000000] text-[#FFFFFF]">

        <div className="flex justify-center p-[20px]">
            <h1 className="text-3xl">Powered By <strong>IdeaTribe</strong></h1>
        </div>

        <div className="w-full flex md:flex-row flex-col justify-between py-16 px-12 lg:px-28">
            <div>
                <Logo />
            </div>
            <div className="flex flex-col space-y-2  text-[#979AA0]">

                <h1 className="font-semibold text-white md:pb-4 md:mt-0 mt-[25px]">QUICK NAVIGATION</h1>
                <p>Home</p>
                <p>About</p>
                <p>Membership</p>
                <p>Contact</p>
                <p>Terms and conditions</p>
                <p>Privacy policy</p>
                <p>Cancellation and refund</p>
                <p>Shipping and exchange</p>
            </div>
            <div className="flex flex-col space-y-2  text-[#979AA0]">

                <h1 className="font-semibold text-white md:pb-4 md:mt-0 mt-[25px]">STAY CONNECTED</h1>
                <p className=" flex space-x-2"><Youtube /> <span>Youtube</span></p>
                <p className="flex space-x-2"><Linkedin /> <span>Linkedin</span></p>

            </div>
            <div className="flex flex-col space-y-2  text-[#979AA0]">

                <h1 className="font-semibold text-white md:pb-4 md:mt-0 mt-[25px]">GET IN TOUCH</h1>
                <p>team@gcaforum.com</p>
                <p>Phone No. +91 8910392803</p>

            </div>
        </div>
        <div className="flex flex-col space-y-2 items-center">

            <button
                onClick={scrollToTop}
                className="
          rounded-full
          bg-[#0000FF]
          w-14
          h-14
          flex
          justify-center
          items-center
          transition-all
          duration-300
          hover:scale-110
          active:scale-95
          shadow-lg
          hover:shadow-blue-500/30
          cursor-pointer
        "
            >
                <ArrowUp className="text-white" />
            </button>


            <p className="text-[#979AA0] pb-16 text-center">
                © 2025 Global Cybersecurity Association. All Rights Reserved.
            </p>

        </div>

    </div>)
}

export default Footer