import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  goToGamesSection(): void {
    console.log('hello');
    this.route.navigate(['/userGame']);
  }
  goToBTQSection(): void {
    console.log('hello');
    this.route.navigate(['/userBT']);
  }
  goToLTQSection(): void {
    console.log('hello');
    this.route.navigate(['/userLT']);
  }
  goToGKQSection(): void {
    console.log('hello');
    this.route.navigate(['/userGK']);
  }
}
