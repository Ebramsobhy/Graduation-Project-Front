import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricatureManagementComponent } from './caricature-management.component';

describe('CaricatureManagementComponent', () => {
  let component: CaricatureManagementComponent;
  let fixture: ComponentFixture<CaricatureManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaricatureManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaricatureManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
