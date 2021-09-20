import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BeersService {

  constructor(public service: HttpClient) { }

  getBeersData(): Observable<any> {
    let myURL = 'https://api.punkapi.com/v2/beers';
    return this.service.get(myURL);
  }
}
