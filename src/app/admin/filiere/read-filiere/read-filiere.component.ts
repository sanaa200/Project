import { Component , OnInit} from '@angular/core';
import { ServicefiliereService} from '../servicefiliere.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-filiere',
  templateUrl: './read-filiere.component.html',
  styleUrl: './read-filiere.component.css'
})
export class ReadFiliereComponent implements OnInit {
  readData : any ;
  messageSuccess :any;
  
    constructor(private service : ServicefiliereService ) { }
  
    ngOnInit(): void {
    
      this.getAllData();
    }
  
    deleteData(id:any){
      this.service.deleteData(id).subscribe((res) => {
        console.log(id,'delete data ##');
        this.messageSuccess = res.message ;
         this.getAllData();
      });
    }
  
    // get data
  
    getAllData(){
  
      this.service.getAllData().subscribe((res) => {
        // console.log(res,'get data ##');
        this.readData = res.data;
      });
    }
  }
  