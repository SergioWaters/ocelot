import { FC } from "react";
import { LayoutHOC } from "../../hoc";
import { BreadCrumbs, CatalogueComp } from "../../components";

export const AdminPage: FC = () => {
  const arr = [
    { path: "/cart", title: "CartPage" },
    { path: "/product/*", title: "ProductPage" },
    { path: "/catalogue", title: "catalogue" },
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
