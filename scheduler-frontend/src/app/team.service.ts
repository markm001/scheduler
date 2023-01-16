import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Team} from "./team";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(
    private client: HttpClient
  ) { }

  getTeamsForCurrentUser(): Observable<Team[]> {
    let url = 'api/teams'

    return this.client.get<Team[]>(url)
  }
}
