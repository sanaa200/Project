import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFiliereComponent } from './read-filiere.component';

describe('ReadFiliereComponent', () => {
  let component: ReadFiliereComponent;
  let fixture: ComponentFixture<ReadFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadFiliereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
