import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
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
    //retrieve userId from localStorage
    const userId = localStorage.getItem('userId')

    let url = 'api/users/' + userId + '/teams'

    console.log(url)

    return this.client.get<Team[]>(url)
  }
}
