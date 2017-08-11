/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LightInsightpatchComponent } from './light-insightpatch.component';

describe('LightInsightpatchComponent', () => {
  let component: LightInsightpatchComponent;
  let fixture: ComponentFixture<LightInsightpatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightInsightpatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightInsightpatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
