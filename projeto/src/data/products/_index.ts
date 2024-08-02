import { create } from "./create.request";
import { getMany } from "./getMany.request";
import { getOne } from "./getOne.request";
import { update } from "./update.request";
import { remove } from "./remove.request";

export const productsRequest = { create, getMany, getOne, update, remove };