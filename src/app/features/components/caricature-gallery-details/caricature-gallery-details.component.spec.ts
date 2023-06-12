import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricatureGalleryDetailsComponent } from './caricature-gallery-details.component';

describe('CaricatureGalleryDetailsComponent', () => {
  let component: CaricatureGalleryDetailsComponent;
  let fixture: ComponentFixture<CaricatureGalleryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaricatureGalleryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaricatureGalleryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
