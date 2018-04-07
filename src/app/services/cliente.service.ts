import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Cliente } from '../domain/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClienteService {

  constructor(private http : HttpClient) { }

  getClientes() : Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`https://tcc-lojavirtual.herokuapp.com/clientes`);
  }

}