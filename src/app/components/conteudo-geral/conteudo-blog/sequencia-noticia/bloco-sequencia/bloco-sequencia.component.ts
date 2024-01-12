import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bloco-sequencia',
  templateUrl: './bloco-sequencia.component.html',
  styleUrls: ['./bloco-sequencia.component.css']
})
export class BlocoSequenciaComponent implements OnInit {
  @Input() idNoticia:string=''
  @Input() imagemNoticia:string=''
  @Input() tagNoticia:string=''
  

  constructor() { }

  ngOnInit(): void {
  }

}
