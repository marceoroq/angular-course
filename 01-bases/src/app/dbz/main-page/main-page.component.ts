import { Component, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

    defaultPersonaje: Personaje = {
        nombre: 'Maestro Roshi',
        poder: 10000
    }

    constructor() {}

}
