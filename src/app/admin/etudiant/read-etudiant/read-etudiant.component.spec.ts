import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEtudiantComponent } from './read-etudiant.component';

describe('ReadEtudiantComponent', () => {
  let component: ReadEtudiantComponent;
  let fixture: ComponentFixture<ReadEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadEtudiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
