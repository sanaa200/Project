import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceseanceService} from '../serviceseance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-seance',
  templateUrl: './create-seance.component.html',
  styleUrl: './create-seance.component.css'
})
export class CreateSeanceComponent implements OnInit {

  constructor(private service : ServiceseanceService, private route : ActivatedRoute){ }
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
        this.seanceForm.patchValue({
          // id : res.data[0].ID_GROUPE ,
          ids : res.data[0].ID_SEANCE , 
          idm : res.data[0].ID_MODULE , 
        });
    });
  }
}
seanceForm = new FormGroup({

    // id : new FormControl('',Validators.required),
    ids : new FormControl('',Validators.required),
    idm : new FormControl('',Validators.required),

  });

  //  create new enseignant
  seanceSubmit(){
    if(this.seanceForm.valid)
      {
        console.log(this.seanceForm.value,'filform###');
        this.messageShow = false ;

        // call Api service signup
      this.service.createData(this.seanceForm.value).subscribe((res) => {
           console.log(res,'res##');
           this.seanceForm.reset();
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
   console.log(this.seanceForm.value,'updatd form ##');
   if(this.seanceForm.valid){
    this.service.updateData(this.seanceForm.value,this.getparamid).subscribe((res) => {
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

