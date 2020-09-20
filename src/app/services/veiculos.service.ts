import { Injectable } from '@angular/core';
import {environment} from 'src/app/environments/environment'
import { HttpClient } from "@angular/common/http";
import {Veiculo} from 'src/app/models/veiculo'


@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  msVeiculosUrl: string;

  constructor(private http: HttpClient) { 
    this.msVeiculosUrl = `${environment.msVeiculosUrl}`;
  }

  listVeiculos(){
    return this.http.get<Veiculo[]>(`${this.msVeiculosUrl}/sin/systst-analise-risco/rest/veiculo`); 
  }

  listVeiculosByRisk(risco){
    return this.http.get<Veiculo[]>(`${this.msVeiculosUrl}/sin/systst-analise-risco/rest/veiculo/${risco}`); 
  }
}
