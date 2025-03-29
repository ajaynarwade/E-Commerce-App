import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedcategoriesComponent } from './todaysDeal';

describe('FeaturedcategoriesComponent', () => {
  let component: FeaturedcategoriesComponent;
  let fixture: ComponentFixture<FeaturedcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedcategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
