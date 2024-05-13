import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEnsComponent } from './read-ens.component';

describe('ReadEnsComponent', () => {
  let component: ReadEnsComponent;
  let fixture: ComponentFixture<ReadEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadEnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
