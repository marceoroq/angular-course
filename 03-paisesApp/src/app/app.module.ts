import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CountryModule } from './modules/country/country.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, SharedModule, CountryModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
