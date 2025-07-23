import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cloudhold } from './cloudhold';

describe('Cloudhold', () => {
  let component: Cloudhold;
  let fixture: ComponentFixture<Cloudhold>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cloudhold]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cloudhold);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
