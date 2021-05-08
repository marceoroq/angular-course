import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    
    private apiURL: string = "https://restcountries.eu/rest/v2"
    private params = new HttpParams()
        .set('fields', 'name;capital;alpha2Code;flag;population');

    constructor(private http: HttpClient) {}

    public searchCountry(query: string): Observable<Country[]> {
        const url = `${this.apiURL}/name/${query}`;
        return this.http.get<Country[]>(url, {params: this.params});
    }

    public searchCountryByCapital(query: string): Observable<Country[]> {
        const url = `${this.apiURL}/capital/${query}`;
        return this.http.get<Country[]>(url, {params: this.params});
    }
    
    public searchCountryByCode(code: string): Observable<Country> {
        const url = `${this.apiURL}/alpha/${code}`;
        return this.http.get<Country>(url);
    }

    public searchCountryByRegion(region: string): Observable<Country[]> {
        const url = `${this.apiURL}/region/${region}`;
        return this.http.get<Country[]>(url, {params: this.params});
    }
}
