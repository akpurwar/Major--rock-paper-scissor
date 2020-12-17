import { Component, OnInit } from '@angular/core';
import { UserCategorywiseService } from 'src/app/utility/services/user-categorywise.service';

@Component({
  selector: 'app-user-general-knowledge',
  templateUrl: './user-general-knowledge.component.html',
  styleUrls: ['./user-general-knowledge.component.scss']
})
export class UserGeneralKnowledgeComponent implements OnInit {

  obj: any
  constructor(private cat: UserCategorywiseService) { }

  ngOnInit(): void {
    this.cat.getGK().subscribe((n) => {
      console.log(n);
      this.obj=n;
    });
  }

}
