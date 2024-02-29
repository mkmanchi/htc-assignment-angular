import { TestBed } from '@angular/core/testing';

import { TestendService } from './testend.service';

describe('TestendService', () => {
  let service: TestendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
