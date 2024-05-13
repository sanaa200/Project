import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesalleService} from '../servicesalle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-salle',
  templateUrl: './create-salle.component.html',
  styleUrl: './create-salle.component.css'
})
export class CreateSalleComponent implements OnInit {

  constructor(private service : ServicesalleService, private route : ActivatedRoute){ }
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
        this.salleForm.patchValue({
          id : res.data[0].ID_SALLE,
          effectif : res.data[0].EFFECTIF , 
          type : res.data[0].TYPE , 
        });
    });
  }
}
salleForm = new FormGroup({

    id : new FormControl('',Validators.required),
    effectif : new FormControl('',Validators.required),
    type : new FormControl('',Validators.required),

  });

  //  create new enseignant
  salleSubmit(){
    if(this.salleForm.valid)
      {
        console.log(this.salleForm.value,'filform###');
        this.messageShow = false ;

        // call Api service signup
      this.service.createData(this.salleForm.value).subscribe((res) => {
           console.log(res,'res##');
           this.salleForm.reset();
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
   console.log(this.salleForm.value,'updatd form ##');
   if(this.salleForm.valid){
    this.service.updateData(this.salleForm.value,this.getparamid).subscribe((res) => {
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