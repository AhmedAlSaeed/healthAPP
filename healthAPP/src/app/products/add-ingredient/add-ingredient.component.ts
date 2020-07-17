import { FireService } from 'src/app/firebase/fire.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit {
  ingredientForm: FormGroup;
  constructor(private modalController: ModalController, private fb: FireService, private Fbuilder: FormBuilder) { }

  ngOnInit() {
    this.ingredientForm = this.Fbuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  async createIngredient() {
    await this.fb.createIngredient(this.ingredientForm.value);
    this.close();
  }

  close() {
    this.modalController.dismiss();
  }
}
