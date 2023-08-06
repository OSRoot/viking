import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalTestPage } from './modal-test.page';

describe('ModalTestPage', () => {
  let component: ModalTestPage;
  let fixture: ComponentFixture<ModalTestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
