import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Manifest } from '../mock-data';
import { Freight } from '../freight';
import { Pipe, PipeTransform } from '@angular/core';


var moment = require('moment');

@Pipe({name: 'prepDate'})
export class prepDate implements PipeTransform {
  transform(value: string): string {
    if(value.split(' ')[0].split('-').slice(-1)[0].length == 4)
	{
		var yy = value.split(' ')[0].split('-').slice(-1)[0];
		var mm = value.split(' ')[0].split('-')[0];
		var dd = value.split(' ')[0].split('-')[1];
		var tt = value.split(' ')[1];
		return moment(value, "MM-DD-YYYY HH:mm").toString();
	}
	else
    return new Date(Date.parse(value)).toString();
  }
}
const mockgroups = ['AAA-ParameterGroupName', 'BBB-ParameterGroupName', 'CCC-ParameterGroupName', 'DDD-ParameterGroupName'];

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.css'],
})
export class ManifestComponent implements OnInit {

  loader: boolean;
  config: any;
  model: any;

   // should be set by filtering controls

  manifest = Manifest;
  selectedPkg: Freight;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? mockgroups
        : mockgroups.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  constructor() {
    this.config = {
      itemsPerPage: 14,
      currentPage: 1,
      totalItems: this.manifest.length
    };
  }

  ngOnInit() {
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  functionCall() {
    console.log('it are works');
  }

}
