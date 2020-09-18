import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import {RecipeListComponent} from './recipe-book/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './recipe-book/recipe-detail/recipe-detail.component';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import {RecipeService} from './recipe-book/recipe.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    DropdownDirective,
    HomeComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
