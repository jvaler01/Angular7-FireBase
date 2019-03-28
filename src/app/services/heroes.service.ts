import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Heroe} from '../models/heroe.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  fireUrl = 'https://heroesapp-fdd86.firebaseio.com/heroes.json';
  fireUrlHeroe = 'https://heroesapp-fdd86.firebaseio.com/heroes';
  constructor( private http: HttpClient) { }

  nuevoHeroe( heroe: Heroe) {
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    return this.http.post( this.fireUrl, body, { headers }).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
  actualizarHeroe( heroe: Heroe, key$: string) {
    console.log(key$);
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });

    let url = `${this.fireUrlHeroe}/${key$}.json`;
    return this.http.put( url, body, { headers }).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
  getHeroe( key$: string ) {
    let url = `${this.fireUrlHeroe}/${key$}.json`;
    return this.http.get( url ).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
  getHeroes() {
    return this.http.get( this.fireUrl ).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
  deleteHeroe( key$: string) {
    let url = `${this.fireUrlHeroe}/${key$}.json`;
    return this.http.delete( url ).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
}
