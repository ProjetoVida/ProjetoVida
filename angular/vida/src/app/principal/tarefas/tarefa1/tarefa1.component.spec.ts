import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarefa1Component } from './tarefa1.component';

describe('Tarefa1Component', () => {
  let component: Tarefa1Component;
  let fixture: ComponentFixture<Tarefa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tarefa1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarefa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
