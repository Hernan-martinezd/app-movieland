/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlatformService } from './platform.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Platform', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlatformService]
    });
  });

  it('should ...', inject([PlatformService], (service: PlatformService) => {
    expect(service).toBeTruthy();
  }));
});