import React, { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import { MovieType } from "../types";
import { AppContext } from "./AppContext";

export const AppContextProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<Array<MovieType>>([]);
  const [likedMovies, setLikedMovies] = useState<Array<MovieType>>([]);

  useEffect(() => {
    const getImages = async () => {
      const res = await fetchMovies();
      setMovies(res.results);
    };

    getImages();
  }, []);

  const toggleLike = (id: number) => {
    const newArr = movies.map((item) => {
      if (item.id === id) {
        item.liked = !item.liked;
      }

      return item;
    });

    setMovies([...newArr]);
    setLikedMovies([...newArr.filter((item) => item.liked)]);
  };

  return (
    <AppContext.Provider value={{ movies, toggleLike, likedMovies }}>
      <div className="p-10">
        <div className="grid-cols-2 gap-2 grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
          {children}
        </div>
      </div>
    </AppContext.Provider>
  );
};
