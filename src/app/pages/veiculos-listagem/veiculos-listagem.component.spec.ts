import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosListagemComponent } from './veiculos-listagem.component';

describe('VeiculosListagemComponent', () => {
  let component: VeiculosListagemComponent;
  let fixture: ComponentFixture<VeiculosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
