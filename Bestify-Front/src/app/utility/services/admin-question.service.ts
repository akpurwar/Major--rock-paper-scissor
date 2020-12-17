import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
const baseurl="http://localhost:4000/quiz/";

@Injectable({
  providedIn: 'root'
})
export class AdminQuestionService {

  constructor(private http:HttpClient) { }

create(data:any){
  console.log(data);
  return this.http.post(baseurl,data);
}

findAllSets(category:any):Observable<any>{
  alert(category)
  return this.http.get<any>(baseurl+"sets",{ params:{
    category:category
    }});
}
findAllQues(set:any):Observable<any>{
  alert(set);
  return this.http.get<any>(baseurl+"ques",{ params:{
    sets:set
    }});
}

}