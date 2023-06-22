import { Ingredient } from './ingredient';
import { Pate } from './pate';

export class Pizza {
  constructor(
    public name?: string,
    public pate?: Pate,
    public ingredients?: Ingredient[],
    public id?: number
  ) {}
}
