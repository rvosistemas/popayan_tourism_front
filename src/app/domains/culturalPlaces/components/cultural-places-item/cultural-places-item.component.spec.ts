import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalPlacesItemComponent } from './cultural-places-item.component';

describe('CulturalPlacesItemComponent', () => {
  let component: CulturalPlacesItemComponent;
  let fixture: ComponentFixture<CulturalPlacesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalPlacesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CulturalPlacesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
