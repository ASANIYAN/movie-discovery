import Image from "next/image";

import { PlayCircle } from "iconsax-react";

import imdb from "@/public/assets/imdb.svg";
import rotten_tomatoes from "@/public/assets/rotten_tomatoes.svg";
import ButtonRed from "../button/buttonRed";

const Hero = () => {
    return (
        <section className="lg:max-w-[400px] w-full text-white">
            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-center sm:text-left"> John Wick 3: Parabellum </h1>
            
            <section className="flex items-center justify-center sm:justify-start gap-2.5 mt-4">
                <section className="flex items-center gap-1.5"> 
                    <Image src={imdb} alt="imdb-icon" /> 
                    <p className="font-normal text-xs"> 86.0 / 100 </p>
                </section>
                <section className="flex items-center gap-1.5">
                    <Image src={rotten_tomatoes} alt="rotten_tomatoes-icon" />
                    <p className="font-normal text-xs"> 97% </p>
                </section>
            </section>
            
            <p className="font-normal text-sm text-center lg:text-left mt-4 w-full sm:max-w-[300px]">
                John Wick is on the run after killing a member of the international assassins&apos; guild, and with a $14 million price tag on his head, 
                he is the target of hit men and women everywhere.
            </p>
            
            <section className="mt-4 flex justify-center sm:justify-start">
                <ButtonRed>
                    <PlayCircle color="#ffffff" variant="Bold" size={20}/>
                    <span className="uppercase text-sm font-semibold"> Watch Trailer  </span>
                </ButtonRed>
            </section>
        </section>
    );
}
 
export default Hero;