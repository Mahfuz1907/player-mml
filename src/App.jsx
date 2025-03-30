import { Suspense } from "react";
import "./App.css";
import Navbar from "./assets/Components/Navbar";
import Players from "./assets/Components/Players";

function App() {
  const countryPromise = fetch("http://127.0.0.1:8000/api/players/").then(
    (res) => res.json()
  );

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h3>Loading Players........</h3>}>
        <Players countryPromise={countryPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
