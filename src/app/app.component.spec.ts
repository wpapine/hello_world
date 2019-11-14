import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManifestComponent, prepDate } from './manifest/manifest.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalService } from './_services/modal.service';
import { ModalComponent } from './modal/modal.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,   
		NgxPaginationModule,
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		NgbModule
      ],
      declarations: [
        AppComponent,
		ManifestComponent,
	    prepDate,
		ModalComponent
      ],
	  providers: [ ModalService ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Parameter Service'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Parameter Service');
  });

});
