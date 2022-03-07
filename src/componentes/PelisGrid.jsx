import { useEffect, useState } from "react";
import { PeliCard } from './PeliCard'
import { get } from "../utils/httpClient";
import styles from './PeliculasGrid.module.css'

export function PelisGrid(){

    const [pelis, setMovies] = useState([]);

    useEffect(() => {
      get("/discover/movie").then((dato) => {
        setMovies(dato.results);
      });
    }, []);
    return (
        <ul className={styles.pelisGrid}>
            {pelis.map((peli) => (
                <PeliCard key={peli.id} peli={peli} />
            ))}
        </ul>
    )
}