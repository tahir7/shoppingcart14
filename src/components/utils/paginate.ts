import _ from "lodash";
import { productSchema } from './../../models/dataStructure';

export function paginate(allProducts: productSchema[], pageNumber : number, pageSize :number) {
  const startingIndex = (pageNumber - 1) * pageSize;
  return _(allProducts).slice(startingIndex).take(pageSize).value();
}
