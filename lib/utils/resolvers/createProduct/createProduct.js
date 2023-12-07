// @flow

import type { Product } from "../../../../pages/api/products";
import { get, add } from "../../../../pages/api/products";

const createProductResolver = (_, { product }: { product: Product }) => {
  const products = get();
  // It could be uuid but It's debatable
  const newId = String(Number(products[products.length - 1].id) + 1);

  add({ ...product, id: newId });
  return { message: "Created" };
};

export default createProductResolver;
