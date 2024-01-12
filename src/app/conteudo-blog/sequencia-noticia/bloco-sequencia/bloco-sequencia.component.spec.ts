import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoSequenciaComponent } from './bloco-sequencia.component';

describe('BlocoSequenciaComponent', () => {
  let component: BlocoSequenciaComponent;
  let fixture: ComponentFixture<BlocoSequenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocoSequenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocoSequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
