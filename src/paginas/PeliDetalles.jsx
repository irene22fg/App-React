import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import styles from "./PeliDetalles.module.css";

export function PeliDetalles() {
  const {peliId } = useParams();
  const [peli, setMovie] = useState(null);

  useEffect(() => {
    get("/movie/" + peliId).then((dato) => {
      setMovie(dato);
    });
  }, [peliId]);

  if (!peli) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + peli.poster_path;
  return (
    <div className={styles.detallesContainer}>
      <img
        className={`${styles.col} ${styles.peliImage}`}
        src={imageUrl}
        alt={peli.title}
      />
      <div className={`${styles.col} ${styles.peliDetalles}`}>
        <p className={styles.primerItem}>
          <strong>Titulo:</strong> {peli.title}
        </p>
        <p>
          <strong>Generos:</strong>{" "}
          {peli.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Descripcion:</strong> {peli.overview}
        </p>
      </div>
    </div>
  );
}