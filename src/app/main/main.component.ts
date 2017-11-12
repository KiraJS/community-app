import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl'],

})

export class MainComponent  {
  public searchString: string;
  public onChanged(value: string): void {
    console.log('main.ts', this.searchString);
    this.searchString = value;
  }
}
