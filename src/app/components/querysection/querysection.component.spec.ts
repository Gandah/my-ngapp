import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerysectionComponent } from './querysection.component';

describe('QuerysectionComponent', () => {
  let component: QuerysectionComponent;
  let fixture: ComponentFixture<QuerysectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuerysectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuerysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
