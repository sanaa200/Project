import { Component , OnInit} from '@angular/core';
import { ServicegroupeService} from '../servicegroupe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-groupe',
  templateUrl: './read-groupe.component.html',
  styleUrl: './read-groupe.component.css'
})
export class ReadGroupeComponent implements OnInit {
  readData : any ;
  messageSuccess :any;
  
    constructor(private service :  ServicegroupeService ) { }
  
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
  