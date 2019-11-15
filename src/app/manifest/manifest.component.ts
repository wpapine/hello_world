import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Manifest } from '../mock-data';
import { Freight } from '../freight';
import { Pipe, PipeTransform } from '@angular/core';
import { ParametersService } from '../manifest/parameters.service';
import { ModalService } from '../_services/modal.service';
import { ModalComponent } from '../modal/modal.component';

import * as moment from 'moment';

@Pipe({name: 'prepDate'})
export class PrepDate implements PipeTransform {
  transform(value: string): string {
    if (value.split(' ')[0].split('-').slice(-1)[0].length === 4) {
      return moment(value, 'MM-DD-YYYY HH:mm').toString();
    }
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

  constructor(private modalService: ModalService, private paramsService: ParametersService) {
    this.config = {
      itemsPerPage: 14,
      currentPage: 1,
      totalItems: this.manifest.length
    };
  }

  ngOnInit() {
    // when the component is called / loaded it will call the service to obtain groups by role
    // TODO: still need to confirm a few details then will use the response data to populate the drop down
    // per discussion / goal for test component
    this.getGroups();
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  functionCall() {
    console.log('it are works');
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  getGroups(): void {
    this.paramsService.getGroupsByRole({/* JWT */})
      .subscribe(() => {
        // do stuff with response using next built in
      });
  }
}
