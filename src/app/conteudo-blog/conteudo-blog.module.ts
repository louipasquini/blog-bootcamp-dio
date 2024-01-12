import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoBlogComponent } from './conteudo-blog.component';
import { NoticiaPrincipalComponent } from './noticia-principal/noticia-principal.component';
import { SequenciaNoticiaComponent } from './sequencia-noticia/sequencia-noticia.component';
import { BotaoInterativoComponent } from './botao-interativo/botao-interativo.component';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';
import { ImagensNoticiaComponent } from './imagens-noticia/imagens-noticia.component';
import { BlocoSequenciaComponent } from './sequencia-noticia/bloco-sequencia/bloco-sequencia.component';
import { MaisNoticiaComponent } from './sequencia-noticia/mais-noticia/mais-noticia.component';



@NgModule({
  declarations: [
    ConteudoBlogComponent,
    NoticiaPrincipalComponent,
    SequenciaNoticiaComponent,
    BotaoInterativoComponent,
    BotaoVoltarComponent,
    ImagensNoticiaComponent,
    BlocoSequenciaComponent,
    MaisNoticiaComponent
  ],
  exports: [ConteudoBlogComponent],
  imports: [
    CommonModule
  ]
})
export class ConteudoBlogModule { }
