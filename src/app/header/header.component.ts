import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private router: Router) {

  }

  @Output() activateShoppingListTemplate = new EventEmitter<boolean>();

  clickOnShoppingList() {
    this.router.navigate(['/shoppinglist']);
  }

  clickOnRecipeList() {
    this.router.navigate(['/recipes']);
  }
}
