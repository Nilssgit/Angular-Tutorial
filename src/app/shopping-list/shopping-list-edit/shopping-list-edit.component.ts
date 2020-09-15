import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') inputForm: NgForm;
  editingIngredientSubscription: Subscription;
  editMode = false;
  indexOfEditedIngredient: number;
  addButtonText = 'Add';

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.editingIngredientSubscription = this.shoppingListService.ingredientClicked
      .subscribe((index: number) => {
        const ingredient = this.shoppingListService.getIngredient(index);
        this.inputForm.setValue({name: ingredient.name, amount: ingredient.amount});
        this.editMode = true;
        this.addButtonText = 'Save';
        this.indexOfEditedIngredient = index;
      });
  }

  ngOnDestroy(): void {
    this.editingIngredientSubscription.unsubscribe();
  }

  clickedOnAddButton(): void {
    const ingredientName = this.inputForm.value.name;
    const amount = +this.inputForm.value.amount;
    const ingredient = new Ingredient(ingredientName, amount);
    if (!this.editMode) {
      console.log(ingredientName);
      this.shoppingListService.addNewIngredient(ingredient);
    } else {
      this.shoppingListService.updateIngredient(this.indexOfEditedIngredient, ingredient);
      this.leaveEditMode();
    }
  }

  clickedOnDeleteButton(): void {
    if (this.editMode) {
      this.shoppingListService.deleteItem(this.indexOfEditedIngredient);
      this.leaveEditMode();
    }
  }

  private leaveEditMode(): void {
    this.editMode = false;
    this.inputForm.reset();
    this.addButtonText = 'Add';
  }

  clickedOnClearButton(): void {
    this.leaveEditMode();
  }

}
