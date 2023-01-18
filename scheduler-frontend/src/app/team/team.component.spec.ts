import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamComponent } from './team.component';
import {TeamService} from "../team.service";
import {HttpClient} from "@angular/common/http";
import {EMPTY} from "rxjs";

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;

  beforeEach(async () => {
    let mockTeamService = {getTeamsForCurrentUser: function() {
      return EMPTY;
      }};

    await TestBed.configureTestingModule({
      declarations: [ TeamComponent ],
      providers: [
        {provide: TeamService, useValue: mockTeamService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
