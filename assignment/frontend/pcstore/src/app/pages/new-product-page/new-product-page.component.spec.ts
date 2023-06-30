import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductPageComponent } from './new-product-page.component';

describe('NewProductPageComponent', () => {
  let component: NewProductPageComponent;
  let fixture: ComponentFixture<NewProductPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProductPageComponent]
    });
    fixture = TestBed.createComponent(NewProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
