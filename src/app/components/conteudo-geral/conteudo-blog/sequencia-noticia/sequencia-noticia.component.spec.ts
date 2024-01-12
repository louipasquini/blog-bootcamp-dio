import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenciaNoticiaComponent } from './sequencia-noticia.component';

describe('SequenciaNoticiaComponent', () => {
  let component: SequenciaNoticiaComponent;
  let fixture: ComponentFixture<SequenciaNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenciaNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequenciaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
