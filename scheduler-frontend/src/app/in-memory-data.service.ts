import {Injectable} from '@angular/core';
import {getStatusText, InMemoryDbService, RequestInfo, ResponseOptions, STATUS} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  private members = [
    { id: 'a1', nickname: 'Member-1' },
    { id: 'a2', nickname: 'Member-2' },
    { id: 'a3', nickname: 'Member-3' },
    { id: 'a4', nickname: 'Member-4' },
    { id: 'a5', nickname: 'Member-5' },
    { id: 'a6', nickname: 'Member-6' },
    { id: 'a7', nickname: 'Member-7' },
    { id: 'a8', nickname: 'Member-8' },
    { id: 'a9', nickname: 'Member-9' }
  ]
  private teams = [
    { id: 'a1', teamname:'Team-1', members: this.members },
    { id: 'b2', teamname:'Team-2', members: {} },
    { id: 'b3', teamname:'Team-3', members: {} },
    { id: 'b4', teamname:'Team-4', members: {} }
  ]

  constructor() { }
  createDb() {
    return {
      members : this.teams,
      teams : this.members
    }
  }

  //override the get-Method, return custom Response
  get(requestInfo: RequestInfo): Observable<any> {
    const responseBody = this.getResponseBody(requestInfo)

    return requestInfo.utils.createResponse$( () => {
      let response:ResponseOptions = {
        status: STATUS.OK,
        headers: requestInfo.headers,
        url: requestInfo.url,
        body: responseBody
      }

      if (response.status != null) {
        response.statusText = getStatusText(response.status)
      }

      return response
    })
  }

  private getResponseBody(requestInfo: RequestInfo) {
    let regexTeams = new RegExp('api\\/users\\/\\w+\\b\\/teams')
    let regexMember = new RegExp('api\\/teams\\/\\w+\\b\\/members')

    if(regexTeams.test(requestInfo.url)) {
      return this.teams
    } else if(regexMember.test(requestInfo.url)) {
      //Use builtIn utils method to filter the returned list for the passed in URL-Id
      let team = requestInfo.utils.findById(this.teams, requestInfo.id)
      return team?.members
    } else {
      return { }
    }

  }
}
