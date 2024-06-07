// @flow
import * as React from 'react';
import {FlipWords} from "@/components/ui/FlipWords";

export const Hero = () => {
    return (
        <div className="md:w-fulll relative overflow-hidden ml-8 mt-[9rem] h-[35vh] lg:h-[85vh] bg-red-500 w-[90vw] md:mt-44 shadow-lg rounded-lg">
            <div className="w-full h-screen">
                <img src="/hero_bg.png" className="bg-cover bg-center w-[100vw] md:w-[68vw]" alt="herobg"/>
            </div>
            <div className="flex w-full hover:translate-x-2 duration-300 -top-10 md:top-0 mx-auto absolute flex-col pt-20 justify-center items-center">
                <p className="line-clamp-1 text-white font-medium text-xl">Achieve Your Goals</p>
                <div
                    className="font-bold tracking-wide bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient uppercase text-[12vw]">Build
                    Your <br/> <FlipWords words={["STRENGTH", "STAMINA", "POWER"]}/></div>
            </div>
        </div>
    );
};