import { Component, OnInit } from '@angular/core';
import { UserCategorywiseService } from 'src/app/utility/services/user-categorywise.service';

@Component({
  selector: 'app-user-logical-thinking',
  templateUrl: './user-logical-thinking.component.html',
  styleUrls: ['./user-logical-thinking.component.scss']
})
export class UserLogicalThinkingComponent implements OnInit {
  obj: any
  constructor(private cat: UserCategorywiseService) { }

  ngOnInit(): void {
    this.cat.getLT().subscribe((n) => {
      console.log(n);
      this.obj=n;
    });
  }

}
