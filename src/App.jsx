import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import Players from "./assets/Components/Players";
import Teams from "./assets/Components/Teams";
import Categories from "./assets/Components/Categories";
import FrontPage from "./assets/Components/FrontPage";
import TeamPage from "./assets/Components/TeamPage";

function App() {
  const base_url = "http://127.0.0.1:8000/api";
  const image_url = "http://127.0.0.1:8000";
  const playersPromise = fetch(`${base_url}/players/`).then((res) =>
    res.json()
  );

  const headPromise = fetch(`${base_url}/heads/1`).then((res) => res.json());

  const teamPromise = fetch(`${base_url}/teams/`).then((res) => res.json());

  const categoryPromise = fetch(`${base_url}/categories/`).then((res) =>
    res.json()
  );

  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center p-20">
            <span className="loading loading-spinner text-primary loading-xl text-green-400"></span>
          </div>
        }
      >
        <Navbar headPromise={headPromise} image_url={image_url}></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <FrontPage
                headPromise={headPromise}
                image_url={image_url}
                teamPromise={teamPromise}
              />
            }
          ></Route>
          <Route
            path="/players"
            element={
              <Players playersPromise={playersPromise} image_url={image_url} />
            }
          ></Route>
          <Route
            path="/teams"
            element={
              <Teams
                teamPromise={teamPromise}
                image_url={image_url}
                base_url={base_url}
              />
            }
          ></Route>
          <Route
            path="/categories"
            element={
              <Categories
                base_url={base_url}
                categoryPromise={categoryPromise}
                image_url={image_url}
              />
            }
          ></Route>
          <Route
            path="/teams/:id"
            element={<TeamPage base_url={base_url} image_url={image_url} />}
          ></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
