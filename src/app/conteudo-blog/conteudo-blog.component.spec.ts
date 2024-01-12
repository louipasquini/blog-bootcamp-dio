import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoBlogComponent } from './conteudo-blog.component';

describe('ConteudoBlogComponent', () => {
  let component: ConteudoBlogComponent;
  let fixture: ComponentFixture<ConteudoBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
