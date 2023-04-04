import React, { FC, ReactNode } from "react";
import styles from "./style.module.scss";

interface P {
  main: ReactNode;
  breadcrumbs: ReactNode;
}
export const LayoutHOC: FC<P> = ({ main, breadcrumbs }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.breadcrumbs}>{breadcrumbs}</div>
      <div className={styles.main}>{main}</div>
    </div>
  );
};
