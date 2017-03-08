import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HomeService {

  public constructor(private http: Http) {

  }
  public getData(): any {
    return this.http.get('assets/data/articles.json');
  }

}
