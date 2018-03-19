import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineUserPageComponent } from './online-user-page.component';

describe('OnlineUserPageComponent', () => {
  let component: OnlineUserPageComponent;
  let fixture: ComponentFixture<OnlineUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
