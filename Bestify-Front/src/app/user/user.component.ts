import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  goToHome(): void {
    this.route.navigate(['/home']);
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
