"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart } from "iconsax-react";

import imdb from "@/public/assets/imdb.svg";
import rotten_tomatoes from "@/public/assets/rotten_tomatoes.svg";
import { useRouter } from "next/navigation";


async function getTopRatedMovies() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_ACCESS_TOKEN}`
        }
      };
    const api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_API_KEY}&language=en-US&page=1`;
    const res = await fetch(api, options);
    const data= await res.json();
    return data?.results?.slice(0, 10);
}


const MovieItem = ({ data }) => {
    const router = useRouter();
    const [like, setLike] = useState(false);
    const { title, poster_path, vote_average, release_date, original_language, id } = data

    const handleNavigate = (id) => {
        router.push(`movie/${id}`);
    }
    
    const handleLike = () => {
        setLike(like => !like);
    };

    const displayLikeIcon = () => {
        if (like) {
            return  <Heart color="#be123c" variant="Bold" onClick={handleLike} className="absolute top-3 right-3 z-20 cursor-pointernpm " />;
        } else {
            return <Heart color="#be123c" onClick={handleLike} className="absolute top-3 right-3 z-20 cursor-pointer" />;
        }
    };


    return (
        <section className="relative">
            <section data-testid="movie-card" className="w-[250px] cursor-pointer" onClick={() => handleNavigate(id)}>
                <Image width={300} data-testid="movie-poster" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="poster_one" height={370} />

                <section className="mt-3 space-y-2.5">
                    <p data-testid="movie-release-date" className="font-semibold text-xs text-color2 text-center 840:text-start"> {release_date} </p>
                    
                    <h4 data-testid="movie-title" className="text-color3 text-lg font-semibold text-center 840:text-start"> {title} </h4>

                    <section className="flex items-center justify-center 840:justify-between gap-2.5 mt-4">
                        <section className="flex items-center gap-1.5"> 
                            <Image src={imdb} alt="imdb-icon" /> 
                            <p className="font-normal text-xs"> {vote_average} / 10 </p>
                        </section>
                        <section className="flex items-center gap-1.5">
                            <Image src={rotten_tomatoes} alt="rotten_tomatoes-icon" />
                            <p className="font-normal text-xs"> 97% </p>
                        </section>
                    </section>

                    <p className="font-semibold text-xs text-color2 text-center 840:text-start"> {original_language} </p>
                </section>

            </section>
            { displayLikeIcon() } 

        </section>
    );
}
 
export default MovieItem;