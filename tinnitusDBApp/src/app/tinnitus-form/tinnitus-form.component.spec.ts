import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinnitusFormComponent } from './tinnitus-form.component';

describe('TinnitusFormComponent', () => {
  let component: TinnitusFormComponent;
  let fixture: ComponentFixture<TinnitusFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinnitusFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinnitusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
