import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  constructor() { }
  createDb() {
    const teams = [
        { id: 'a1', teamname:'Team-1' },
        { id: 'b2', teamname:'Team-2' },
        { id: 'b3', teamname:'Team-3' },
        { id: 'b4', teamname:'Team-4' }
    ]

    const members = [
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

    //return the data as object with: { }
    return {teams, members}
  }
}
