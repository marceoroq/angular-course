import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ByRegionComponent } from './modules/country/pages/by-region/by-region.component';
import { ByCountryComponent } from './modules/country/pages/by-country/by-country.component';
import { ByCapitalComponent } from './modules/country/pages/by-capital/by-capital.component';
import { CountryInfoComponent } from './modules/country/pages/country-info/country-info.component';


const routes: Routes = [
    {path: '', component: ByCountryComponent, pathMatch: 'full'},
    {path: 'capital', component: ByCapitalComponent},
    {path: 'region', component: ByRegionComponent},
    {path: 'country/:id', component: CountryInfoComponent},
    {path: '**', redirectTo: ''},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}