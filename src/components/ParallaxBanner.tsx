import type { FC } from "react";
import { Parallax } from "react-parallax";
import Button from "./Button";

interface IParallaxBanner {
    text: string;
    image: string;
    buttonText?: string;
}
const ParallaxBanner: FC<IParallaxBanner> = ({ text, image, buttonText }) => {
    return <Parallax bgImage={image} bgImageAlt="banner image" strength={200}>
        <div className='py-[64px] flex justify-center items-center gap-15 px-10 bg-[linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_50%),linear-gradient(0deg,rgba(0,0,0,0)_58.24%,#000000_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))] text-center'>
            <h1 className='text-[52px] text-center font-bold text-white'>{text}</h1>
            {buttonText ? <Button>{buttonText}</Button> : <></>}
        </div>
    </Parallax>
};

export default ParallaxBanner;