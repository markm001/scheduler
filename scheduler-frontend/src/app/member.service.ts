import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Member} from "./member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private client:HttpClient
  ) { }

  getMembers(teamId: String): Observable<Member[]> {
    console.log('Fetching Team-Members for Id:' + teamId)
    let url = 'api/members'
    return this.client.get<Member[]>(url)
  }
}
