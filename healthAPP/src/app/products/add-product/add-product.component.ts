import { Category, Ingredient } from './../../firebase/data.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/firebase/data.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FireService } from 'src/app/firebase/fire.service';
import { IonSlides, PopoverController } from '@ionic/angular';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  product: Product;
  productForm: FormGroup;
  categories = Category;
  allIngredients;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  currentSlide = 0;

  @ViewChild('slides', { static: true }) slides: IonSlides;
  constructor(public fb: FormBuilder, private fbService: FireService, public popoverController: PopoverController) {
    this.product = {} as Product;
  }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [, [Validators.required]],
      brand: ['', []],
      packaging: ['', []],
      category: ['', []],
      daysAfterOpening: ['', []],
      country: ['', []],
      weight: ['', []],
      totalCal: ['', []],
      // barcode: [[Validators.required]],
    });
    // this.slides.lockSwipes(true);
    this.fbService.getAllIngredient().subscribe(data => {
      this.allIngredients = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      })
      console.log(this.allIngredients);
    });
  }

  createProduct() {
    console.log(this.productForm.value);
    // this.fbService.createProduct(this.productForm.value).then(resp => {
    //   this.productForm.reset();
    // })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }


  async goTo(isBack: boolean, index: number) {
    console.log(isBack, index);
    switch (index) {
      case 0:
        if (this.productForm.valid) {
          this.slides.lockSwipes(false);
          this.slides.slideTo(1).then(() => {
            this.currentSlide = 1;
          });
        }
        break;
      case 1:
        if (isBack) {
          this.slides.slideTo(0).then(() => {
            this.currentSlide = 0;
          });
        } else {
          this.slides.slideTo(2).then(() => {
            this.currentSlide = 2;
          });
        }
        break;

      case 2:
        if (isBack) {
          this.slides.slideTo(1).then(() => {
            this.currentSlide = 1;
          });
        } else {
          console.log('finished');
        }
        break;
      default:
        break;
    }
  }


}
