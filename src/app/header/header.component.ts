import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../recipe-book/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private router: Router, private recipeService: RecipeService) {

  }

  @Output() activateShoppingListTemplate = new EventEmitter<boolean>();

  clickOnShoppingList() {
    this.router.navigate(['/shoppinglist']);
  }

  clickOnRecipeList() {
    this.router.navigate(['/recipes']);
  }

  clickedSaveData() {
    this.recipeService.saveRecipesToServer();
  }

  clickedFetchData(){
    this.recipeService.getRecipesFromServer();
  }
}
