import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-sequencia-noticia',
  templateUrl: './sequencia-noticia.component.html',
  styleUrls: ['./sequencia-noticia.component.css']
})
export class SequenciaNoticiaComponent implements OnInit {
  idProximaNoticia: string = dataFake[1].id
  tituloProximaNoticia: string = dataFake[1].titulo
  imagemProximaNoticia: string = dataFake[1].imagem
  idSequenciaUm: string = dataFake[2].id
  tagSequenciaUm: string = dataFake[2].tag
  imagemSequenciaUm: string = dataFake[2].imagem
  idSequenciaDois: string = dataFake[3].id
  tagSequenciaDois: string = dataFake[3].tag
  imagemSequenciaDois: string = dataFake[3].imagem
  pageId: string | null = ''

  constructor() { }

  ngOnInit(): void {
  }

}
