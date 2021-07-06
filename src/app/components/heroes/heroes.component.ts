import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../servicios/heroes.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Array<Heroe> = []
  

  constructor(private servicioHeroes : HeroesService) {
    this.heroes = this.servicioHeroes.getHeroes();
    console.log(this.heroes)
   }

  
  ngOnInit(): void {
  }

}
