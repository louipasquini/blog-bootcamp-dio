import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuLateralModule } from './menu-lateral/menu-lateral.module'
import { ConteudoBlogModule } from './conteudo-blog/conteudo-blog.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MenuLateralModule,
    ConteudoBlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
