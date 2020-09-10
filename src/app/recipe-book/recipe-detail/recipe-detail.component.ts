import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipeToShowDetails') recipe;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onClickAddIngredientsToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addNewIngredient(ingredient);
    }
  }

}
