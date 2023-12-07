// @flow

import type { Product } from "../../../../pages/api/products";
import { get, add } from "../../../../pages/api/products";

const createProductResolver = (_, { product }: { product: Product }) => {
  // It could be uuid but It's debatable
  const newId = get().length;

  add({ ...product, id: newId });
  return { message: "Created" };
};

export default createProductResolver;
