import type { FC } from "react";
import HeroPage from "./HeroPage";
import StackedCards from "./StackedCards";
import ParallaxBanner from "./ParallaxBanner";

const Content: FC = () => {
    return <>
        <HeroPage />
        <ParallaxBanner text="Three steps. A million possibilities." image="Banner.jpg" />
        <StackedCards />
        <ParallaxBanner text="Join us on a journey to excellence" buttonText='Get Started' image="Bulb.jpg" />
    </>
};

export default Content;