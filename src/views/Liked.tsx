import { AppContext } from "../contexts/AppContext";
import MovieList from "../components/MovieList";

const Liked = () => {
  return (
    <AppContext.Consumer>
      {({ likedMovies, toggleLike }) => {
        return <MovieList onClick={toggleLike} movies={likedMovies} />;
      }}
    </AppContext.Consumer>
  );
};

export default Liked;
