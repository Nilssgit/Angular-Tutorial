import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {of} from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  inputForm: FormGroup;
  editMode = false;
  recipe: Recipe;
  recipeIndex: number;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeIndex = +params['id'];
      this.editMode = (this.recipeIndex !== this.recipeService.getIndexOfNew());
      this.recipe = this.recipeService.getRecipe(this.recipeIndex);
      this.initForm();
    });
  }

  initForm(): void {
    let recipeName = 'Probably a new muesli recipe';
    let recipeImagePath = 'https://picsum.photos/200/300';
    let recipeDescription = 'Oats. Very likely many oats';
    let recipeIngredients = new FormArray([]);
    if (this.editMode) {
      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.imagePath;
      recipeDescription = this.recipe.description;
      for (const ingredient of this.recipe.ingredients) {
        recipeIngredients.push(new FormGroup({
          'ingredientName': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
        }));
      }
    }
    this.inputForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  clickedSaveButton(): void {
    const ingredients = [];
    console.log('Ingredients:' + this.inputForm.value.ingredients)
    for (const ingredient of this.inputForm.value.ingredients) {
      ingredients.push(new Ingredient(ingredient.ingredientName, ingredient.amount));
    }
    const newRecipe = new Recipe(this.inputForm.value.name,
      this.inputForm.value.description,
      this.inputForm.value.imagePath,
      ingredients);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeIndex, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
      this.editMode = true;
    }
  }

  clickedCancelButton(): void {
    if (this.editMode) {
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.router.navigate(['/recipes']);
    }
  }

  clickedAddIngredient(): void {
    (<FormArray> this.inputForm.get('ingredients')).push(new FormGroup({
      'ingredientName': new FormControl('More Oats', Validators.required),
      'amount': new FormControl('1', Validators.required)
    }));
  }

  clickedDeleteItem(index: number): void {
    (<FormArray> this.inputForm.get('ingredients')).removeAt(index);
  }

  get controls() {
    return (<FormArray> this.inputForm.get('ingredients')).controls;
  }
}
