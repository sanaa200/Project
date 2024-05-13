import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceetudiantService } from '../serviceetudiant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrl: './create-etudiant.component.css'
})
export class CreateEtudiantComponent implements OnInit {

  constructor(private service : ServiceetudiantService , private route : ActivatedRoute){ }
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
        this.etudiantForm.patchValue({

          id : res.data[0].ID, 
          idg : res.data[0].ID_GROUPE, 
          nom : res.data[0].NOM , 
          prenom : res.data[0].PRENOM , 
          email : res.data[0].EMAIL ,
          password : res.data[0].PASSWORD ,
          role : res.data[0].ROLE ,
          cne :res.data[0].CNE ,
          photo : res.data[0].PHOTO ,
        });
    });
  }
}
  etudiantForm = new FormGroup({
    id : new FormControl('',Validators.required),
    idg : new FormControl('',Validators.required),
    nom : new FormControl('',Validators.required),
    prenom : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    role : new FormControl('',Validators.required),
    cne : new FormControl('',Validators.required),
    photo : new FormControl('',Validators.required),
  });

  //  create new enseignant
  etudiantSubmit(){
    if(this.etudiantForm.valid)
      {
        console.log(this.etudiantForm.value,'signupform###');
        this.messageShow = false ;

        // call Api service signup
      this.service.createData(this.etudiantForm.value).subscribe((res) => {
           console.log(res,'res##');
           this.etudiantForm.reset();
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
   console.log(this.etudiantForm.value,'updatd form ##');
   if(this.etudiantForm.valid){
    this.service.updateData(this.etudiantForm.value,this.getparamid).subscribe((res) => {
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

