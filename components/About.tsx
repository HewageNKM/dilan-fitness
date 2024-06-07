// @flow
import * as React from 'react';
import {AnimatedToolTip} from "@/components/ui/Animated-ToolTip";
import {team} from "@/data";

type Props = {};
export const About = () => {
    return (
        <div className="my-20 w-full bg-blue-100 p-5 rounded-lg" id="about">
            <div>
                <h1 className="font-bold text-5xl">About <br/> Us.</h1>
            </div>
            <div className="grid grid-cols-2 gap-10 items-center my-10">
                <p className="font-normal text-slate-500 text-3xl">
                    Welcome to Dilan Fitness, where fitness meets community and passion transforms into progress. At
                    Dilan Fitness, we're not just about lifting weights or breaking a sweat; we're about forging
                    connections, fostering growth, and empowering every individual who walks through our doors. Our
                    experienced trainers are dedicated to guiding you on your fitness journey, whether you're a beginner
                    or a seasoned athlete. With state-of-the-art facilities, diverse classes, and personalized training
                    programs, we strive to create an inclusive environment where everyone feels supported and motivated
                    to achieve their goals. Join us at Dilan and experience the synergy of strength, dedication, and
                    camaraderie that defines our vibrant fitness family.
                </p>
                <figure className="w-full">
                    <img src="/about-img.jpg" className="rounded-lg bg-center bg-cover w-[100vw]" alt="about-img"/>
                </figure>
            </div>
            <div className="flex justify-center flex-col gap-5">
                <h2 className="font-bold text-xl">Meet Our Team</h2>
                <div className="flex flex-row">
                    <AnimatedToolTip items={team}/>
                </div>
            </div>
        </div>
    );
};