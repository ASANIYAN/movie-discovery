import star from "@/public/assets/star.svg";
import Image from "next/image";

const MovieDetailsTop = ({ data }) => {
    const { title, release_date, runtime, genres }  = data;

    const releaseDateInUTC = new Date(release_date).toUTCString();

    return (
        <section className="flex flex-wrap gap-2.5 items-center justify-between mt-10">
            <section className="flex flex-wrap items-center gap-2.5">
                <section className="flex flex-wrap items-center gap-2.5 font-medium text-base sm:text-lg lg:text-xl text-color13">
                    { title && <span data-testid="movie-title" > {title} </span>} 
                    <span> • </span> 
                    <span> {release_date} </span>  
                    <span> • </span>  
                    { releaseDateInUTC && <span data-testid="movie-release-date"> {releaseDateInUTC} </span> }  
                    <span> • </span> 
                    { runtime && <span data-testid="movie-runtime"> {runtime} </span>}
                    <span> m </span>
                </section>
                <section className="flex items-center gap-2.5">
                    { genres && genres.map((genre) => (
                        <div key={genre.id} 
                            className="border border-color15 rounded-[15px] py-0.5 px-2.5"
                        >  
                                <p className="text-color14 font-medium text-sm"> {genre.name} </p> 
                        </div>
                    ))}
                </section>
            </section>
            <section className="flex items-center gap-2">
                <Image src={star} alt="star" width={30} height={30} />
                <span className="text-color16 text-lg sm:text-xl lg:text-2xl font-medium"> 8.5 </span>
                <span className="font-medium text-base sm:text-lg lg:text-xl text-color6"> | 350k </span>
            </section>
        </section>
    );
}
 
export default MovieDetailsTop;