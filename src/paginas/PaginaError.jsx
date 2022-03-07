import styles from "../App.module.css";

export function PaginaError() {
  return (
    <div>
      <header>
        <h1 className={styles.titulo}>Error</h1>
      </header>
      <main>
        <div>
          <p>Hubo un error al intentar esta acción</p>
        </div>
      </main>
    </div>
  );
}
