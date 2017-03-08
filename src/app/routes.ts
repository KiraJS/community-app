import { MainComponent } from './main/main.component';
import { ArticlesComponent } from './articles/articles.component';
import { QestionsComponent } from './qestions/qestions.component';
import { ProfileComponent } from './profile/profile.component';


import { Route } from '@angular/router';

export const routes: Route [] = [
  {
    path: '',
    component: MainComponent
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
]
