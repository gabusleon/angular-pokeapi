import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonApiResponse } from '../models/pokemon-api-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  public async getPokemonById(nombre: string): Promise<Pokemon> {
    const clave = nombre.trim().toLowerCase();
    if (!clave) {
      throw new Error('Escribe un nombre de Pokémon válido');
    }

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(clave)}`
    );

    if (!response.ok) {
      throw new Error(response.status === 404
        ? 'No se encontró el Pokémon'
        : `Error al consultar PokéAPI (${response.status})`);
    }

    const data: PokemonApiResponse = await response.json();

    return {
      id: data.id,
      nombre: data.name,
      tipos: data.types.map(typeInfo => typeInfo.type.name),
      imagen: data.sprites.front_default
    };
  }
}
