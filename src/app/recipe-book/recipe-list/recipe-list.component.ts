import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() clickedOnRecipeInList = new EventEmitter<Recipe>();
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recipeService.recipesChanged
      .subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
      });
    this.recipes = this.recipeService.getRecipes();
  }

  clickedOnRecipe(recipeIndex: number): void {
    console.log(this.recipes[recipeIndex]);
    this.router.navigate([recipeIndex], {relativeTo: this.route});
  }

  clickedOnNewRecipe(): void {
    const newIndex = this.recipeService.getIndexOfNew();
    this.router.navigate([newIndex, 'edit'], {relativeTo: this.route});
  }

}
