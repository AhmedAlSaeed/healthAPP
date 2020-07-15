import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNutritionFactComponent } from './add-nutrition-fact.component';

describe('AddNutritionFactComponent', () => {
  let component: AddNutritionFactComponent;
  let fixture: ComponentFixture<AddNutritionFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNutritionFactComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNutritionFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
