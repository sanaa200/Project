import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadModuleComponent } from './read-module.component';

describe('ReadModuleComponent', () => {
  let component: ReadModuleComponent;
  let fixture: ComponentFixture<ReadModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
