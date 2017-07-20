/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InsightPatchComponent } from './insight-patch.component';

describe('InsightPatchComponent', () => {
  let component: InsightPatchComponent;
  let fixture: ComponentFixture<InsightPatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightPatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
