import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventsComponent } from './events/events.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { RoadsComponent } from './roads/roads.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ArticleComponent } from './article/article.component';
import { ExpeditionsComponent } from './expeditions/expeditions.component';
import { RallysComponent } from './rallys/rallys.component';
import { RacingComponent } from './racing/racing.component';
import { HolidaysComponent } from './holidays/holidays.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsComponent,
    HomeComponent,
    ArticlesComponent,
    TutorialsComponent,
    RoadsComponent,
    LoginComponent,
    SigninComponent,
    ArticleComponent,
    ExpeditionsComponent,
    RallysComponent,
    RacingComponent,
    HolidaysComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'events', component: EventsComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'tutorials', component: TutorialsComponent },
      { path: 'roads', component: RoadsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'article/:id', component: ArticleComponent },
      { path: 'rallys', component: RallysComponent },
      { path: 'expeditions', component: ExpeditionsComponent },
      { path: 'racing', component: RacingComponent },
      { path: 'holidays', component: HolidaysComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
