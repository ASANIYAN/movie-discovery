import Image from "next/image";
import { Fragment } from "react";
import fb from "@/public/assets/fb.svg";
import insta from "@/public/assets/insta.svg";
import twitter from "@/public/assets/twitter.svg";
import youtube from "@/public/assets/youtube.svg";

const Footer = () => {
    const images = [
        { src: fb, alt:"facebook-icon"},
        { src: insta, alt:"instagram-icon"},
        { src: twitter, alt:"twitter-icon"},
        { src: youtube, alt:"youtube-icon"},
    ]


    return (
        <footer className="flex flex-col justify-center items-center gap-6 mt-20 mb-5">
            <section className="flex items-center gap-8">
                { images.map((image) => (
                    <Fragment key={image.alt}>
                        <Image src={image.src} width={24} height={24} alt={image.alt} />
                    </Fragment>
                ))
                }
            </section>

            <section className="flex flex-col xs:flex-row items-center gap-5 text-color3 text-lg font-semibold ">
                <p> Conditions of Use </p>
                <p> Privacy & Policy </p>
                <p> Press Room </p>
            </section>

            <p className="text-color4 font-semibold text-lg text-center"> &copy; 2021 MovieBox by Adriana Eka Prayudha </p>

        </footer>
    );
}
 
export default Footer;