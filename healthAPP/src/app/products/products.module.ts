import { AddNutritionFactComponent } from './add-nutrition-fact/add-nutrition-fact.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';
import { EnumToArrayPipe } from '../firebase/enum-to-array.pipe';
import { AddPopoverComponent } from './add-popover/add-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProductsPageRoutingModule,
  ],
  declarations: [ProductsPage, AddProductComponent, DetailsComponent, AddIngredientComponent, AddNutritionFactComponent, EnumToArrayPipe, AddPopoverComponent],
  entryComponents: [AddProductComponent, DetailsComponent, AddIngredientComponent, AddNutritionFactComponent, AddPopoverComponent]
})
export class ProductsPageModule { }
