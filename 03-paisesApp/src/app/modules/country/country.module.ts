import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountrySearchBarComponent } from './components/country-search-bar/country-search-bar.component';


@NgModule({
    declarations: [ByCapitalComponent, ByCountryComponent, ByRegionComponent, CountryInfoComponent, CountryTableComponent, CountrySearchBarComponent],
    exports: [ByCapitalComponent, ByCountryComponent, ByRegionComponent, CountryInfoComponent],
    imports: [CommonModule, FormsModule, RouterModule]
})
export class CountryModule {}
