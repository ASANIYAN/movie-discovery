import Image from "next/image";
import home_logo from "@/public/assets/tv.svg";
import SearchBar from "../search-bar/search-bar";

const NavBar = () => {
    return (
        <nav className="flex flex-wrap gap-2.5 items-center justify-center sm:justify-between pt-4">
            <section className="flex items-center gap-2">
                <Image src={home_logo} width={50} height={50} alt="home_icon" />
                <p className="text-xl font-bold text-white"> MovieBox </p>
            </section>
            <SearchBar />
            <section className="flex items-center gap-2.5">
                <p className="text-white font-semibold text-base"> Sign in </p>
                <div className="rounded-full h-9 w-9 bg-color1 flex gap-1 flex-col items-center justify-center">
                    <div className="h-0.5 w-[55%] bg-white rounded-sm"></div>
                    <div className="h-0.5 w-[55%] bg-white rounded-sm"></div>
                </div>
            </section>
        </nav>
    );
}
 
export default NavBar;