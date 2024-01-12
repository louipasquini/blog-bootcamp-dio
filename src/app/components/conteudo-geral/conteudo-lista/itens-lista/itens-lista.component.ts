import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itens-lista',
  templateUrl: './itens-lista.component.html',
  styleUrls: ['./itens-lista.component.css']
})
export class ItensListaComponent implements OnInit {
  @Input()
  imagem: string = ''
  @Input()
  titulo: string = ''
  @Input()
  autor: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
