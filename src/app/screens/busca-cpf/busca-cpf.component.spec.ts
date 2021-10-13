import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCpfComponent } from './busca-cpf.component';

describe('BuscaCpfComponent', () => {
  let component: BuscaCpfComponent;
  let fixture: ComponentFixture<BuscaCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaCpfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
