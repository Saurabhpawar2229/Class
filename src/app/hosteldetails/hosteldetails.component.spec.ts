import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HosteldetailsComponent } from './hosteldetails.component';

describe('HosteldetailsComponent', () => {
  let component: HosteldetailsComponent;
  let fixture: ComponentFixture<HosteldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HosteldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HosteldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
