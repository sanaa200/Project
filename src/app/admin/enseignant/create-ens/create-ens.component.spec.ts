import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnsComponent } from './create-ens.component';

describe('CreateEnsComponent', () => {
  let component: CreateEnsComponent;
  let fixture: ComponentFixture<CreateEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
