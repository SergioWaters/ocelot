import React, { FC } from "react";
import { LayoutHOC } from "../../hoc";
import { BreadCrumbs, ProductComp } from "../../components";
import { useParams } from "react-router-dom";

export const ProductPage: FC = () => {
  const testProd = {
    info: "средство для мытья посуды Crystal",
    measureUnits: "ml",
    unitsCount: 450,
    art: "4604049097548",
    manufacturer: "Нэфис",
    brand: "AOS",
    images: ["/src/assets/aoc.png"],
    price: 48.76,
    pack: 0,
    categories: ["средство для мытья посуды"],
  };
  const { productId } = useParams();
  const arr = [
    { path: "/", title: "Главная" },
    { path: "/catalogue", title: "Каталог" },
    { path: "/product/" + testProd.art, title: testProd.art },
  ];

  return (
    <div>
      <LayoutHOC
        main={<ProductComp product={testProd} />}
        breadcrumbs={<BreadCrumbs links={arr} />}
      />
    </div>
  );
};
