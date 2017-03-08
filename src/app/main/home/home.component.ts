import {Component, OnInit, Input} from '@angular/core';
import { Response} from '@angular/http';
import { HomeService } from './home.service';

interface IHome {
  title: string;
  articles: article[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.styl'],
  providers: [HomeService]

})

export class HomeComponent implements OnInit, IHome {

  public title: string = 'Самое популярное в сообществе';

  public articles: article[];
  @Input() public searchString: string;

  public constructor(private homeService: HomeService) { }

  public ngOnInit(): void {
    this.homeService.getData().subscribe((data: Response) => this.articles = data.json());
  }

}
