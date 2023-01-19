import {TestBed} from '@angular/core/testing';

import {TeamService} from './team.service';
import {HttpClient} from "@angular/common/http";
import {Team} from "./team";
import {of} from "rxjs";

describe('TeamService', () => {
  let service: TeamService;

  const testData = [
    new Team('abc', 'T1'),
    new Team('bcd', 'T2')]

  let mockClient = {
    get: function () {
      return of(testData)
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: mockClient}
      ]
    });
    service = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getTeamsForCurrentUser', () => {
    it('should return Observable<Team[]>', (done) => {
      //when
      const result = service.getTeamsForCurrentUser();
      //then
      result.subscribe(teams => {
          expect(teams.length).toEqual(testData.length);
          done();
        });
    });

    it('should call GET api/teams', (done) => {
      spyOn(mockClient, "get").and.callThrough();
      //when
      service.getTeamsForCurrentUser().subscribe( ()=> {
        //then
        // @ts-ignore
        expect(mockClient.get).toHaveBeenCalledWith('api/teams');
        done();
      });
    });
  });
});
