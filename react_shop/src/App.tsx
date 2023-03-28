import { FooterComp, HeaderComp, CatalogueComp } from "./components";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <HeaderComp />
      <div className={styles.main}>
        <div style={{ height: "100px" }}>breadcrumbs</div>
        <CatalogueComp />
      </div>
      <FooterComp />
    </div>
  );
}

export default App;
