/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultilineChartComponent } from './multiline-chart.component';

describe('MultilineChartComponent', () => {
  let component: MultilineChartComponent;
  let fixture: ComponentFixture<MultilineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
