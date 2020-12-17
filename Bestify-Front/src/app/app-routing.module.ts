import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GuessNumberComponent } from './components/games/guess-number/guess-number.component';
import { RockPaperScissorComponent } from './components/games/rock-paper-scissor/rock-paper-scissor.component';
import { ForgotPasswordComponent } from './components/login/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './user/home/home.component';
import { UserBrainTeaserComponent } from './user/section/user-brain-teaser/user-brain-teaser.component';
import { UserGamesComponent } from './user/section/user-games/user-games.component';
import { UserGeneralKnowledgeComponent } from './user/section/user-general-knowledge/user-general-knowledge.component';
import { UserLogicalThinkingComponent } from './user/section/user-logical-thinking/user-logical-thinking.component';
import{AddQuestionComponent} from "./admin/add-question/add-question.component";
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component:LoginComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  { path: 'userGame', component: UserGamesComponent },
  { path: 'userBT', component: UserBrainTeaserComponent },
  { path: 'userLT', component: UserLogicalThinkingComponent },
  { path: 'userGK', component: UserGeneralKnowledgeComponent },
  { path:"admindashboard",component:AdminComponent},
  {path:"addQuestion",component:AddQuestionComponent},
  { path: 'game1', component: GuessNumberComponent },
  { path: 'game2', component: RockPaperScissorComponent },
  { path: 'registration', component:RegistrationComponent},
  { path: '**', component: NotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
