import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.interface';


@Component({
    selector: 'app-by-region',
    templateUrl: './by-region.component.html',
    styles: []
})
export class ByRegionComponent {
    
    regions: string[] = ["africa", "americas", "asia", "europe", "oceania"];
    activeRegion: string = "";
    countries: Country[] = [];

    constructor(private countryService: CountryService) {}
    
    public activateRegion(region: string) {
        this.activeRegion = region;
        this.searchCountries(region);
    }
    
    public getCssClass(region: string): string {
    	return (region === this.activeRegion)? 'btn ms-2 btn-primary': 'btn ms-2 btn-outline-primary'
    }
    
    public searchCountries(region: string) {
        this.countryService.searchCountryByRegion(region)
            .subscribe(res => this.countries = res, 
                       err => this.countries = [])
    }

}
