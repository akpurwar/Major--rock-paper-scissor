import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRankersComponent } from './top-rankers.component';

describe('TopRankersComponent', () => {
  let component: TopRankersComponent;
  let fixture: ComponentFixture<TopRankersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRankersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRankersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
