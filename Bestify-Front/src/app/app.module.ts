import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { TopRankersComponent } from './user/top-rankers/top-rankers.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './user/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsComponent } from './user/top-rankers/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { UserGamesComponent } from './user/section/user-games/user-games.component';
import { UserBrainTeaserComponent } from './user/section/user-brain-teaser/user-brain-teaser.component';
import { UserLogicalThinkingComponent } from './user/section/user-logical-thinking/user-logical-thinking.component';
import { UserGeneralKnowledgeComponent } from './user/section/user-general-knowledge/user-general-knowledge.component';
import { AddQuestionComponent } from '../app/admin/add-question/add-question.component';
import{AdminQuestionService}from "src/app/utility/services/admin-question.service";
// import {ReactiveFormsModule } from '@angular/forms';
import { GuessNumberComponent } from './components/games/guess-number/guess-number.component';
import { RockPaperScissorComponent } from './components/games/rock-paper-scissor/rock-paper-scissor.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GeneralKnowledgeComponent } from './components/general-knowledge/general-knowledge.component';

import { LoginComponent } from '../app/components/login/login.component';
import {LoginService} from '../app/utility/services/login.service';
import { ForgotPasswordComponent } from '../app/components/login/forgot-password/forgot-password.component';



@NgModule({
  
  declarations: [
    AppComponent,
    UserComponent,
    TopRankersComponent,
    HomeComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    NewsComponent,
    UserGamesComponent,
    UserBrainTeaserComponent,
    UserLogicalThinkingComponent,
    UserGeneralKnowledgeComponent,
    AddQuestionComponent,
    GuessNumberComponent,
    RockPaperScissorComponent,

    GeneralKnowledgeComponent,

    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  
    MatFormFieldModule,
  
    ReactiveFormsModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
