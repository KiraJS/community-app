import { Component } from '@angular/core';

interface IRoot {
  searchString: string;
  onChanged(value: string): void;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})

export class AppComponent implements IRoot {
  public searchString: string;
  public onChanged(value: string): void {
    this.searchString = value;
  }
}
