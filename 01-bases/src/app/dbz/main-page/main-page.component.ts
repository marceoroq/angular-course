import { Component, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
    
    listaPersonajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ]

    defaultPersonaje: Personaje = {
        nombre: 'Maestro Roshi',
        poder: 10000
    }

    insertarNuevoPersonaje(personaje: Personaje) {
        this.listaPersonajes.push(personaje);
    }

}
