import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredientClicked = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Oats', 3),
    new Ingredient('Nuts', 4)
  ];

  addNewIngredient(newIngredient: Ingredient): void {
    if (!this.isIngredientOnList(newIngredient)) {
      this.ingredients.push(newIngredient);
    }
    this.ingredientsChanged.next(this.ingredients);
  }

  isIngredientOnList(newIngredient: Ingredient): boolean {
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

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  loadIngredient(index: number): void {
    this.ingredientClicked.next(index);
  }

  updateIngredient(index: number, ingredient: Ingredient): void {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteItem(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

