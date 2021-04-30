import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html',
})
export class AgregarComponent {
    
    @Input() nuevoPersonaje: Personaje = {
        nombre: '',
        poder: 0
    }
        
    constructor(private dbzService: DbzService) {}

    // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

    agregar() {    
        // this.onNuevoPersonaje.emit(this.nuevoPersonaje);
        this.dbzService.agregarPersonaje(this.nuevoPersonaje);
        
        // Vaciamos formulario
        this.limpiarForm();
    }

    limpiarForm() {
        this.nuevoPersonaje = {
            nombre: '',
            poder: 0
        }
    }

}
