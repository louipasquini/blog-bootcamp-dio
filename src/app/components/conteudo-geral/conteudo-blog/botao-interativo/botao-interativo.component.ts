import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-interativo',
  templateUrl: './botao-interativo.component.html',
  styleUrls: ['./botao-interativo.component.css']
})
export class BotaoInterativoComponent implements OnInit {
  @Input() Enable:string=''
  @Input() Disable:string=''
  @Input() textoBotaoInterativo:string=''
  favorites:number=0
  isFavorite:string=this.Disable
  

  constructor() {  }

  favorite():void {
    if (this.isFavorite === this.Enable) {
      this.isFavorite = this.Disable
      this.favorites -= 1
    } else {
      this.isFavorite = this.Enable
      this.favorites += 1
    }
  }

  ngOnInit(): void {
    this.isFavorite=this.Disable
  }

}
