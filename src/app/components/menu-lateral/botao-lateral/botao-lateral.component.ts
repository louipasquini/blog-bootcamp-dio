import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-lateral',
  templateUrl: './botao-lateral.component.html',
  styleUrls: ['./botao-lateral.component.css']
})
export class BotaoLateralComponent implements OnInit {
  @Input() valor:string=''
  @Input() icone:string=''

  constructor() { }

  ngOnInit(): void {
  }

  ativarFuncao():void{

  }

}
