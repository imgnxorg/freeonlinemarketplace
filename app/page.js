import React from "react";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import QuickMenu from "@/components/quick-menu";
import Robot from "@/components/robot";
import "@reach/skip-nav/styles.css";
import atf from "./atf.module.css";
import Wheel from "@/wheel-of-fortune/wheel";
{
    /* <div className={`backdrop absolute inset-0 z-[51] border-8 border-double -border-offset-8 mix-blend-difference`}></div><div className={`vignette absolute inset-[8px] z-50`}></div> */
}

const MarketplaceOfTheMind = () => {
    return (
        <>
            <div className="relative z-0 aspect-[16/9] h-[100vh] w-[100vw] flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-[url(/img/hand-left.png)] bg-cover bg-no-repeat bg-center z-10 pointer-events-none mix-blend-color-burn" />
                <div className="absolute inset-0 bg-[url(/img/hand-right.png)] bg-cover bg-no-repeat bg-center z-0 pointer-events-none" />
                <div className={`${atf.squareFrame} border-inset`} />
                <div
                    className="w-[100vh] h-[100vh] mx-auto rounded-full 
                    z-[14]
                    flex flex-col items-center justify-center
                
                "
                >
                    <div
                        className="absolute w-[99vh] h-[99vh]
                        z-[8] 
                     flex flex-col justify-center items-center bg-center 
                    bg-no-repeat bg-contain unselectable animate-spin-lower rounded-full
                    border-8 border-[--mauve-9] border-inset
                    ring-inset ring-8 ring-[--mauve-9] dark:ring-offset-taupe-400 ring-offset-[140px]
                    outline outline-8 -outline-offset-[142px] outline-[--taupe-5]
taupe  "
                    >
                        <img src="/img/freemart-ring.png" className="inset-0" />
                    </div>
                    <div
                        className="bg-[url(/img/hand-left.png)] absolute pointer-events-none w-[100vh] h-[100vh] rounded-full bg-cover bg-no-repeat bg-center 
                        mix-blend-color-burn
z-[20] bg-clip-border flex items-center justify-center"
                    />
                    <div
                        className="bg-[url(/img/hand-right.png)] absolute pointer-events-none w-[100vh] h-[100vh] rounded-full bg-cover bg-no-repeat bg-center 
                        mix-blend-luminosity
z-[20] bg-clip-border flex items-center justify-center"
                    />
                    <Robot />
                </div>
            </div>
            <div className="w-full h-[16]"></div>
            <SkipNavContent />
            <div className="container mx-auto max-w-5xl tracking-tighter font-semibold leading-9">
                <div className="text-6xl font-medium prose-2xl text-balance">
                    <span className="animate-heartbeat">_</span>
                    The{" "}
                    <span className="bg-gradient-to-r from-ferrari-600 to-candy-apple-600 bg-clip-text text-transparent font-black">
                        Marketplace{" "}
                    </span>
                    of the{" "}
                    <span className="bg-gradient-to-r from-pink-400 to-mauve-600 bg-clip-text text-transparent font-black">
                        Mind
                    </span>
                </div>
            </div>
            <Wheel />
            <QuickMenu className="absolute bottom-0" />
        </>
    );
};

export default MarketplaceOfTheMind;
