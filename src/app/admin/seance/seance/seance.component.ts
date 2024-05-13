import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.component.html',
  styleUrl: './seance.component.css'
})
export class SeanceComponent {

  constructor ( private router: Router){ }
  Menu(){
    console.log('Menu##');
    localStorage.clear();
    this.router.navigate(['menu']).then(() => {

    });
  }

}
