import Image from "next/image";
import { Fragment } from "react";

import SideBar from "@/components/sidebar/sidebar";
import Loader from "@/components/loader/loader";
import MovieDetailsTop from "@/components/movie/movie-details-top";
import MovieDetailsMain from "@/components/movie/movie-details-main";

export async function generateStaticParams() {
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
   
    return data?.results?.map((movie) => ({
      id: movie.id.toString(),
    }))
  }

  async function getMovie(id) {
      const options = {
          method: 'GET',
          headers: {
              accept: 'application/json',
              Authorization: `Bearer ${process.env.NEXT_ACCESS_TOKEN}`
            }
        };
        const api = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_API_KEY}`;
        const res = await fetch(api, options);
        const data = await res.json();
        return data
  }

const Movie = async ({ params }) => {
    const data = await getMovie(params.id);

    return (
        <main className="flex flex-nowrap h-screen">
            <SideBar />
            <section className="flex-1 overflow-y-auto px-2 sm:px-5 lg:px-10 pt-10">
                {/* { loading && <section className="flex justify-center"> <Loader /> </section> }
                { error && <section className="flex justify-center text-color1 text-lg sm:text-xl"> Oops!!! unable to fetch movie detail </section> } */}
                { data &&
                    <Fragment>
                        <section className="w-full">
                            <Image className="rounded-[20px] w-full" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} width={200} height={200} alt={`${data.title}-image`} />
                        </section>
                        <MovieDetailsTop data={data} />
                        <MovieDetailsMain data={data} />
                    </Fragment>
                } 
            </section>
        </main>
    );
}
 
export default Movie;