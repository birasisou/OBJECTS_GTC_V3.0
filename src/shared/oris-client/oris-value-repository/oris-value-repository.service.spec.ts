import { TestBed } from '@angular/core/testing';

import { OrisValueRepositoryService } from './oris-value-repository.service';

describe('OrisValueRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrisValueRepositoryService = TestBed.get(OrisValueRepositoryService);
    expect(service).toBeTruthy();
  });
});
