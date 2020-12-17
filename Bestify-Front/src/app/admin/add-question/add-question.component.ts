import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { from, observable } from 'rxjs';
import{Question} from "../add-question/question";
import { AdminQuestionService } from 'src/app/utility/services/admin-question.service';

@Component({
  selector: 'add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  submitted: boolean = false;
  everythingfine:boolean=false;
  matched:any;
  quizData=this.fb.group({
  category:['',Validators.required],
  setno:["",Validators.required],
  question:["",Validators.required],
  questionno:["",Validators.required],
  option1:["",Validators.required],
  option2:["",Validators.required],
  option3:["",Validators.required],
  option4:["",Validators.required],
  answer:["",Validators.required],
  
 
  
  // termsConditions:["",Validators.required],
  })
  // Question:Question;
    constructor(private fb:FormBuilder,private _questionservice:AdminQuestionService) { 
      // this.Question={
      //   category:"",
      //   set:"",
      //   question:"",
      //   option1:"",
      //   option2:"",
      //   option3:"",
      //   option4:"",
      //   answer:""
      // }
    }
    ngOnInit(): void {
      //create new set is hidden initially
      var newsetRef:any=document.getElementById(this.setNewInpid);
      newsetRef.style.visibility="hidden";
    }
  
   
    //shared varables
  setNewInpid:string="addNewSet";
  select:string="set_no";
  get registerFormControl() {
    return this.quizData.controls;
  }

  //find all available set_no by category
set_nos:any;
  importset_no=()=>{
    this._questionservice.findAllSets(this.registerFormControl.category.value)
    .subscribe((data)=>{
     console.log(data);
     if(data){
      this.set_nos=data;
     }
     else{
        //getting reference of select Element
     var setRef:any=document.getElementById(this.select);
     setRef.innerHTML=null;
     }
    
    });
  }

  //find all available questions by particular set number
  ques:any;
  importQuestionno=()=>{
    alert("ala re");
    this._questionservice.findAllQues(this.registerFormControl.setno.value)
    .subscribe((data)=>{
     console.log(data);
     if(data){
      this.ques=data;
     }
     else{
        //getting reference of select Element
     var setRef:any=document.getElementById(this.select);
     setRef.innerHTML=null;
     }
    
    });
  }
  
  
    AddNewSet=()=>{
      //display create new set input element
      var newsetRef:any=document.getElementById(this.setNewInpid);
      newsetRef.style.visibility="visible";
      //getting reference of select Element
     var setRef:any=document.getElementById(this.select);
     //creating New option element here
     var option=document.createElement("option");
     //setting value to option element
     option.innerHTML=newsetRef.value;
     if(newsetRef.value){
       //append option element
      setRef.append(option);
       //again hide input element
      newsetRef.style.visibility="hidden";
      //clear the value in input element
      newsetRef.value=null;
     }
     
    }
  
    clear=()=>{
      //remove all validation msg by making flag false
      this.submitted=false;
      this.matched=false;
      this.everythingfine=false;
    }
  
    matchAnswer=()=>{
      this.matched=false;
      if ((this.registerFormControl.answer.value==this.registerFormControl.option1.value)
         ||(this.registerFormControl.answer.value==this.registerFormControl.option2.value)
         ||(this.registerFormControl.answer.value==this.registerFormControl.option3.value)
         ||(this.registerFormControl.answer.value==this.registerFormControl.option4.value))
      {
        this.matched=true;
      }
    }
  
    validateQuizForm=()=>{
      this.submitted = true;
      if ((this.quizData.valid)&&(this.matched)) {
        this.everythingfine=true;
  //creating object to insert in database
        const data={
          category:this.registerFormControl.category.value,
          sets:this.registerFormControl.setno.value,
          question:this.registerFormControl.question.value,
          questionno:this.registerFormControl.questionno.value,
          option1:this.registerFormControl.option1.value,
          option2:this.registerFormControl.option2.value,
          option3:this.registerFormControl.option3.value,
          option4:this.registerFormControl.option4.value,
          answer:this.registerFormControl.answer.value,
        };
  //subscribing service here with calling create method
        this._questionservice.create(data).subscribe(response=>{
          console.log(response);
        },
        error=>{
          console.log(error);
        });
  
        
      }
  }

}
