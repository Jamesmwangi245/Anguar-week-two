import { TestBed } from '@angular/core/testing';

import { SGithubService } from './s-github.service';

describe('SGithubService', () => {
  let service: SGithubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SGithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
