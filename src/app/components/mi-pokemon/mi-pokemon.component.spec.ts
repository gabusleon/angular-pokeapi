import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonService } from '../../services/pokemon.service';

import { MiPokemonComponent } from './mi-pokemon.component';

describe('MiPokemonComponent', () => {
  let component: MiPokemonComponent;
  let fixture: ComponentFixture<MiPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiPokemonComponent],
      providers: [{
        provide: PokemonService,
        useValue: { getPokemonById: () => Promise.resolve({
          id: 25, nombre: 'pikachu', tipos: ['electric'], imagen: null
        }) }
      }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the Pokémon loaded on initialization', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('pikachu #25');
    expect(fixture.nativeElement.textContent).toContain('electric');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
