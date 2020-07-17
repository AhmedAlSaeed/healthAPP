import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FireService } from 'src/app/firebase/fire.service';

@Component({
  selector: 'app-add-nutrition-fact',
  templateUrl: './add-nutrition-fact.component.html',
  styleUrls: ['./add-nutrition-fact.component.scss'],
})
export class AddNutritionFactComponent implements OnInit {
  nutritionFactForm: FormGroup;
  constructor(private modalController: ModalController, private fb: FireService, private Fbuilder: FormBuilder) { }

  ngOnInit() {
    this.nutritionFactForm = this.Fbuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      calPerGram: ['', Validators.required],
    })
  }

  async createNutritionFact() {
    await this.fb.createNutritionFact(this.nutritionFactForm.value);
    this.close();
  }

  close() {
    this.modalController.dismiss();
  }

}
