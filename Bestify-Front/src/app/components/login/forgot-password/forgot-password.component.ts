import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../utility/services/login.service';
import { differentPassValidator } from '../../../shared/passwordMatchingValidator';
 
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
  constructor(private fb:FormBuilder,private router:Router,private http:LoginService) { }
  
  forgotpasswordform=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    otp:['',Validators.required],
    setpass:['',[Validators.minLength(8),Validators.required,]],
    confirmpass:['',[Validators.required]],
    },{validator:differentPassValidator});

OTP:any;

  ngOnInit(): void {
    
      
   
  }
  

  UserDetails:any;
  User:any[]=[];
  UserEmail:any=this.forgotpasswordform.get('email');
  UserOtp:any=this.forgotpasswordform.get('otp');
  UserSetPass:any=this.forgotpasswordform.get('setpass');
  UserConfirmPass:any=this.forgotpasswordform.get('confirmpass');
  istrue:boolean=false;
  
  
  otpgenerated:number=1.123456789;
 

goBack(){
this.router.navigate(['/login'])
}
onsend():any{
  this.otpgenerated=Math.floor(Math.random()*(1000));
  this.OTP={
    "otp":this.otpgenerated,
    "email":this.UserEmail.value
  }
 this.http.sendUserDetails(this.OTP);
}
  ishideshow()
    {
      if(this.istrue==false)
      {
        this.istrue=true;
      }
      else
      {
        this.istrue=false;
      }
    }
onSubmit(){
  if(this.otpgenerated==this.UserOtp.value)
  {
    alert('sucess');
    this.UserDetails={
      "email":this.UserEmail.value,
      "password":this.UserConfirmPass.value,
      
    }
  this.http.sendUserDetails(this.UserDetails);
  }
  else
  {
  alert("please send otp");
  }

}



}
