import { FC } from "react";
import { LayoutHOC } from "../../hoc";
import { BreadCrumbs, CatalogueComp } from "../../components";

export const CataloguePage: FC = () => {
  const arr = [
    { path: "/", title: "Главная" },
    { path: "/catalogue", title: "Каталог" },
  ];
  return (
    <div>
      <LayoutHOC
        main={<CatalogueComp />}
        breadcrumbs={<BreadCrumbs links={arr} />}
      />
    </div>
  );
};
