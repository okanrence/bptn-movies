import { MoviePoster } from "../components/MoviePoster";
import { MovieType } from "../types";

type Props = {
  movies: Array<MovieType>;
  onClick: (arg: number) => void;
};

const MovieList = ({ movies, onClick }: Props) => {
  return (
    <>
      {movies.map((item) => (
        <MoviePoster
          key={item.id}
          image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          liked={item.liked}
          onClick={() => onClick(item.id)}
        />
      ))}
    </>
  );
};

export default MovieList;
