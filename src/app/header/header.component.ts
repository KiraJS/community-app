import { Component, OnInit } from '@angular/core';

interface IHeader {
  logoSrc: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})

export class HeaderComponent implements IHeader {
  public logoSrc: string = '/assets/img/logo.png';
}
