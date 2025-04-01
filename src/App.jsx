import { Suspense } from "react";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import Players from "./assets/Components/Players";

function App() {
  const playersPromise = fetch(
    "https://player-mml-api.onrender.com/api/players/"
  ).then((res) => res.json());

  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={
          <div className="flex justify-center items-center p-20">
            <span className="loading loading-spinner text-primary loading-xl text-green-400"></span>
          </div>
        }
      >
        <Players playersPromise={playersPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
