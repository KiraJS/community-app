import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MainService {

  constructor(private http: Http) {

  }
  getData(){
    return this.http.get('data/articles.json')
  }

}
