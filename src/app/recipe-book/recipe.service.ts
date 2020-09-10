import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A testy meal',
      'This is very testy',
      'https://cdn.pixabay.com/photo/2018/01/31/21/12/muesli-3121962_1280.jpg',
      [new Ingredient('Banana', 2), new Ingredient('Apple', 3)]
    ),
    new Recipe(
      'A testy meal',
      'This is very testy',
      'https://cdn.pixabay.com/photo/2018/01/31/21/12/muesli-3121962_1280.jpg',
      [new Ingredient('Milk', 100), new Ingredient('Oatmeal', 200)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
