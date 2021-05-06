import { Component, Input } from '@angular/core';
import { Country } from '../../models/country.interface';
import { CountryService } from '../../services/country.service';


@Component({
    selector: 'app-by-capital',
    templateUrl: './by-capital.component.html'
})
export class ByCapitalComponent {

    query: string = "";
    hasError: boolean = false;
    countries: Country[] = [];

    constructor(private countryService: CountryService, ) {}

    search(query: string) {
        this.query = query;
        if (this.query.trim().length > 0) {
            this.countryService.searchCountryByCapital(this.query)
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
