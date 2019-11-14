import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Manifest } from '../mock-data';
import { Freight } from '../freight';
import { Pipe, PipeTransform } from '@angular/core';
import { ManifestComponent, prepDate } from './manifest.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalService } from '../_services/modal.service';
import { ModalComponent } from '../modal/modal.component';
import {  ElementRef, Input, OnDestroy } from '@angular/core';

describe('ManifestComponent', () => {
  let component: ManifestComponent;
  let fixture: ComponentFixture<ManifestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  imports: [ FormsModule, NgbModule, NgxPaginationModule ],
      declarations: [ ManifestComponent, prepDate, ModalComponent ],
	  providers: [ ModalService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
