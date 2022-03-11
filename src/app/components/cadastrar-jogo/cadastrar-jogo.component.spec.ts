import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarJogoComponent } from './cadastrar-jogo.component';

describe('CadastrarJogoComponent', () => {
  let component: CadastrarJogoComponent;
  let fixture: ComponentFixture<CadastrarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
