import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noticia-principal',
  templateUrl: './noticia-principal.component.html',
  styleUrls: ['./noticia-principal.component.css']
})
export class NoticiaPrincipalComponent implements OnInit {
  @Input()
  idNoticia:string=''
  @Input()
  tagNoticia:string=''
  @Input()
  tituloNoticia:string=''
  @Input()
  imagemNoticia:string=''
  @Input()
  autorNoticia:string=''
  @Input()
  paragrafoNoticia:string=''


  constructor() { }

  ngOnInit(): void {
  }

}
