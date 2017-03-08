import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl'],

})

export class MainComponent  {
  @Input() public searchString: string;
  @Input() public onChanged: void;
  // public onChanged(value: string): void {
  //   this.searchString = value;
  // }
}
