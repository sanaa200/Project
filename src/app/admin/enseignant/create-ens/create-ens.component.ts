import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnsserviceService } from '../ensservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-ens',
  templateUrl: './create-ens.component.html',
  styleUrl: './create-ens.component.css'
})
export class CreateEnsComponent implements OnInit {

  constructor(private service : EnsserviceService , private route : ActivatedRoute){ }
  messageErreur:any ;
  messageShow:any;
  messageSuccess:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.route.snapshot.paramMap.get('id');
    if(this.getparamid)
      {
    this.service.getSingleData( this.getparamid).subscribe((res) => {
        // console.log(res,'res ##');
        this.ensForm.patchValue({

          id : res.data[0].ID,
          ida : res.data[0].ADM_ID, 
          nom : res.data[0].NOM , 
          prenom : res.data[0].PRENOM , 
          email : res.data[0].EMAIL ,
          password : res.data[0].PASSWORD ,
          role : res.data[0].ROLE 
        });
    });
  }
}
  ensForm = new FormGroup({
    id : new FormControl('',Validators.required),
    ida : new FormControl('',Validators.required),
    nom : new FormControl('',Validators.required),
    prenom : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    role : new FormControl('',Validators.required), 
  });

  //  create new enseignant
  ensSubmit(){
    if(this.ensForm.valid)
      {
        console.log(this.ensForm.value,'signupform###');
        this.messageShow = false ;

        // call Api service signup
      this.service.createData(this.ensForm.value).subscribe((res) => {
           console.log(res,'res##');
           this.ensForm.reset();
           this.messageSuccess = res.message ;

      //  if(res.status == true ){

      //   // this.router.navigate(['loginEseignant']);

      //  }else{
      //    this.messageShow=true ;
      //    this.messageErreur = res.msg ;
      //  }

           
      });

      }
    else
    {
      // this.messageShow = true ;
      this.messageErreur = 'All field required !!!' ;
    } 
    
}
// modifier un enseignant
updateSubmit()
{
   console.log(this.ensForm.value,'updatd form ##');
   if(this.ensForm.valid){
    this.service.updateData(this.ensForm.value,this.getparamid).subscribe((res) => {
         console.log(res,'res ##');
         this.messageSuccess = res.message ;
    });
   }
   else
   {
    this.messageErreur = 'all field is required !! ';
   }
   
}
}
