import { Fragment } from "react";
import { ArrowRight2 } from "iconsax-react";
import MovieItem from "../movie-item/movie-item";
import Loader from "../loader/loader";

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

const Featured = async () => {
    const data = await getTopRatedMovies();

    return (
        <section>
            <section className="flex items-center justify-between">
                <h3 className="font-semibold text-black text-xl xs:text-3xl  sm:text-4xl"> Featured Movie </h3>
                <p className="text-sm xs:text-base sm:text-lg font-normal text-color1 flex items-center gap-1"> See more <ArrowRight2 color="#BE123C" size={18} /> </p>
            </section>
            {/* { loading && <section className="flex justify-center mt-10"> <Loader /> </section> }
            { error && <section className="flex justify-center text-color1 text-lg sm:text-xl"> Oops!!! unable to fetch movie grid </section> } */}

            {/* { !loading && */}
            { data.length > 0 &&
                <section className="mt-10 flex flex-wrap gap-8 justify-center 840:justify-start">
                    { data.map((result) => (
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