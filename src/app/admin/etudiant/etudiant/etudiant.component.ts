import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {

  constructor ( private router: Router){ }
  Menu(){
    console.log('Menu##');
    localStorage.clear();
    this.router.navigate(['menu']).then(() => {

    });
  }

}
