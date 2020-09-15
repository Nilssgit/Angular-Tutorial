import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Muesli',
      'This is very tasty muesli',
      'https://cdn.pixabay.com/photo/2018/01/31/21/12/muesli-3121962_1280.jpg',
      [new Ingredient('Banana', 2), new Ingredient('Apple', 3)]
    ),
    new Recipe(
      'Another muesli',
      'I wouldn\'t try this one but maybe you are brave',
      'https://cdn.pixabay.com/photo/2018/01/31/21/12/muesli-3121962_1280.jpg',
      [new Ingredient('Milk', 100), new Ingredient('Oatmeal', 200)]
    )
  ];

  getRecipes(): Recipe[]{
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
