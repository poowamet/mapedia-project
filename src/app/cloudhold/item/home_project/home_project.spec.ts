import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home_project } from './home_project';

describe('Home', () => {
  let component: Home_project;
  let fixture: ComponentFixture<Home_project>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home_project]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home_project);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
