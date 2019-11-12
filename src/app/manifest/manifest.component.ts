import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Manifest } from '../mock-data';
import { Freight } from '../freight';

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
      itemsPerPage: 5,
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
