import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.scss']
})
export class Ex04Component implements OnInit {

  arrayFotos: any = [
    {
      url: "assets/foto1.png",
      description: "Aterro do Flamengo"
    },
    {
      url: "assets/foto2.png",
      description:"Lollapaloza 2019"
    },
    {
      url: "assets/foto3.png",
      description:"Lollapaloza 2019"
    },
    {
      url: "assets/foto4.png",
      description:"Lollapaloza 2019"
    },
    {
      url: "assets/foto5.png",
      description:"Rio Open"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
