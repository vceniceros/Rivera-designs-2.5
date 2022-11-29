import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { mueble } from '../models/mueble';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class MuebleService{
    API_URI = 'http://localhost:3000/api';
    
    constructor(private http: HttpClient){

    }
    getMuebles(){
        return this.http.get(`${this.API_URI}/mueble`);
    }
    getMueble(idmuebles: String):Observable<any[]>{
        return this.http.get<any[]>(`${this.API_URI}/mueble/${idmuebles}`);
    }
}