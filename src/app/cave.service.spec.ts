import { TestBed, inject } from '@angular/core/testing';

import { CaveService } from './cave.service';

describe('CaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaveService]
    });
  });

  it('should ...', inject([CaveService], (service: CaveService) => {
    expect(service).toBeTruthy();
  }));
});
