import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'h', component: HomeComponent},
  {path: 'shoppinglist', component: ShoppingListComponent},
  {path: 'recipes', component: RecipeBookComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
