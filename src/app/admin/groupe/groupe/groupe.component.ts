import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrl: './groupe.component.css'
})
export class GroupeComponent {

  constructor ( private router: Router){ }
  Menu(){
    console.log('Menu##');
    localStorage.clear();
    this.router.navigate(['menu']).then(() => {

    });
  }

}
