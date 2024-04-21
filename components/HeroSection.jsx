import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";


export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "I like riding my 🚲",
            "I_like_to_code 🧑‍💻",
            "And I'm addicted to ☕",
        ],
        loop: true,
        delaySpeed: 1000,
    });

    return (
        <div className="my-12 flex flex-col  items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
                    hELLO 👋
                </h2>
                <h1 className="text-lg md:text-1xl lg:text-2xl font-semibold px-8">
                    <span className="mr-1">{text}</span>
                    <Cursor cursorColor="#68B2A0" />
                </h1>
            </div>
        </div>
    );
}
