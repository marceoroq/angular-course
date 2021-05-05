import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-country-search-bar',
    templateUrl: './country-search-bar.component.html',
    styleUrls: ['./country-search-bar.component.css']
})
export class CountrySearchBarComponent {
    
    @Output() onEnter: EventEmitter<string> = new EventEmitter();

    query: string = ""
    
    constructor() {}

    search() {
        this.onEnter.emit(this.query);
    }
}
