import { Pokemon } from './../../Models/pokemon.model';
import { PokedexService } from './../../services/pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons!: Pokemon[];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.getPokedex();

  }

  getPokedex(): void
  {
    this.pokedexService.read().subscribe(pokemon =>
      {
        this.pokemons = pokemon
        this.pokemons.sort((a,b) => (a.id < b.id ? -1 : 1))
      })
  }

  pokeNum(number: number):string {
    const truNumber = number.toString()
    if (truNumber.length == 1)
    {
      return '#00' + truNumber
    }
    else if (truNumber.length == 2)
    {
      return '#0' + truNumber
    }
    else
    {
      return '#' + truNumber
    }
  }

}
