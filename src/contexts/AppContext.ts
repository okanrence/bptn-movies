import { createContext } from "react";
import { MovieType } from "../types";

export interface ContextInterface {
  movies: Array<MovieType>;
  likedMovies: Array<MovieType>;
  toggleLike: (arg: number) => void;
}

export const AppContext = createContext<ContextInterface>(
  {} as ContextInterface
);
