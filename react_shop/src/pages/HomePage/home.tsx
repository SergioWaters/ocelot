import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumbs, CatalogueComp } from "../../components";
import { LayoutHOC } from "../../hoc";

export const HomePage = () => {
  const arr = [{ path: "/", title: "Главная" }];
  const list = (
    <div className="container">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>cart</Link>
        </li>
        <li>
          <Link to={"/product/*"}>product</Link>
        </li>
        <li>
          <Link to={"/catalogue"}>catalogue</Link>
        </li>
        <li>
          <Link to={"*"}>404</Link>
        </li>
      </ul>
    </div>
  );
  return (
    <div>
      <LayoutHOC main={list} breadcrumbs={<BreadCrumbs links={arr} />} />
    </div>
  );
};
