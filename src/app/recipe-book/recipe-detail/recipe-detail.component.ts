import {Component, Input, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe = new Recipe('Empty', 'None', '', [new Ingredient('', 0)]);
  indexOfRecipe: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params) => {
        this.indexOfRecipe = +params.id;
        console.log(this.indexOfRecipe);
        this.recipe = this.recipeService.getRecipe(this.indexOfRecipe);
      });
  }

  onClickAddIngredientsToShoppingList() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addNewIngredient(ingredient);
    }
  }

  clickedDeleteRecipe(): void{
    this.recipeService.deleteRecipe(this.indexOfRecipe);
    this.router.navigate(['/recipes']);
  }
}
