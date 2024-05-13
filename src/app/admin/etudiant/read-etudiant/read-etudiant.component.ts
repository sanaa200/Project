import { Component, OnInit } from '@angular/core';
import { ServiceetudiantService } from '../serviceetudiant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-etudiant',
  templateUrl: './read-etudiant.component.html',
  styleUrl: './read-etudiant.component.css'
})
export class ReadEtudiantComponent implements OnInit {
  readData : any ;
  messageSuccess :any;
  
    constructor(private service : ServiceetudiantService) { }
  
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
  
