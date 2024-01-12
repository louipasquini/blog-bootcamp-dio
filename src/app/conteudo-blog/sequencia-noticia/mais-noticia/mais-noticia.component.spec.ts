import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisNoticiaComponent } from './mais-noticia.component';

describe('MaisNoticiaComponent', () => {
  let component: MaisNoticiaComponent;
  let fixture: ComponentFixture<MaisNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
