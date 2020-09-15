import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = new Recipe('Empty', 'None', '', [new Ingredient('', 0)]);

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        const recipeIndex = params.id;
        console.log(+recipeIndex);
        this.recipe = this.recipeService.getRecipe(+recipeIndex);
      });
  }

  onClickAddIngredientsToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addNewIngredient(ingredient);
    }
  }
}
