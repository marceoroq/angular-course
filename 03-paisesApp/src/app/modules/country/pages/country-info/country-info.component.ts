import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../models/country.interface';


@Component({
    selector: 'app-country-info',
    templateUrl: './country-info.component.html',
    styles: []
})
export class CountryInfoComponent implements OnInit {
    
    country!: Country;

    constructor(private activatedRoute: ActivatedRoute, 
                private countryService: CountryService) {}

    ngOnInit(): void {
        // Para mostrar la informacion de un pais, vamos a hacer una suscripcion a la URL 
        // de la pagina para que al cambiar mostremos la informacion del pais correspondiente.
        // Esto es por si el usuario ingresa la url a mano en vez de acceder desde el link
        // de la aplicacion, ya que si hiciera eso y no estamos viendo los cambios en la URL
        // angular no va a saber que la pagina deberia cambiar. Para poder hacer esta suscripcion
        // inyectamos en el constructor el ActivatedRoute y nos suscribimos en en ngOnInit:
        // 
        // this.activatedRoute.params
        //     .subscribe(params => {
        //         this.countryService.searchCountryByCode(params.code)
        //             .subscribe(response => console.log(response))
        //     })
        // 
        // Vemos que tenemos un suscribe dentro de otro suscribe. Esto podemos resumirlo usando
        // rxjs con el operador switchMap que lo que hace es recibir un observable y devolver
        // otro observable, quedandonos lo anterior de la siguiente forma:
        //
        // this.activatedRoute.params
        //     .pipe(switchMap(params => this.countryService.searchCountryByCode(params.code)))
        //     .subscribe(response => console.log(response))

        this.activatedRoute.params
            .pipe(
                switchMap(params => this.countryService.searchCountryByCode(params.code)),
                tap(console.log) // El tap es equivalente a hacer response => console.log(response)
            )
            .subscribe(country => this.country = country)
        


    }
}
