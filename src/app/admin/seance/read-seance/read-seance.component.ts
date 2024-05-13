import { Component,OnInit } from '@angular/core';
import { ServiceseanceService} from '../serviceseance.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-seance',
  templateUrl: './read-seance.component.html',
  styleUrl: './read-seance.component.css'
})
export class ReadSeanceComponent implements OnInit {
  readData : any ;
  messageSuccess :any;
  
    constructor(private service :  ServiceseanceService ) { }
  
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
  
