import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../utility/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isHide:boolean=true;
  uEmail:any="";
  role:string="";
  uPass:any="";
  loginForm=this.fb.group({
  email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,]]
  });
  User:any[]=[];
  UserEmail:any=this.loginForm.get('email');
  UserPass:any=this.loginForm.get('password');
  isSession:boolean=false;
constructor(private fb:FormBuilder,private router:Router,private _login:LoginService) { }

  ngOnInit(): void {
this._login.getUserDetails().subscribe(data=>this.User=data)
}
    
  
  
  onLogin():any{
  
  for(let i=1; i<=this.User.length;i++)
  {
    
  
    this.uEmail=this.User[i].email;
    this.uPass=this.User[i].password;
    this.role=this.User[i].role;
    
    if((this.UserEmail.value==this.uEmail) && (this.UserPass.value==this.uPass) &&(this.role=="admin"||this.role=="user"))
    {
      
      
      if(this.role=="admin")
      {
        this.router.navigate(['/admindashboard']);
      }
      else{
        this.router.navigate(['/home']);
      }
    }
    else{
    
      console.log(this.uPass)
    }
  }
}
onClick()
{
this.router.navigate(['/forgot-password'])
}
toHideShow(){
  if(this.isHide==true){
    this.isHide=false;
  }
  else{
    this.isHide=true;
  }
}
}