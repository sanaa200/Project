import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceAdminService } from '../apiservice-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent implements OnInit{
  
  constructor( private service : ApiserviceAdminService , private router :Router){ }

   messageErreur : any ;
   messageShow = false ;
   loginForm = new FormGroup({
     email : new FormControl('',Validators.required),
     password : new FormControl('',Validators.required),
   });

   ngOnInit(): void {

   }

   loginSubmit(){
if (this.loginForm.valid){
  console.log(this.loginForm.value,'loginValue##');
  //this.messageShow = false ;
  this.service.login(this.loginForm.value).subscribe((res) =>{
              if(res.status == true){
                //store data in localStorage
                localStorage.clear();
                localStorage.setItem('token',res.token);
                localStorage.setItem('username',res.result.nom);
                this.router.navigate(['menu']).then(()=> {
                  window.location.reload();
                });
                
              }
              else{
                this.messageShow = true ;
                this.messageErreur = res.message ;

              }
  });
  
} else {
  this.messageShow = true ;
  this.messageErreur = ' email or password incorrect !!!'
}
   }
   signup(){
       this.router.navigate(['signupAdmin']);
   }

}
