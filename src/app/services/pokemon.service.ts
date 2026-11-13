import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonApiResponse } from '../models/pokemon-api-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }
  
  public async getPokemonById(nombre: string): Promise<Pokemon> {
    const clave = nombre.trim().toLowerCase();
    if (!clave) {
      throw new Error('Escribe un nombre de Pokémon válido');
    }

    let data: PokemonApiResponse;
    try {
      data = await firstValueFrom(this.http.get<PokemonApiResponse>(
        `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(clave)}`
      ));
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse) {
        throw new Error(error.status === 404
          ? 'No se encontró el Pokémon'
          : error.status === 0
            ? 'No se pudo conectar con PokéAPI. Revisa tu conexión a Internet.'
            : `Error al consultar PokéAPI (${error.status})`);
      }
      throw error;
    }

    return {
      id: data.id,
      nombre: data.name,
      tipos: data.types.map(typeInfo => typeInfo.type.name),
      imagen: data.sprites.front_default
    };
  }
}
