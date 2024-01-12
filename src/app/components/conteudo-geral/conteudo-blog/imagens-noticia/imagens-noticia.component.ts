import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-imagens-noticia',
  templateUrl: './imagens-noticia.component.html',
  styleUrls: ['./imagens-noticia.component.css']
})
export class ImagensNoticiaComponent implements OnInit, OnChanges {
  @Input()
  imagemNoticia:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

}
