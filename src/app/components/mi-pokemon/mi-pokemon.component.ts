import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-mi-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './mi-pokemon.component.html',
  styleUrl: './mi-pokemon.component.css'
})
export class MiPokemonComponent implements OnInit {
  public nombre: string = 'pikachu';
  public nombrePokemon: string = '';
  public id: number | null = null;
  public tipos: string[] = [];
  public imagen: string | null = null;
  public cargando: boolean = false;
  public error: string = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    void this.buscarPokemon();
  }

  public async buscarPokemon(): Promise<void> {
    this.cargando = true;
    this.error = '';
    this.id = null;
    this.nombrePokemon = '';
    this.tipos = [];
    this.imagen = null;

    try {
      const pokemon = await this.pokemonService.getPokemonById(this.nombre);
      this.id = pokemon.id;
      this.nombrePokemon = pokemon.nombre;
      this.tipos = pokemon.tipos;
      this.imagen = pokemon.imagen;
    } catch (error: unknown) {
      this.error = error instanceof Error ? error.message : 'Error al buscar el Pokémon';
    } finally {
      this.cargando = false;
    }
  }
}
