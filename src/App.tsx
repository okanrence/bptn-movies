import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { AppContextProvider } from "./contexts/AppContextProvider";

const Home = lazy(() => import("./views/Home"));
const Liked = lazy(() => import("./views/Liked"));

const App = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Router>
        <div className="px-10 pt-10">
          <h1 className="font-bold text-3xl">MOVIES</h1>

          <ul className="inline-flex gap-3 mt-5">
            <li>
              <NavLink
                className="text-sm py-2 px-4"
                exact
                activeClassName="bg-red-100 text-red-400 rounded-full"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-sm py-2 px-4"
                activeClassName="bg-red-100 text-red-400 py-2 px-4 rounded-full"
                to="/liked"
              >
                Liked
              </NavLink>
            </li>
          </ul>
        </div>
        <AppContextProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/liked">
              <Liked />
            </Route>
          </Switch>
        </AppContextProvider>
      </Router>
    </Suspense>
  );
};

export default App;
