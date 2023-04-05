import React, { FC, useState } from "react";
import styles from "./style.module.scss";
import { CartItemComp } from "./CartItemComp";
import { Button } from "../../ui";

export const CartComp: FC = () => {
  const [total, setTotal] = useState(null);
  const productsArr = [
    {
      info: "средство для мытья посуды Crystal",
      measureUnits: "ml",
      unitsCount: 450,
      art: "4604049097548",
      manufacturer: "Нэфис",
      brand: "AOS",
      images: ["./src/assets/aoc.png"],
      price: 48.76,
      pack: 0,
      categories: ["средство для мытья посуды"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus recusandae minima quis, pariatur laboriosam sunt, odio ipsum, labore error amet magni deleniti temporibus quaerat?",
    },
    {
      info: "средство для мытья посуды Crystal",
      measureUnits: "ml",
      unitsCount: 450,
      art: "4604049097547",
      manufacturer: "Нэфис",
      brand: "AOS",
      images: ["./src/assets/aoc.png"],
      price: 48.76,
      pack: 0,
      categories: ["средство для мытья посуды"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus recusandae minima quis, pariatur laboriosam sunt, odio ipsum, labore error amet magni deleniti temporibus quaerat?",
    },
  ];

  return (
    <section className={styles.cart + " container"}>
      <h1>Корзина</h1>
      <div className={styles.cart__inner}>
        {productsArr.map((c) => (
          <CartItemComp sku={c} key={c.art} />
        ))}
      </div>
      <div className={styles.checkout}>
        <Button text="Оформить заказ" />
        <span className={styles.total}>{total + " ₸"}</span>
      </div>
    </section>
  );
};
