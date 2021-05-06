import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-country-search-bar',
    templateUrl: './country-search-bar.component.html',
    styleUrls: ['./country-search-bar.component.css']
})
export class CountrySearchBarComponent implements OnInit{
    
    @Input() placeholder: string = '';
    @Output() onEnter: EventEmitter<string> = new EventEmitter();
    @Output() onDebounce: EventEmitter<string> = new EventEmitter();
    
    // Debounce nos permitira emitir cuando el usuario deje de escribir en el formulario.
    // Esto se puede hacer con formularios reactivos que se veran mas adelante.
    // Un Subject es un observable, por lo tanto debemos "suscribirnos" para saber su valor.
    debouncer: Subject<string> = new Subject();
    
    query: string = ""
    
    constructor() {}

    ngOnInit(): void {

        this.debouncer
            // Con pipe podemos realizar operaciones al observable (en este caso debouncer) antes de su metodo suscribe. 
            // En este caso lo que vamos a hacer es demorar la llegada a suscribe utilizando el debounceTime.
            // Lo que estamos diciendo es, no ingreses al suscribe hasta que el observable deje de emitir 
            // despues de 500ms.
            .pipe(debounceTime(300))
            .subscribe(value => {
                this.onDebounce.emit(value);
        })
    }

    search() {
        this.onEnter.emit(this.query);
    }

    charTyped() {
        // Lo que hacemos con next es emitir un valor con el debouncer. Este sera recibido
        // por el suscribe que tenemos en el ngOnInit
        this.debouncer.next(this.query);
    }
}
