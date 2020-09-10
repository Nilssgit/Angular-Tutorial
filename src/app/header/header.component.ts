import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  @Output() activateShoppingListTemplate = new EventEmitter<boolean>();
  clickOnShoppingList(){
    this.activateShoppingListTemplate.emit(true);
  }
  clickOnRecipeList(){
    this.activateShoppingListTemplate.emit(false);
  }
}
