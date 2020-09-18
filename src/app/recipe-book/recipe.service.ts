import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpRequestsService} from '../shared/http-requests.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private httpService: HttpRequestsService) {
  }

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

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  getIndexOfNew(): number {
    return this.recipes.length;
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  saveRecipesToServer(){
    this.httpService.updateRecipesOnServer(this.recipes);
  }

  getRecipesFromServer(){
    this.httpService.getRecipesFromServer().subscribe(recipes => {
      this.recipes = recipes;
      this.recipesChanged.next(recipes);
    });
  }
}
