import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ens',
  templateUrl: './ens.component.html',
  styleUrl: './ens.component.css'
})
export class EnsComponent {

  constructor ( private router: Router){ }
  Menu(){
    console.log('Menu##');
    localStorage.clear();
    this.router.navigate(['menu']).then(() => {

    });
  }

}
