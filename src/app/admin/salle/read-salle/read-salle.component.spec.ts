import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSalleComponent } from './read-salle.component';

describe('ReadSalleComponent', () => {
  let component: ReadSalleComponent;
  let fixture: ComponentFixture<ReadSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadSalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
