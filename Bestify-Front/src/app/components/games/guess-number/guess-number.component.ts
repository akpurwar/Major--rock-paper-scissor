import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/utility/services/game.service';
import { Games } from '../games';

@Component({
  selector: 'app-guess-number',
  templateUrl: './guess-number.component.html',
  styleUrls: ['./guess-number.component.scss']
})
export class GuessNumberComponent implements OnInit {
  game: Games;
  secret =  Math.trunc(Math.random() * 20) + 1;
  score = 20;
  highScore = 0;
  userNumber;
  bColor = '#222;';

checkNumber = () => {
   const guess = this.userNumber;
// if guess is not entered
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter The Number';
}
// if guess is equal random number
else if (guess === this.secret) {
  document.querySelector('.message').textContent = 'Correct Number';
  // let back = document.querySelector('.body')
  this.bColor = this.getColor();
  this.highScore = this.score;
// tslint:disable-next-line:align
this.game.score = this.highScore;
// tslint:disable-next-line:align
// console.log(this.game);



}
// if guess is higher than random number
else if (guess > this.secret) {
  document.querySelector('.message').textContent = 'Too High';
  this.score = this.score - 1;
  if (this.score <= 0) {
    document.querySelector('.message').textContent = 'You LOST';
  }
}
// guess is smaller than random number
else if (guess < this.secret) {
  document.querySelector('.message').textContent = 'Too Low';
  this.score = this.score - 1;
  if (this.score <= 0) {
    document.querySelector('.message').textContent = 'You LOST';
  }
}
}
getColor = () => {
  return  'green';
}
// for restart the game
restartGame = () => {
  this.highScore = 0;
  this.score = 20;
  this.bColor = '#222';
  this.userNumber = '';
  document.querySelector('.message').textContent = 'Start Guessing';
}
  constructor(private router:Router, private gameService: GameService) {
    this.game = {
      game_id: 101,
      game_name: 'Guess Number',
      score: 0,
      user_id: 101

    };
   }

  ngOnInit(): void {
    this.gameService.getGames().subscribe((g) => {
      console.log(g);
    });
  }
  goToHome(){
    this.router.navigate(['home']);
  }
}
