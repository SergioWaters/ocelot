import { FC, useEffect, useState } from "react";
import { LayoutHOC } from "../../hoc";
import { BreadCrumbs, CartComp } from "../../components";
import { useSelector } from "react-redux";
import { GlobalStore } from "../../types/globalStore";

export const CartPage: FC = () => {
  const arr = [
    { path: "/", title: "Главная" },
    { path: "/cart", title: "Корзина" },
  ];

  return (
    <LayoutHOC main={<CartComp />} breadcrumbs={<BreadCrumbs links={arr} />} />
  );
};
