import { FC, useRef, useState } from "react";
import styles from "./style.module.scss";

interface sortProps {
  optionsArr: Array<string>;
  cbFn: (arg0: string) => string;
}

export const SortComp: FC<sortProps> = ({ optionsArr, cbFn }) => {
  const [sortBy, setSortBy] = useState(optionsArr[0]);
  const [arr, setArr] = useState(optionsArr);
  const list = useRef(null);
  const [isShownList, setIsShownList] = useState(false);

  // const arr = ["Подешевле", "Подороже", "Алфавит А-Я", "Алфавит Я-А"];
  // const arr = ["Цена", "Название"];

  const handleOptionClick = (e: React.MouseEvent, i: string) => {
    setSortBy(i);
    setIsShownList(!isShownList);
    cbFn(i);
  };

  return (
    <div className={styles.sort}>
      <span className={styles.sort__heading}>Сортировка:</span>
      <div
        className={styles.list__wrapper}
        onClick={() => setIsShownList(!isShownList)}>
        <span className={styles.sort__selected}>
          {sortBy}
          <svg
            width="7"
            height="6"
            viewBox="0 0 7 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z"
              fill="#3F4E65"
            />
          </svg>
        </span>
        <ul
          className={`${styles.sort__list} ${isShownList ? "" : styles.hidden}`}
          ref={list}>
          {arr.map((option: string) => (
            <li
              className={styles.sort__option}
              key={option}
              onClick={(e) => handleOptionClick(e, option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
