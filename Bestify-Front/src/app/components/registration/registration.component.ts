import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password.validator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  isTrue:boolean=false;

  clicked(){
    this.isTrue=true;
  }
  // registraionform=new FormGroup({
  //   first_name: new FormControl('shashank'),
  //   last_name:new FormControl(''),
  //   email:new FormControl(''),
  //   password:new FormControl(''),
  //   confirm_password:new FormControl(''),
  //   role:new FormControl('user')
  // });

  get first_name() {
    return this.registraionform.get('first_name');
  }
  get last_name() {
    return this.registraionform.get('last_name');
  }
  get password() {
    return this.registraionform.get('password');
  }
  get confirm_password() {
    return this.registraionform.get('confirm_password');
  }
  get email() {
    return this.registraionform.get('email');
  }

  constructor(private fb: FormBuilder) { }

  registraionform =this.fb.group({
    first_name:['', [Validators.required, Validators.minLength(3)]],
    last_name:['',[Validators.required, Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8)]],
    confirm_password:['',Validators.required],
    role:['']
  }, {validator: PasswordValidator});

  ngOnInit(): void {
  }

}
