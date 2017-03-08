import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './main/search/search.component';
import { SearchPipe } from './common/pipes/search.pipe';
import { ArticlesComponent } from './articles/articles.component';
import { QestionsComponent } from './main/qestions/qestions.component';

import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './main/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MainComponent,
    SearchComponent,
    SearchPipe,
    SearchPipe,
    ArticlesComponent,
    QestionsComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
