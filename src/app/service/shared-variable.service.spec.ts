import { TestBed } from '@angular/core/testing';

import { SharedVariableService } from './shared-variable.service';

//Ce service permet de partager le string de l'input de la searchbar à tous mes components
describe('SharedVariableService', () => {
  let service: SharedVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedVariableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
