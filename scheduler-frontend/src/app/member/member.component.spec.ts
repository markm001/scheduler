import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberComponent} from './member.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MemberService} from "../member.service";
import {EMPTY} from "rxjs";

describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;

  beforeEach(async () => {
    let mockMemberService = {
      getMembers: function() {
        return EMPTY;
      }};

    await TestBed.configureTestingModule({
      declarations: [MemberComponent],
      imports: [RouterTestingModule],
      providers: [
        {provide: MemberService,
          useValue: mockMemberService}
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
