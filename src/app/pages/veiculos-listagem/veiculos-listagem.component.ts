import { Component, OnInit } from '@angular/core';
import {VeiculosService} from 'src/app/services/veiculos.service'
import {Veiculo} from 'src/app/models/veiculo'


@Component({
  selector: 'app-veiculos-listagem',
  templateUrl: './veiculos-listagem.component.html',
  styleUrls: ['./veiculos-listagem.component.css']
})
export class VeiculosListagemComponent implements OnInit {

  veiculos: Array<Veiculo>

  constructor(private veiculoService: VeiculosService) { }
  
  ngOnInit(): void {
    this.listVeiculos()
  }

  listVeiculos(){
    this.veiculoService.listVeiculos().subscribe(resp =>{
      this.veiculos = []
      this.veiculos = resp
    })
  }

  filterVeiculos(risco){
    this.veiculoService.listVeiculosByRisk(risco).subscribe(resp =>{
      this.veiculos = []
      this.veiculos = resp
    })
  }


}
