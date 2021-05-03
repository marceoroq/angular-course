import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../models/gifs.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GifsService {
    private _API_KEY_GIPHY: string = environment.giphy_api_token;
    private giphyAPIUrl: string = 'https://api.giphy.com/v1/gifs';
    private _historial: string[] = [];
    public resultados: Gif[] = [];

    constructor(private http: HttpClient) {
        this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
        this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    }
    
    get historial() {
        return [...this._historial];
    }
    
    //TODO: ver posibilidad de implementar con async y await
    buscarGif(query: string) {
        // Evitar almacenar strings vacios:
        if (query.trim().length > 0) {
            // Eliminamos diferencia entre mayusculas y minusculas
            query = query.toLowerCase();
    
            // Verificamos si elemento no existe en historia, si es asi, lo insertamos
            if (!this._historial.includes(query)) {
                this._historial.unshift(query);
                // Limitamos visualizacion del historial a 10 items
                this._historial = this._historial.splice(0, 10);
                // Guardamos el historial en el LocalStorage para que al refrescar la pagina o cerrar/abrir el navegador
                // sigamos viendo el mismo historial
                localStorage.setItem('historial', JSON.stringify(this._historial));
            }
    
            const params = new HttpParams()
                .set('api_key', this._API_KEY_GIPHY)
                .set('limit', '10')
                .set('q', query);
    
            // El http devuelve un "observable" que permite muchas funcionalidades
            this.http.get<SearchGifsResponse>(`${this.giphyAPIUrl}/search`, { params })
                .subscribe(response => {
                    this.resultados = response.data;
                    // Guardamos los resultados en LocalStorage para tenerlos disponibles
                    localStorage.setItem('resultados',JSON.stringify(this.resultados));
                });
        }
    }
}
