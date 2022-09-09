import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RoadsComponent } from './roads/roads.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { EventsComponent } from './events/events.component';
import { ArticlesComponent } from './articles/articles.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { RallysComponent } from './rallys/rallys.component';
import { ExpeditionsComponent } from './expeditions/expeditions.component';
import { SigninComponent } from './signin/signin.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { RacingComponent } from './racing/racing.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
  { path: 'articles', component: ArticlesComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'roads', component: RoadsComponent,  canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'rallys', component: RallysComponent },
  { path: 'expeditions', component: ExpeditionsComponent },
  { path: 'racing', component: RacingComponent },
  { path: 'holidays', component: HolidaysComponent },
  { path: 'userpanel', component: UserpanelComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminPanelComponent, canActivate: [AdminGuard]},
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
