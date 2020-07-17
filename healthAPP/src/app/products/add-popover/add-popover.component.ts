import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-add-popover',
  templateUrl: './add-popover.component.html',
  styleUrls: ['./add-popover.component.scss'],
})
export class AddPopoverComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() { }

  dismissPopover(type?: number) {
    this.popoverController.dismiss(type);
  }

}
