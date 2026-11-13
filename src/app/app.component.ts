import { Component } from '@angular/core';
import { MiPokemonComponent } from './components/mi-pokemon/mi-pokemon.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MiComponenteComponent, MiPokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo Angular con PokéAPI';
}
