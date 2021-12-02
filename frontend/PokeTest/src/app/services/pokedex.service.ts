import { Pokemon } from './../Models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  baseUrl = "http://localhost:3000/pokemons"

  constructor(private http: HttpClient) { }

  read(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.baseUrl)
  }

}
