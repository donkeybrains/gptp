import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersOnlinePageComponent } from './members-online-page.component';

describe('TestPageComponent', () => {
  let component: MembersOnlinePageComponent;
  let fixture: ComponentFixture<MembersOnlinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersOnlinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersOnlinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
