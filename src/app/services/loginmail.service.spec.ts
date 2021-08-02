import { TestBed } from '@angular/core/testing';

import { LoginmailService } from './loginmail.service';

describe('LoginmailService', () => {
  let service: LoginmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
