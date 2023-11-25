"use client";

import { ArrowRight2 } from "iconsax-react";
import Loader from "../loader/loader";
import { Fragment } from "react";
import MovieItem from "../movie-item/movie-item";
import useFetchTopRatedMovies from "../api/services/top-rated-movies-service";

const Featured = () => {
    const { data, loading, error } = useFetchTopRatedMovies();
    const maxNum = 10;

    return (
        <section>
            <section className="flex items-center justify-between">
                <h3 className="font-semibold text-black text-xl xs:text-3xl  sm:text-4xl"> Featured Movie </h3>
                <p className="text-sm xs:text-base sm:text-lg font-normal text-color1 flex items-center gap-1"> See more <ArrowRight2 color="#BE123C" size={18} /> </p>
            </section>
            { loading && <section className="flex justify-center mt-10"> <Loader /> </section> }
            { error && <section className="flex justify-center text-color1 text-lg sm:text-xl"> Oops!!! unable to fetch movie grid </section> }

            { !loading &&
                <section className="mt-10 flex flex-wrap gap-8 justify-center 840:justify-start">
                    { data?.results?.slice(0, maxNum).map((result) => (
                        <Fragment key={result.id}>
                            <MovieItem data={result} />
                        </Fragment>
                    ))}
                </section>
            }
        </section>
    );
}
 
export default Featured;