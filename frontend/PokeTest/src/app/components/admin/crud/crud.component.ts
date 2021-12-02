import { Pokemon } from './../../../Models/pokemon.model';
import { PokedexService } from './../../../services/pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  displayedColumns = ['id', 'name', 'type1', 'type2', 'description', 'action']
  dataSource!: any[]

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.getPokedex()
  }

  getPokedex(): void
  {
    this.pokedexService.read().subscribe(pokemon =>
      {
        this.dataSource = pokemon
        this.dataSource.sort((a,b) => (a.id < b.id ? -1 : 1))
      })
  }
}
