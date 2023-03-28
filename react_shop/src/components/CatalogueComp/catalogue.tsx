import styles from "./style.module.scss";
import { Button, Input } from "../../ui";

export const CatalogueComp = () => {
  const categoriesArr: Array<string> = [
    "Уход за телом",
    "Уход за руками",
    "Уход за ногами",
    "Уход за лицом",
    "Уход за волосами",
    "Средства для загара",
    "Средства для бритья",
    "Подарочные наборы",
    "Гигиеническая продукция",
    "Гигиена полости рта",
    "Бумажная продукция",
  ];

  return (
    <div className={styles.catalogue + " container"}>
      <h1>Косметика и гигиена</h1>
      <ul className={styles.categories}>
        {categoriesArr.map((c) => (
          <li className={styles.categories__item} key={c}>
            <p>{c.slice(0, c.indexOf(" "))}</p>
            <p>{c.slice(c.indexOf(" "), c.length)}</p>
          </li>
        ))}
      </ul>
      <div className={styles.catalogue__inner}>
        <div className={styles.catalogue__aside}>
          <div className={styles.filter}>
            <h4>ПОДБОР ПО ПАРАМЕТРАМ</h4>
            <div className={styles.price}>
              <h5>Цена </h5>
              <div className={styles.price__inner}>
                <input type="text" placeholder="0" />
                -
                <input type="text" placeholder="10000" />
              </div>
            </div>
            <div className={styles.filter__block + " manufacturer"}>
              <h5>Производитель</h5>
              <Input
                placeholder="Поиск..."
                iconUrl="./src/assets/icons/search.svg"
              />
              <div className={styles.checkboxes}>
                <label className={styles.label}>
                  <input type="checkbox" className={styles.checkbox} />
                  Manufacturer
                </label>
                <label className={styles.label}>
                  <input type="checkbox" className={styles.checkbox} />
                  Manufacturer
                </label>
                <label className={styles.label}>
                  <input type="checkbox" className={styles.checkbox} />
                  Manufacturer
                </label>
                <label className={styles.label}>
                  <input type="checkbox" className={styles.checkbox} />
                  Manufacturer
                </label>
                <label className={styles.label}>
                  <input type="checkbox" className={styles.checkbox} />
                  Manufacturer
                </label>
              </div>
            </div>
            <div className={styles.filter__btns}>
              <Button text="Показать" />
              <Button iconUrl="./src/assets/icons/bin.svg" />
            </div>
          </div>
          <ul className={styles.categories}>
            {categoriesArr.map((c) => (
              <li className={styles.categories__item} key={c}>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.catalogue__list}></div>
      </div>
    </div>
  );
};
