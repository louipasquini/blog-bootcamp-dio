import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoListaComponent } from './conteudo-lista.component';

describe('ConteudoListaComponent', () => {
  let component: ConteudoListaComponent;
  let fixture: ComponentFixture<ConteudoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
