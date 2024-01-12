import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from './menu-lateral.component';
import { BotaoLateralComponent } from './botao-lateral/botao-lateral.component';
import { ContaUsuarioComponent } from './conta-usuario/conta-usuario.component';



@NgModule({
  declarations: [
    MenuLateralComponent,
    BotaoLateralComponent,
    ContaUsuarioComponent
  ],
  exports: [MenuLateralComponent],
  imports: [
    CommonModule
  ]
})
export class MenuLateralModule { }
