import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
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
import { UserpanelComponent } from './userpanel/userpanel.component';
import { CarviewComponent } from './carview/carview.component';
import { AccountService } from './services/account.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AdminGuard } from './guards/admin.guard';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';

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
    UserpanelComponent,
    CarviewComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
      { path: 'articles', component: ArticlesComponent },
      { path: 'tutorials', component: TutorialsComponent },
      { path: 'roads', component: RoadsComponent, canActivate: [AuthGuard]},
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'article/:id', component: ArticleComponent },
      { path: 'rallys', component: RallysComponent },
      { path: 'expeditions', component: ExpeditionsComponent },
      { path: 'racing', component: RacingComponent },
      { path: 'holidays', component: HolidaysComponent },
      { path: 'userpanel', component: UserpanelComponent, canActivate: [AuthGuard]},
      { path: '**', component: HomeComponent, pathMatch: 'full'},
      { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
    ])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
