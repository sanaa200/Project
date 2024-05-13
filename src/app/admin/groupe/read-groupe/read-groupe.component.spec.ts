import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadGroupeComponent } from './read-groupe.component';

describe('ReadGroupeComponent', () => {
  let component: ReadGroupeComponent;
  let fixture: ComponentFixture<ReadGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadGroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
