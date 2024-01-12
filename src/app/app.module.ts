import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { BotaoLateralComponent } from './components/menu-lateral/botao-lateral/botao-lateral.component';
import { ContaUsuarioComponent } from './components/menu-lateral/conta-usuario/conta-usuario.component';
import { ConteudoBlogComponent } from './components/conteudo-geral/conteudo-blog/conteudo-blog.component';
import { BotaoInterativoComponent } from './components/conteudo-geral/conteudo-blog/botao-interativo/botao-interativo.component';
import { BotaoVoltarComponent } from './components/conteudo-geral/conteudo-blog/botao-voltar/botao-voltar.component';
import { ImagensNoticiaComponent } from './components/conteudo-geral/conteudo-blog/imagens-noticia/imagens-noticia.component';
import { NoticiaPrincipalComponent } from './components/conteudo-geral/conteudo-blog/noticia-principal/noticia-principal.component';
import { SequenciaNoticiaComponent } from './components/conteudo-geral/conteudo-blog/sequencia-noticia/sequencia-noticia.component';
import { BlocoSequenciaComponent } from './components/conteudo-geral/conteudo-blog/sequencia-noticia/bloco-sequencia/bloco-sequencia.component';
import { MaisNoticiaComponent } from './components/conteudo-geral/conteudo-blog/sequencia-noticia/mais-noticia/mais-noticia.component';
import { ReadingListComponent } from './pages/reading-list/reading-list.component';
import { ConteudoListaComponent } from './components/conteudo-geral/conteudo-lista/conteudo-lista.component';
import { ItensListaComponent } from './components/conteudo-geral/conteudo-lista/itens-lista/itens-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    PaginaInicialComponent,
    BotaoLateralComponent,
    ContaUsuarioComponent,
    ConteudoBlogComponent,
    BotaoInterativoComponent,
    BotaoVoltarComponent,
    ImagensNoticiaComponent,
    NoticiaPrincipalComponent,
    SequenciaNoticiaComponent,
    BlocoSequenciaComponent,
    MaisNoticiaComponent,
    ReadingListComponent,
    ConteudoListaComponent,
    ItensListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
