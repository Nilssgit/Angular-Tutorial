import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = new Recipe('Empty', 'None', '', [new Ingredient('', 0)]);

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }

  onClickAddIngredientsToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addNewIngredient(ingredient);
    }
  }

}
