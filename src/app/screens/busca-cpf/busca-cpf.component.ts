import { ModalCpfInvalidoComponent } from './../modal-cpf-invalido/modal-cpf-invalido.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

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
  },
  {
    Cpf: "00000000000",
    Nome: "João da Silva",
    Situacao: false,
    ContaAplicacao: "395836-5",
    ContaCorrente: "725165-9"
  }
]

@Component({
  selector: 'app-busca-cpf',
  templateUrl: './busca-cpf.component.html',
  styleUrls: ['./busca-cpf.component.css']
})

export class BuscaCpfComponent implements OnInit {
  cooperado = {} as Cooperado;
  isCooperado = false;
  cpfError = false;

  cpfFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  validaCPF(): void {
    let cpf_aux = this.cpfFormControl.value.replace(/[^\d]+/g, '');

    this.cooperado = baseCPF.filter(cpf_busca => {
      return cpf_busca.Cpf === cpf_aux;
    })[0]

    if (this.cooperado) {
      this.isCooperado = true;
      this.cpfError = false;
    }
    else {
      this.cooperado = {} as Cooperado;
      this.isCooperado = false;
      this.cpfError = true;

      this.dialog.open(ModalCpfInvalidoComponent);
    }
  }

}


