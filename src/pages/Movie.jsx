import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Doctor Strange</h1>
        <p>115 minutes</p>
        <div>
          <span>Action</span>
          <span>Adventure</span>
          <span>Fantasy</span>
        </div>
      </main>
    </>
  );
};

export default Movie;
