import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Oats', 3),
    new Ingredient('Nuts', 4)
  ];

  addNewIngredient(newIngredient: Ingredient) {
    if (!this.isIngredientOnList(newIngredient)) {
      this.ingredients.push(newIngredient);
    }
    this.ingredientsChanged.emit(this.ingredients);
  }

  isIngredientOnList(newIngredient: Ingredient) {
    for (const ingredient of this.ingredients) {
      if (ingredient.name === newIngredient.name) {
        ingredient.amount = ingredient.amount + newIngredient.amount;
        return true;
      }
    }
    return false;
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
}
