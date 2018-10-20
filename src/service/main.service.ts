import { Anotacao } from './../model/anotacao.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from '../config/api.config';

@Injectable()
export class MainService {
    searchUrl: string = `${API_CONFIG.baseUrl}/anotacoes`;
    constructor(private http: HttpClient) { }

    public findAll(): Observable<Anotacao[]>{
        return this.http.get<Anotacao[]>(this.searchUrl);
    }
}