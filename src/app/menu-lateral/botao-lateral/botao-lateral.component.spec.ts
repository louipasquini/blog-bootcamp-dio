import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoLateralComponent } from './botao-lateral.component';

describe('BotaoLateralComponent', () => {
  let component: BotaoLateralComponent;
  let fixture: ComponentFixture<BotaoLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoLateralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
