import { Component , OnInit} from '@angular/core';
import { ServicemoduleService} from '../servicemodule.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-module',
  templateUrl: './read-module.component.html',
  styleUrl: './read-module.component.css'
})
export class ReadModuleComponent implements OnInit {
  readData : any ;
  messageSuccess :any;
  
    constructor(private service :  ServicemoduleService ) { }
  
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
  