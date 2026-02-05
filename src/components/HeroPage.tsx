import MainIllustration from "../assets/illustration/MainIllustration";
import Button from "./Button";

const HeroPage: React.FC = () => {
    return (
        <div className="w-full bg-[#000000]">
            <div
                className="
            text-[#F9F9F9]
        max-w-[100%]
        py-[80px]
        flex
        justify-center
        items-center
        bg-gradient-to-b
        from-[#000000]
        to-[#000063]
        rounded-b-[100px]
        gap-20
      "
            >

                <div className="flex flex-col items-end gap-3">

                    <div className="text-[90px] text-right font-[900] leading-none">
                        <span className="text-[52px] font-[500]">Be</span> <br />
                        Skilltastic!
                    </div>

                    <p className="text-right text-zinc-300">
                        BUILD, VALIDATE & STRENGTHEN YOUR CYBER SKILLS.
                        <br />
                        Open doors to resilient careers and future-ready opportunities.
                    </p>
                    <Button className="mt-[40px]">Get Started</Button>
                </div>



                <MainIllustration />
            </div >
        </div>
    );
};

export default HeroPage;
