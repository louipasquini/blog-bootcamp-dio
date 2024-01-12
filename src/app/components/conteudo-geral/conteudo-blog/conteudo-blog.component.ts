import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-conteudo-blog',
  templateUrl: './conteudo-blog.component.html',
  styleUrls: ['./conteudo-blog.component.css']
})
export class ConteudoBlogComponent implements OnInit {
  idNoticia: string = ''
  tagNoticia: string = ''
  tituloNoticia: string = ''
  imagemNoticia: string = ''
  autorNoticia: string = ''
  paragrafoNoticia: string = ''
  pageId: string | null = ''

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>
      this.pageId = value.get('id')
      
    )
    this.setValuesToComponent(this.pageId)
  }
  
  setValuesToComponent(id:string|null){
    if (id === null) {
      id = dataFake[0].id
    }
    const result = dataFake.filter(article => article.id.toString() === id)[0]

    this.idNoticia = result.id
    this.tagNoticia = result.tag
    this.tituloNoticia = result.titulo
    this.imagemNoticia = result.imagem
    this.autorNoticia = result.autor
    this.paragrafoNoticia = result.paragrafo
  }

  ngDoCheck(){
    console.log('teste')
  }

}
