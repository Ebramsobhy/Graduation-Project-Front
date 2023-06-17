import { TestBed } from '@angular/core/testing';

import { CaricatureGalleryService } from './caricature-gallery.service';

describe('CaricatureGalleryService', () => {
  let service: CaricatureGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaricatureGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
