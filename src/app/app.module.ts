import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaService } from './services/consulta.service';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './services/cliente.service';



@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteService, ConsultaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
