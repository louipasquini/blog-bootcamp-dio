import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo-blog',
  templateUrl: './conteudo-blog.component.html',
  styleUrls: ['./conteudo-blog.component.css']
})
export class ConteudoBlogComponent implements OnInit {
  idNoticia: number = 0
  tagNoticia: string = ''
  tituloNoticia: string = ''
  imagemNoticia: string = ''
  autorNoticia: string = ''
  paragrafoNoticia: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
