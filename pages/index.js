import React from "react";
import Movie from "../components/movie";
import styles from "../styles/index.module.css";
import NavB from "../components/navB";
import fetch from "node-fetch";

export async function getStaticProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=574f5934b3cc3bfa874c0a5ce4d88d74&language=en-US&page=1"
  );
  const data = await res.json();
  const fdata = await data.results;
  return {
    props: { fmovies: fdata },
  };
}
export default function Home({ fmovies }) {
  let divs = fmovies
    ? fmovies.map((movie) => {
        return (
          <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            bd={movie.backdrop_path}
          />
        );
      })
    : [];
  return (
    <>
      <NavB />
      <div className={styles.mgrid}>{divs}</div>
    </>
  );
}
