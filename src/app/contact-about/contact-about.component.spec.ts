import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAboutComponent } from './contact-about.component';

describe('ContactAboutComponent', () => {
  let component: ContactAboutComponent;
  let fixture: ComponentFixture<ContactAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
