import { TestBed, inject } from '@angular/core/testing';

import { ToggleSelectedService } from './toggle-selected.service';

describe('ToggleSelectedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleSelectedService]
    });
  });

  it('should be created', inject([ToggleSelectedService], (service: ToggleSelectedService) => {
    expect(service).toBeTruthy();
  }));
});
