import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MainService {

  public constructor(private http: Http) {

  }
  public getData(){
    return this.http.get('assets/data/articles.json');
  }

}
