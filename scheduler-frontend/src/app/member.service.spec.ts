import {TestBed} from '@angular/core/testing';

import {MemberService} from './member.service';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {Member} from "./member";

describe('MemberService', () => {
  let service: MemberService;

  const testData = [
    new Member('abc', 'Name 1'),
    new Member('bcd', 'Name 2')
  ];
  const mockClient = { get: function () {
      return of(testData)
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: mockClient}
      ]
    });
    service = TestBed.inject(MemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getMembers', ()=> {
    it('should return Observable<Member[]>', (done)=>{
      service.getMembers(testData[0].id).subscribe( member => {
        expect(member.length).toEqual(testData.length);
          done();
        });
    });

    it('should call GET api/members', (done)=> {
      spyOn(mockClient,"get").and.callThrough();

      service.getMembers(testData[0].id).subscribe(()=>{
        // @ts-ignore
        expect(mockClient.get).toHaveBeenCalledWith('api/members');
        done();
      });
    });
  });
});
