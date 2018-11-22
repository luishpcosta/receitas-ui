import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemReceitasComponent } from './listagem-receitas.component';

describe('ListagemReceitasComponent', () => {
  let component: ListagemReceitasComponent;
  let fixture: ComponentFixture<ListagemReceitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemReceitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
