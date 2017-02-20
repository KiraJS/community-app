import {Component, OnInit, Input} from '@angular/core';
import { Response} from '@angular/http';
import { MainService} from './main.service';

interface IMain {
  title: string;
  articles: article[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl'],
  providers: [MainService]

})

export class MainComponent implements OnInit, IMain {

  public title: string = 'Самое популярное в сообществе';

  public articles: article[];
  @Input() public searchString: string;

  public constructor(private mainService: MainService) { }

  public ngOnInit(): void {
    this.mainService.getData().subscribe((data: Response) => this.articles = data.json());
  }

}
