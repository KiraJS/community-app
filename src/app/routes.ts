import { MainComponent } from './main/main.component';
import { ArticlesComponent } from './articles/articles.component';
import { QestionsComponent } from './main/qestions/qestions.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './main/home/home.component';



import { Route } from '@angular/router';

export const routes: Route [] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'questions',
    component: QestionsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
