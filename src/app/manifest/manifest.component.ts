import { Component, OnInit } from '@angular/core';
import { Manifest } from '../mock-data';
import { Freight } from '../freight';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.css']
})
export class ManifestComponent implements OnInit {

  loader: boolean;

  // freight: Freight = {
  //     pkgDestination: 'btc',
  //     pkgTrackingId: '12345',
  //     pkgHeight: '',
  //     pkgWidth: '',
  //     pkgLength: '',
  //     pkgWeight: '',
  //     pkgInsured: false,
  //     pkgTwoDay: false,
  //     pkgHazMat: false,
  //     pkgWkndDlvry: true,
  //     pkgProcDate: '11:04:2019:22:43:55:19',
  //     pkgETA: '11:09:2019:12:00:00:00',
  //     pkgAirFrgt: true,
  //   };

  manifest = Manifest;
  selectedPkg: Freight;

  constructor() { }

  ngOnInit() {
  }

}
