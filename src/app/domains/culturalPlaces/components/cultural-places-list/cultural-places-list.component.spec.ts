import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalPlacesListComponent } from './cultural-places-list.component';

describe('CulturalPlacesListComponent', () => {
  let component: CulturalPlacesListComponent;
  let fixture: ComponentFixture<CulturalPlacesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalPlacesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CulturalPlacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
