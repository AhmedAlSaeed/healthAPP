import { Product } from './../../firebase/data.interface';
import { FireService } from './../../firebase/fire.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input('id') id: string;
  product: Product;
  constructor(private modalController: ModalController, private fireService: FireService) { }

  ngOnInit() {
    console.log(this.id);
    this.fireService.getProduct(this.id).then(data => {
      console.log(data);
    })
  }

  close() {
    this.modalController.dismiss();
  }
}
