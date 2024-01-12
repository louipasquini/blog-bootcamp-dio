import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensNoticiaComponent } from './imagens-noticia.component';

describe('ImagensNoticiaComponent', () => {
  let component: ImagensNoticiaComponent;
  let fixture: ComponentFixture<ImagensNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagensNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagensNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
