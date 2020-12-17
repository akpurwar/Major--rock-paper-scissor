import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-games',
  templateUrl: './user-games.component.html',
  styleUrls: ['./user-games.component.scss']
})
export class UserGamesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoGame1() {
    this.router.navigate(['game1']);
  }
  gotoGame2() {
    this.router.navigate(['game2']);
  }
}
