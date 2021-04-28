import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
    
    heroeBorrado: string = '';

    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'La Pantera Rosa'];
    
    borrarHeroe(): void {
        this.heroeBorrado = this.heroes.shift() || '';
    }

}
