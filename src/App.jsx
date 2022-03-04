import { PelisGrid } from "./PeliculasGrid";
import styles from './App.module.css'

export function App(){
    return (
    <div>
        <header>
            <h1 className={styles.titulo}>Movies</h1>
        </header>
        <main>
            <PelisGrid/>
        </main>
    </div>
    )
}