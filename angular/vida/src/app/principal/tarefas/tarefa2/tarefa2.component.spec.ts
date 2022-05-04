import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarefa2Component } from './tarefa2.component';

describe('Tarefa2Component', () => {
  let component: Tarefa2Component;
  let fixture: ComponentFixture<Tarefa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tarefa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarefa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
