import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service'; 
import { Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor( private service : ApiserviceService  , private router : Router){ }

  messageErreur : any;
  messageShow = false ;

  signupForm = new FormGroup({
    id : new FormControl('',Validators.required),
    nom : new FormControl('',Validators.required),
    prenom : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
  });

  ngOnInit(): void {
  }

  signupSubmit(){
    
    if(this.signupForm.valid)
      {
        console.log(this.signupForm.value,'signupform###');
        this.messageShow = false ;

        // call Api service signup
      this.service.signup(this.signupForm.value).subscribe((res) => {
           console.log(res,'res##');

       if(res.status == true ){

        this.router.navigate(['loginEseignant']);

       }else{
         this.messageShow=true ;
         this.messageErreur = res.msg ;
       }

           
      });

      }
    else
    {
      this.messageShow = true ;
      this.messageErreur = 'All field required !!!' ;
    } 
    
  }
}
