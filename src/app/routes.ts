import { ArticlesComponent } from './main/articles/articles.component';
import { QestionsComponent } from './main/qestions/qestions.component';
import { HomeComponent } from './main/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

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
    path: 'profile-editor',
    component: ProfileEditorComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
