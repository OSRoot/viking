import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllFoodPage } from './all-food.page';

describe('AllFoodPage', () => {
  let component: AllFoodPage;
  let fixture: ComponentFixture<AllFoodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
