import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Cooperado {
  Cpf: string,
  Nome: string,
  Situacao: boolean,
  ContaAplicacao: string,
  ContaCorrente: string
}

const baseCPF = [
  {
    Cpf: "11122233344",
    Nome: "Mariane de Souza Oliveira",
    Situacao: true,
    ContaAplicacao: "557932-4",
    ContaCorrente: "778461-8"
  }
]

@Component({
  selector: 'app-busca-cpf',
  templateUrl: './busca-cpf.component.html',
  styleUrls: ['./busca-cpf.component.css']
})

export class BuscaCpfComponent implements OnInit {
  cooperado = {} as Cooperado;

  cpfFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit(): void {
  }

  validaCPF(): void {
    let cpf_aux = this.cpfFormControl.value.replace(/[^\d]+/g, '');

    this.cooperado = baseCPF.filter(cpf_busca => {
      return cpf_busca.Cpf === cpf_aux;
    })[0]

    this.cooperado = this.cooperado ? this.cooperado : {} as Cooperado;
  }

}




