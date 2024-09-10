import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBoardComponent } from './dynamic-board.component';

describe('DynamicBoardComponent', () => {
  let component: DynamicBoardComponent;
  let fixture: ComponentFixture<DynamicBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
