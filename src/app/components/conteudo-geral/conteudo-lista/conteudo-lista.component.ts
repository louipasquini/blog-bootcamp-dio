import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-conteudo-lista',
  templateUrl: './conteudo-lista.component.html',
  styleUrls: ['./conteudo-lista.component.css']
})
export class ConteudoListaComponent implements OnInit {
  dataFake = dataFake

  constructor() { }

  ngOnInit(): void {
  }

}
