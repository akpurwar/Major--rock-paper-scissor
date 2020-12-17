import { Component, OnInit } from '@angular/core';
import { UserCategorywiseService } from 'src/app/utility/services/user-categorywise.service';

@Component({
  selector: 'app-user-brain-teaser',
  templateUrl: './user-brain-teaser.component.html',
  styleUrls: ['./user-brain-teaser.component.scss']
})
export class UserBrainTeaserComponent implements OnInit {
  obj: any
  constructor(private cat: UserCategorywiseService) { }

  ngOnInit(): void {
    this.cat.getBT().subscribe((n) => {
      console.log(n);
      this.obj=n;
    });
  }

}
