import { Component , OnInit} from '@angular/core';
import { ServicesalleService} from '../servicesalle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-salle',
  templateUrl: './read-salle.component.html',
  styleUrl: './read-salle.component.css'
})
export class ReadSalleComponent implements OnInit {
  readData : any ;
  messageSuccess :any;
  
    constructor(private service :  ServicesalleService ) { }
  
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
  