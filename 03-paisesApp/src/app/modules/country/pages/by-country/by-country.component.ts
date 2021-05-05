import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.interface';


@Component({
    selector: 'app-by-country',
    templateUrl: './by-country.component.html'
})
export class ByCountryComponent {
    
    query: string = "";
    hasError: boolean = false;
    countries: Country[] = [];

    constructor(private countryService: CountryService) {}

    search(query: string) {
        this.query = query;
        if (this.query.trim().length > 0) {
            this.countryService.searchCountry(this.query)
                .subscribe(response => {
                    this.hasError = false;
                    this.countries = response;
                    this.query = "";
                }, err => {
                    this.hasError = true;
                    this.countries = [];
                })
        }
    }
}
