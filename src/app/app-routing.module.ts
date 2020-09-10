import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './home/home.component';
import {RecipeDetailComponent} from './recipe-book/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shoppinglist', component: ShoppingListComponent},
  {path: 'recipes', component: RecipeBookComponent, children: [
      {path: ':id', component: RecipeDetailComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
