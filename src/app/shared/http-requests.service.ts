import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipe-book/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  recipeUrl = 'https://tutorial-project-1d6be.firebaseio.com/recipes/recipes.json';

  constructor(private http: HttpClient) {
  }

  writeRecipesOnServer(recipes: Recipe[]) {
    this.http.post<Recipe[]>(this.recipeUrl, recipes)
      .subscribe(data => {
        console.log(data);
      });
  }

  updateRecipesOnServer(recipes: Recipe[]) {
    this.http.put<Recipe[]>(this.recipeUrl, recipes)
      .subscribe(data => {
        console.log(data);
      });
  }

  getRecipesFromServer() {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }
}
