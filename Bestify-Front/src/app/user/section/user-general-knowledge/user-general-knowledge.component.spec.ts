import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGeneralKnowledgeComponent } from './user-general-knowledge.component';

describe('UserGeneralKnowledgeComponent', () => {
  let component: UserGeneralKnowledgeComponent;
  let fixture: ComponentFixture<UserGeneralKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGeneralKnowledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGeneralKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
