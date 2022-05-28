import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex06',
  templateUrl: './ex06.component.html',
  styleUrls: ['./ex06.component.scss']
})
export class Ex06Component implements OnInit {

  click:boolean = false

  usuario:string = "";
  cpf:number = 0;
  diaAniversario:number = 0;
  senha:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar(){
    if(this.usuario && this.cpf && this.diaAniversario && this.senha){
      this.click = true;
    }

  }

}
