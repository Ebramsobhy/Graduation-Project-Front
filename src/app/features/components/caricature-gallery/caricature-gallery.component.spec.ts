import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricatureGalleryComponent } from './caricature-gallery.component';

describe('CaricatureGalleryComponent', () => {
  let component: CaricatureGalleryComponent;
  let fixture: ComponentFixture<CaricatureGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaricatureGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaricatureGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
