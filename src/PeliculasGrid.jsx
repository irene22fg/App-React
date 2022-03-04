import { PeliCard } from './PeliCard'
import pelis from './peliculas.json'
import styles from './PeliculasGrid.module.css'

export function PelisGrid(){
    return (
        <ul className={styles.pelisGrid}>
            {pelis.map((peli) => (
                <PeliCard key={peli.id} peli={peli} />
            ))}
        </ul>
    )
}