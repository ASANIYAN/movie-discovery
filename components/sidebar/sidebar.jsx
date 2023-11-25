import Image from "next/image";
import { Fragment } from "react";

import home_logo from "@/public/assets/tv.svg";
import home_nav_icon from "@/public/assets/home.svg";
import movie_nav_icon from "@/public/assets/movie.svg";
import tv_nav_icon from "@/public/assets/tv_show.svg";
import upcoming_nav_icon from "@/public/assets/calendar.svg";
import logout_nav_icon from "@/public/assets/logout.svg";

const navigations = [
    {name: 'Home', img: home_nav_icon, alt: 'home-navigation-icon'},
    {name: 'Movies', img: movie_nav_icon, alt: 'movies-navigation-icon'},
    {name: 'TV Series', img: tv_nav_icon, alt: 'tv-navigation-icon'},
    {name: 'Upcoming', img: upcoming_nav_icon, alt: 'upcoming-navigation-icon'},
];

const SideBar = () => {

    return (
        <section className="hidden lg:block w-[230px] border border-color11 rounded-r-[45px] py-5 overflow-x-hidden overflow-y-auto">
            <section className="flex items-center justify-center gap-2.5 mt-5">
                <Image src={home_logo} width={50} height={50} alt="home_icon" />
                <p className="text-xl font-bold text-color12"> MovieBox </p>
            </section>

            <section className="mt-20">
                <ul className="space-y-2.5 font-semibold text-color6">
                    { navigations.map((navigation) => {
                        const { name, img, alt } = navigation;
                        return (
                            <Fragment key={name}>
                                <li 
                                    className={`pl-10 py-4 text-lg flex items-center gap-2 
                                    ${name.toLowerCase().trim() === 'movies' ? 'bg-color5 border-r-2 border-r-color1 text-color1' : ''}`}
                                > 
                                    <Image src={img} width={25} height={25} alt={alt} /> {name} 
                                </li>
                            </Fragment>
                        );
                    })}
                </ul>
            </section>

            <section className="rounded-[20px] border border-color7 bg-color8 w-[170px] mt-10 mx-auto px-2.5 pb-2 pt-10 flex flex-col gap-2">
                <p className="text-[15px] font-semibold text-color9"> Play movie quizes and earn free tickets </p>
                <p className="text-xs font-medium text-color6"> 50k people are playing now </p>
                <div className="bg-color10 rounded-[30px] w-[112px] mx-auto p-1">
                    <p className="text-color1 font-medium text-xs text-center"> Start Playing </p>
                </div>
            </section>


            <ul>
                <li className="font-semibold text-color6 pl-12 py-4 text-lg flex items-center gap-2 mt-4"> 
                    <Image src={logout_nav_icon} width={25} height={25} alt="logout-navigation-icon" /> Log out 
                </li>
            </ul>

        </section>
    );
}
 
export default SideBar;