import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  clickedOnAddButton() {
    const ingredientName = this.nameInput.nativeElement.value;
    const amount = +this.amountInput.nativeElement.value;
    console.log(ingredientName);
    if (ingredientName !== ''
      && !Number.isNaN(amount)
    ) {
      this.shoppingListService.addNewIngredient(
        new Ingredient(ingredientName, amount)
      );
    }
  }

  clickedOnDeleteButton() {

  }

  clickedOnClearButton() {

  }

}
