import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicefiliereService} from '../servicefiliere.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-filiere',
  templateUrl: './create-filiere.component.html',
  styleUrl: './create-filiere.component.css'
})
export class CreateFiliereComponent implements OnInit {
  constructor(private service : ServicefiliereService, private route : ActivatedRoute){ }
  
  messageErreur:any ;
  messageShow:any;
  messageSuccess:any;
  getparamid:any;

  ngOnInit(): void {

    console.log(this.route.snapshot.paramMap.get('id'),'getId ');
    this.getparamid = this.route.snapshot.paramMap.get('id'); 
    
    if(this.getparamid)
      {
    this.service.getSingleData( this.getparamid).subscribe((res) => {
         console.log(res,'res ##');
        this.filForm.patchValue({

          nom : res.data[0].NOM_FILIERE , 
          description : res.data[0].DESCRIPTION_FILIERE , 
        });
    });
  }
}
  filForm = new FormGroup({

    nom : new FormControl('',Validators.required),
    description : new FormControl('',Validators.required),

  });

  //  create new enseignant
  filSubmit(){
    if(this.filForm.valid)
      {
        console.log(this.filForm.value,'filform###');
        this.messageShow = false ;

        // call Api service signup
      this.service.createData(this.filForm.value).subscribe((res) => {
           console.log(res,'res##');
           this.filForm.reset();
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
   console.log(this.filForm.value,'updatd form ##');
   if(this.filForm.valid){
    this.service.updateData(this.filForm.value,this.getparamid).subscribe((res) => {
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
