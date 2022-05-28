import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/models/interface';

@Component({
  selector: 'app-ex09',
  templateUrl: './ex09.component.html',
  styleUrls: ['./ex09.component.scss']
})
export class Ex09Component implements OnInit {

  cadastro:boolean = false

  animal:IAnimal = {
    nomeDono: "",
    cpf: '',
    email: "",
    nomeCachorro: "",
    codCachorro: 0,
  }

  constructor() { }

  ngOnInit(): void {
  
  }

  cadastrar () {
    this.cadastro
  }


}
