import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  constructor(private route :Router){ }
  taches = [
    {'id':1,'name':'GESTION DES ENSEIGNANTS','image':'../../assets/pp.jpg.webp'},
    {'id':2,'name':'GESTION DES ETUDIANTS','image':'../../assets/oo.jpg'},
    {'id':3,'name':'GESTION DES GROUPES','image':'../../assets/gp.webp'},
    {'id':4,'name':'GESTION DES FILIERES','image':'../../assets/fil.jpeg'},
    {'id':5,'name':'GESTION DES MATIERES','image':'../../assets/matt.jpeg'},
    {'id':6,'name':'GESTION DES SEANCES','image':'../../assets/sea.jpg'},
    {'id':7,'name':'GESTION DES SALLES','image':'../../assets/sal.jpg'},
  ]
  ngOnInit(): void {
    
  }
 
  navigateToEns() {
    this.route.navigate(['ens/read-ens']);
  }

  navigateToFiliere() {
    this.route.navigate(['filiere/read-filiere']);
  }

  navigateToGroupe(){
    this.route.navigate(['groupe/read-groupe']);
  }

  navigateToModule() {
    this.route.navigate(['module/read-module']);
  }

  navigateToEtudiant() {
    this.route.navigate(['etudiant/read-etudiant']);
  }

  navigateToSeance(){
    this.route.navigate(['seance/read-seance']);
  }

  navigateToSalle(){
    this.route.navigate(['salle/read-salle']);
  }
}

