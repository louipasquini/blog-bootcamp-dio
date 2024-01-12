import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoInterativoComponent } from './botao-interativo.component';

describe('BotaoInterativoComponent', () => {
  let component: BotaoInterativoComponent;
  let fixture: ComponentFixture<BotaoInterativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoInterativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoInterativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
