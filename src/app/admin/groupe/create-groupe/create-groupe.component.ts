import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicegroupeService} from '../servicegroupe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-groupe',
  templateUrl: './create-groupe.component.html',
  styleUrl: './create-groupe.component.css'
})
export class CreateGroupeComponent implements OnInit {

  constructor(private service : ServicegroupeService, private route : ActivatedRoute){ }
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
        this.groupeForm.patchValue({
          idg : res.data[0].ID_GROUPE,
          idf : res.data[0].ID_FILIERE ,
          id : res.data[0].ID, 
          nom : res.data[0].NOM_GROUPE , 
        });
    });
  }
}
groupeForm = new FormGroup({

    idg : new FormControl('',Validators.required),
    idf : new FormControl('',Validators.required),
    id : new FormControl('',Validators.required),
    nom : new FormControl('',Validators.required),

  });

  //  create new enseignant
  groupeSubmit(){
    if(this.groupeForm.valid)
      {
        console.log(this.groupeForm.value,'filform###');
        this.messageShow = false ;

        // call Api service signup
      this.service.createData(this.groupeForm.value).subscribe((res) => {
           console.log(res,'res##');
           this.groupeForm.reset();
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
   console.log(this.groupeForm.value,'updatd form ##');
   if(this.groupeForm.valid){
    this.service.updateData(this.groupeForm.value,this.getparamid).subscribe((res) => {
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
