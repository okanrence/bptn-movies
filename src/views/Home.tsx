import { AppContext } from "../contexts/AppContext";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <AppContext.Consumer>
      {({ movies, toggleLike }) => (
        <MovieList onClick={toggleLike} movies={movies} />
      )}
    </AppContext.Consumer>
  );
};

export default Home;
