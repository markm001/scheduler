import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamComponent} from './team.component';
import {TeamService} from "../team.service";
import {of} from "rxjs";
import {Team} from "../team";
import {RouterTestingModule} from "@angular/router/testing";

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let compiled: any;

  const testData = [
    new Team('abc','Teamname A'),
    new Team('bcd','Teamname B')
  ];

  beforeEach(async () => {
    let mockTeamService = { getTeamsForCurrentUser: function() {
        return of(testData);
      }};

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ TeamComponent ],
      providers: [
        {provide: TeamService, useValue: mockTeamService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render card for each team', () => {
    let listItems = compiled.querySelectorAll('.list li');
    expect(listItems.length).toEqual(testData.length);

    let nameElement = listItems[0].querySelector('h3');
    expect(nameElement.textContent).toContain('Teamname A');

    let firstRouterLink = listItems[0].querySelector('a');
    expect(firstRouterLink.getAttribute('href'))
      .toEqual('/teams/abc/members');
    expect(firstRouterLink.textContent).toContain('Members');
  })
});
