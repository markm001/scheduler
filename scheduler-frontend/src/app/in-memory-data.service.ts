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
        { id: 'b3', teamname:'Team-3' }
    ]
    //return the data as object with: { }
    return {teams}
  }
}
