import { AddNutritionFactComponent } from './add-nutrition-fact/add-nutrition-fact.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { DetailsComponent } from './details/details.component';
import { Component, OnInit } from '@angular/core';
import { FireService } from '../firebase/fire.service';
import { ModalController, PopoverController } from '@ionic/angular';
import { AddProductComponent } from './add-product/add-product.component';
import { AddPopoverComponent } from './add-popover/add-popover.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  productList = [];
  constructor(private fbService: FireService, private modalCtrl: ModalController, private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.fbService.getAllProducts().subscribe(data => {
      this.productList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      })
      console.log(this.productList);
    });
  }

  async addProduct(id?: string) {
    const modal = await this.modalCtrl.create({
      component: AddProductComponent,
      componentProps: { id, isEdit: id ? true : false }
    });
    await modal.present();
  }

  async openProductdetails(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: { id }
    });
    await modal.present();
  }

  async addIngredient(id?: string) {
    const modal = await this.modalCtrl.create({
      component: AddIngredientComponent,
      componentProps: { id, isEdit: id ? true : false }
    });
    await modal.present();
  }

  async addNutritionFact(id?: string) {
    const modal = await this.modalCtrl.create({
      component: AddNutritionFactComponent,
      componentProps: { id, isEdit: id ? true : false }
    });
    await modal.present();
  }

  async addPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: AddPopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    popover.onWillDismiss().then(async data => {
      switch (data.data) {
        case 0:
          this.addProduct();
          break;
        case 1:
          this.addNutritionFact();
          break;
        case 2:
          this.addIngredient();
          break;
        default:
          break;
      }
    });
    return await popover.present();
  }
}
