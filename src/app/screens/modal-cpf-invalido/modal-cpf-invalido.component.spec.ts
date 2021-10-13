import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCpfInvalidoComponent } from './modal-cpf-invalido.component';

describe('ModalCpfInvalidoComponent', () => {
  let component: ModalCpfInvalidoComponent;
  let fixture: ComponentFixture<ModalCpfInvalidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCpfInvalidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCpfInvalidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
