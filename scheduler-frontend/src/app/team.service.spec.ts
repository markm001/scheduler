import { TestBed } from '@angular/core/testing';

import { TeamService } from './team.service';
import {HttpClient} from "@angular/common/http";

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide:HttpClient, useValue:{}}
      ]
    });
    service = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
