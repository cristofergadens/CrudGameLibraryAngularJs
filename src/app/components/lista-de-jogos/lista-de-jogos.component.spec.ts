import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeJogosComponent } from './lista-de-jogos.component';

describe('ListaDeJogosComponent', () => {
  let component: ListaDeJogosComponent;
  let fixture: ComponentFixture<ListaDeJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeJogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
