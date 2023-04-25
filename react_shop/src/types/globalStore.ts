import { CartState, CatalogueStore } from "./";

export interface IGlobalStore {
  cart: CartState;
  catalogue: CatalogueStore;
}
