import { Component } from '@angular/core';

interface IFooter {
  logoSrc: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})

export class FooterComponent implements IFooter {

  public logoSrc: string = '/assets/img/logo.png';

}
