import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSeanceComponent } from './read-seance.component';

describe('ReadSeanceComponent', () => {
  let component: ReadSeanceComponent;
  let fixture: ComponentFixture<ReadSeanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadSeanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
