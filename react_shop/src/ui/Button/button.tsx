import { FC } from "react";
import styles from "./style.module.scss";

interface buttonProps {
  text?: string;
  iconUrl?: string;
  className?: string;
}

export const Button: FC<buttonProps> = ({ text, iconUrl, className }) => {
  const uClass = className || "";

  return !text ? (
    <button className={styles.button + " " + styles.rounded + " " + uClass}>
      {iconUrl ? <img src={iconUrl} alt="button icon" /> : ""}
    </button>
  ) : (
    <button className={styles.button + " " + uClass}>
      <span>{text}</span>
      {iconUrl ? <img src={iconUrl} alt="button icon" /> : ""}
    </button>
  );
};
