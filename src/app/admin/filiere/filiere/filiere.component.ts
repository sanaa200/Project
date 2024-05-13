import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filiere',
  templateUrl: './filiere.component.html',
  styleUrl: './filiere.component.css'
})
export class FiliereComponent {

  constructor ( private router: Router){ }
  Menu(){
    console.log('Menu##');
    localStorage.clear();
    this.router.navigate(['menu']).then(() => {

    });
  }

}
