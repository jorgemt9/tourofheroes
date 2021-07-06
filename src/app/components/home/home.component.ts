import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroes : Array<Heroe> = []

  constructor(private servicioHeroes : HeroesService) {
    this.heroes = this.servicioHeroes.getHeroes();
    console.log(this.heroes)
   }

  ngOnInit(): void {
  }

}
