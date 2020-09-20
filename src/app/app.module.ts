import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './pages/app.component';
import { VeiculosListagemComponent } from './pages/veiculos-listagem/veiculos-listagem.component';
import {VeiculosService} from 'src/app/services/veiculos.service'

@NgModule({
  declarations: [
    AppComponent,
    VeiculosListagemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    VeiculosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
