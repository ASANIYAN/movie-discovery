import Image from "next/image";
import { ArrowDown2 } from "iconsax-react";

import two_tickets from "@/public/assets/two_tickets.svg";
import list from "@/public/assets/list.svg";
import list_white from "@/public/assets/list_white.svg";

import "./movie-details-main.css";

const MovieDetailsMain = ({ data }) => {
    const { overview,  } = data;

    return (
        <section className="flex flex-wrap gap-2.5 mt-10 mb-5">
            
            <section className="w-full 1100:w-[65%]">
                <p data-testid="movie-overview" className="text-color12 text-base sm:text-lg lg:text-xl font-normal"> {overview} </p>

                <section className="flex flex-col gap-5 mt-5 text-base sm:text-lg lg:text-xl">
                    <p className="text-color12 font-normal"> 
                        Director: <span className="text-color1"> Joseph Kosinski </span> 
                    </p>
                    <p className="text-color12 font-normal"> 
                        Writers: <span className="text-color1"> Joseph Kosinski </span> <span className="text-color1"> Joseph Kosinski </span> 
                    </p>
                    <p className="text-color12 font-normal"> 
                        Stars: <span className="text-color1"> Joseph Kosinski </span> <span className="text-color1"> Joseph Kosinski </span> 
                    </p>
                </section>
                
                <section className="flex flex-wrap items-center border border-color17 mt-6 rounded-[10px]">
                    <div className="bg-color1 w-full xs:w-fit rounded-[10px] p-3">
                        <p className="text-white text-base sm:text-lg lg:text-xl font-medium"> Top rated movie #65 </p>
                    </div>
                    <section 
                        className="text-color12 text-base sm:text-lg lg:text-xl font-medium flex flex-1 justify-between px-3 py-2"
                    >
                        <section className="flex items-center flex-wrap gap-1">
                            <span> Awards </span>
                            <span> 9 nominations </span>
                        </section>
                        <ArrowDown2 size={30} color="#333"/>
                    </section>
                </section>
            
            </section>

            <section className="w-full 1100:flex-1">
                <section className="space-y-2.5">
                    <button 
                        className="flex items-center justify-center text-white text-base sm:text-lg lg:text-xl w-full py-2 border 
                        border-color1 bg-color1 rounded-[10px]"
                    > 
                        <Image src={two_tickets} width={25} height={25} alt="two_tickets-icon" /> See Showtimes 
                    </button>
                    
                    <button 
                        className="flex items-center justify-center py-2 text-base sm:text-lg lg:text-xl text-color12 border w-full 
                        border-color1 bg-color5 rounded-[10px]"
                    > 
                        <Image src={list} width={23} height={23} alt="two_tickets-icon" /> More watch options 
                    </button>
                </section>

                <section className="bg-image h-[300px] 1100:h-[230px] rounded-[10px] flex items-end mt-2.5">
                    <p className="w-full flex justify-center mt-auto gap-1 z-10 p-2 text-color16 bg-color19 rounded-[10px] text-sm font-medium text-shadow"> 
                        <Image src={list_white} width={23} height={23} alt="list_white-icon" />
                        The Best Movies and Shows in September 
                    </p>
                </section>

            </section>

        </section>
    );
}
 
export default MovieDetailsMain;