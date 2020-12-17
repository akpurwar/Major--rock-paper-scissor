import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBrainTeaserComponent } from './user-brain-teaser.component';

describe('UserBrainTeaserComponent', () => {
  let component: UserBrainTeaserComponent;
  let fixture: ComponentFixture<UserBrainTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBrainTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBrainTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
