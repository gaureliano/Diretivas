import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiveNgswitchComponent } from './diretive-ngswitch.component';

describe('DiretiveNgswitchComponent', () => {
  let component: DiretiveNgswitchComponent;
  let fixture: ComponentFixture<DiretiveNgswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretiveNgswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretiveNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
