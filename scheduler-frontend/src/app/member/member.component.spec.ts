import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MemberComponent} from './member.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MemberService} from "../member.service";
import {of} from "rxjs";
import {Member} from "../member";

describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;
  let compiled: any;

  const testData = [
    new Member('abc', 'Member 1'),
    new Member('bcd', 'Member 2')
  ];

  beforeEach(async () => {
    let mockMemberService = {
      getMembers: function() {
        return of(testData);
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
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have header 'Team members`, () => {
    expect(compiled.querySelector('h2').textContent).toContain('Team members');
  });

  it('should render one list-item per member', () => {
    let listItems = compiled.querySelectorAll('.members li');
    expect(listItems.length).toEqual(testData.length);

    let firstMember = listItems[1].querySelector('span');
    expect(firstMember.textContent).toContain('Member 2')
  });
});
