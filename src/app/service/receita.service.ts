
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receita } from '../models/receita.model';


@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  path = 'http://localhost:8080/';

  constructor(private http: HttpClient ) {

   }

  consultar()  {
    return this.http.get<any[]>(this.path + 'receitas');
    }

  getIngredientes() {
      return this.http.get<any[]>( this.path + 'ingredientes');
    }

  salvarReceita(receita: Receita) {
    return this.http.post<Receita>(this.path + 'receita', receita);
  }

  consultarReceita(id: Number) {
    return this.http.get<Receita>(this.path + 'receitas/' + id);
  }

}


