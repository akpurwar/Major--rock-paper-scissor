import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
email:any;
password:any;


constructor(private http:HttpClient) { }
   
  getUserDetails():Observable<any[]>
  {
      return this.http.get<any[]>('http://localhost:4000/login-form');
   }

   sendUserDetails(User:any)
   {
     alert('ala');
     console.log(User);
     this.email=User.email;
     this.password=User.password;
   
     this.http.put('http://localhost:4000/login-form',User).subscribe((data)=>{
       console.warn(data);
     });
   }
  
  }
