import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {
    
    private _listaPersonajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ]

    get listaPersonajes(): Personaje[] {
        // Uso de operador Spread, buena practica de JS. En Javascript generalmente lo que se pasan son referencias
        // entonces para evitar pasar una referencia de nuestra propiedad privada, rompemos la referencia con el 
        // operador spread.
        return [...this._listaPersonajes];
    }

    constructor() {}

    agregarPersonaje(personaje: Personaje) {
        if (personaje.nombre.trim().length === 0) { return; }
        this._listaPersonajes.push(personaje);
    }

}