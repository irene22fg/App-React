import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PeliDetalles } from "./paginas/PeliDetalles";
import { PaginaLanzamiento } from "./paginas/PaginaLanzamiento";
import { PaginaError } from "./paginas/PaginaError";

export function App(){
    return (
        <Router>
          <header>
            <Link to="/">
              <h1 className={styles.titulo}>Pelis</h1>
            </Link>
          </header>
          <main>
            <Switch>
              <Route exact path="/pelis/:peliId">
                <PeliDetalles />
              </Route>
              <Route path="/">
                <PaginaLanzamiento />
              </Route>
              <Route exact path="/error">
                <PaginaError />
              </Route>
            </Switch>
          </main>
        </Router>
      );
}