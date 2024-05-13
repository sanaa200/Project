import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceAdminService } from '../apiservice-admin.service'; 
import { Router} from '@angular/router';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrl: './signup-admin.component.css'
})
export class SignupAdminComponent implements OnInit {

  constructor( private service : ApiserviceAdminService  , private router : Router){ }

  messageErreur : any;
  messageShow = false ;

  signupForm = new FormGroup({
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

        this.router.navigate(['loginAdmin']);

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