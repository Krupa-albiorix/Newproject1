import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrganizationComponent } from './current-organization.component';

describe('CurrentOrganizationComponent', () => {
  let component: CurrentOrganizationComponent;
  let fixture: ComponentFixture<CurrentOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
