import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumindoApiService {
  // endpoint = 'viacep.com.br/ws/01001000/json/'
  cep = '';
  
  constructor( private http: HttpClient) { 
  }

  // get(endpoint: string) {
  //   return this.http.get(endpoint);
  // }

  // post(endpoint: string, data: any) {
  //   return this.http.post(endpoint, data);
  // }

  obterTodos(){
    return this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`)
  }
}
