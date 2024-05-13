import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})
export class SalleComponent {

  constructor ( private router: Router){ }
  Menu(){
    console.log('Menu##');
    localStorage.clear();
    this.router.navigate(['menu']).then(() => {

    });
  }

}
