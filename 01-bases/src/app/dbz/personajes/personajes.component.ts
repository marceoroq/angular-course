import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';


@Component({
    selector: 'app-personajes',
    templateUrl: './personajes.component.html'
})
export class PersonajesComponent{
    
    get listaPersonajes() {
        return this.dbzService.listaPersonajes;
    }

    constructor(private dbzService: DbzService) {};

}
