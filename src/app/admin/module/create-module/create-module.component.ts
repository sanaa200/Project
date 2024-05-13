import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicemoduleService} from '../servicemodule.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrl: './create-module.component.css'
})
export class CreateModuleComponent implements OnInit {

  constructor(private service : ServicemoduleService, private route : ActivatedRoute){ }
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
        this.moduleForm.patchValue({
          // id : res.data[0].ID_GROUPE ,
          idf : res.data[0].ID_FILIERE , 
          nom : res.data[0].NOM_MODULE , 
        });
    });
  }
}
moduleForm = new FormGroup({

    // id : new FormControl('',Validators.required),
    idf : new FormControl('',Validators.required),
    nom : new FormControl('',Validators.required),

  });

  //  create new enseignant
  moduleSubmit(){
    if(this.moduleForm.valid)
      {
        console.log(this.moduleForm.value,'filform###');
        this.messageShow = false ;

        // call Api service signup
      this.service.createData(this.moduleForm.value).subscribe((res) => {
           console.log(res,'res##');
           this.moduleForm.reset();
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
   console.log(this.moduleForm.value,'updatd form ##');
   if(this.moduleForm.valid){
    this.service.updateData(this.moduleForm.value,this.getparamid).subscribe((res) => {
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
