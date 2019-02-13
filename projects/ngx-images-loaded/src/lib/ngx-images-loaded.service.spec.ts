import { TestBed } from '@angular/core/testing';

import { NgxImagesLoadedService } from './ngx-images-loaded.service';

describe('NgxImagesLoadedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxImagesLoadedService = TestBed.get(NgxImagesLoadedService);
    expect(service).toBeTruthy();
  });
});
