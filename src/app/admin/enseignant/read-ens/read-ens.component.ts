import { Component, OnInit } from '@angular/core';
import { EnsserviceService } from '../ensservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read-ens',
  templateUrl: './read-ens.component.html',
  styleUrl: './read-ens.component.css'
})
export class ReadEnsComponent implements OnInit {
readData : any ;
messageSuccess :any;

  constructor(private service : EnsserviceService) { }

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
