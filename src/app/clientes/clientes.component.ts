import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../domain/cliente';


@Component({
  selector: 'app-cliente',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : Cliente[];

  constructor(private clienteService : ClienteService) {
  this.getCliente();
  }

  ngOnInit() {
  }
  
  getCliente(){
    this.clienteService.getClientes()
    .subscribe(response => {
      this.clientes = response;
      console.log(response)
    })
  }

}