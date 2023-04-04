import { FooterComp, HeaderComp } from "./components";
import { BrowserRouter } from "react-router-dom";
import { RoutesComp } from "./routes";
import styles from "./styles/App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <HeaderComp />
        <RoutesComp />
        <FooterComp />
      </BrowserRouter>
    </div>
  );
}

export default App;
