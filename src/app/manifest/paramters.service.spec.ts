import { TestBed } from '@angular/core/testing';

import { ParametersService } from './parameters.service';

describe('ParamtersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParametersService = TestBed.get(ParametersService);
    expect(service).toBeTruthy();
  });
});
