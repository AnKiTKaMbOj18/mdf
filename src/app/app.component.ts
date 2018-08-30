import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Model Driven Forms';
  submitted=false;
  
  //using formBuilder with dependency injection in constructor i.e using builder approach
  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit() {
    this.userForm=this.formBuilder.group({
      name:['ankit',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      email:[],
      address:this.formBuilder.group({
        street:[],
        city:[],
        postalcode:[null,[Validators.pattern('^[1-9][0-9]{5}')]]
      })
    })
  }

  //using FormGroup and FormControl i.e without builder 

/*   userForm=new FormGroup({
    name:new FormControl('ankit',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    email:new FormControl(),
    address:new FormGroup({
      street:new FormControl(),
      city:new FormControl(),
      postalcode:new FormControl(null,Validators.pattern('^[1-9][0-9]{5}'))
    })
  }); */

  onSubmit(){
    this.submitted=true;
    console.log(this.userForm.value);
    document.write('form submitted successfully to enter again reload the page')
  }
}
