import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { base_url, extractData } from '../utiles/variables';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyapiService {
  constructor(private http: HttpClient) { }
  
  /* 
    Obtiene todos los character del endpoint
  */
  public allCharacters(): Observable<any> {
    return this.http.get(base_url + 'character').pipe(
      map(extractData));
  }
  /* 
    Obtiene los character por id
  */
  public getByCharacters(id): Observable<any> {
    return this.http.get(base_url + 'character/'+id).pipe(
      map(extractData));
  }
  /* 
    Obtiene los character por ids aleatorios
  */
  public getAleatory(count) : Observable<any> {
    return this.http.get(base_url + 'character/'+count.join()).pipe(
      map(extractData));
  }
  
}
