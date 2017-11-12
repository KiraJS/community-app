import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface ISearch {
  placeholder: string;
  searchString: string;
  onChanged: EventEmitter<string>;
  filterArticles(value: string): void;
}

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.styl']
})
export class SearchComponent implements ISearch {

  public placeholder: string  = 'Поиск по темам сообщества';
  @Input() public searchString: string;
  @Output() public onChanged: EventEmitter<string> = new EventEmitter<string>();
  public filterArticles(value: string): void {
    console.log('search.ts');
    this.onChanged.emit(value);
  }
}

