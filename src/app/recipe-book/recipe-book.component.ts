import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: []
})
export class RecipeBookComponent implements OnInit {
  // pickedRecipe = new Recipe('No Recipe selected', 'Please select Recipe', '', []);

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {

  }

}
