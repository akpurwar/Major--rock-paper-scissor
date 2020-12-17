import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogicalThinkingComponent } from './user-logical-thinking.component';

describe('UserLogicalThinkingComponent', () => {
  let component: UserLogicalThinkingComponent;
  let fixture: ComponentFixture<UserLogicalThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLogicalThinkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogicalThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
