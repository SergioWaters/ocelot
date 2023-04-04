import { Routes, Route } from "react-router-dom";
import { CartPage, CataloguePage, ProductPage, HomePage } from "../pages";
import { ErrorComp } from "../components/ErrorComp/error";

export const RoutesComp = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/admin" element={<CataloguePage />} />
      <Route path="/" element={<HomePage />} />
      <Route
        path="*"
        element={<ErrorComp msg={"This Page does not exist"} />}
      />
    </Routes>
  );
};
