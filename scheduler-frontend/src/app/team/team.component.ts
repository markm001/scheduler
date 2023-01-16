import {Component, OnInit} from '@angular/core';
import {Team} from "../team";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  constructor(
    private teamService: TeamService
  ) { }

  teams: Team[] | undefined;

  ngOnInit() {
    this.getTeams()
  }

  private getTeams() {
    this.teamService.getTeamsForCurrentUser().subscribe(
      teams => this.teams = teams
    )
  }
}
