export interface Sku {
  info: string;
  measureUnits: string;
  unitsCount: number;
  art: string;
  manufacturer: string;
  brand: string;
  images: Array<string>;
  price: number;
  pack: number;
  categories: Array<string>;
  description?: string;
  thumbnail?: string;
  stock?: number;
}

export interface CartSku extends Sku {
  quantity: number;
}
