import { Freight } from './freight';

export const Manifest: Freight[] = [
  { pkgDestination: 'Tampa', pkgTrackingId: '12345', pkgHeight: '', pkgWidth: '',
   pkgLength: '', pkgWeight: '', pkgInsured: false, pkgTwoDay: false, pkgHazMat: false,
   pkgWkndDlvry: true, pkgProcDate: '11:04:2019:22:43:55:19', pkgETA: '11:09:2019:12:00:00:00', pkgAirFrgt: true },
   { pkgDestination: 'Seattle', pkgTrackingId: '54321', pkgHeight: '', pkgWidth: '',
   pkgLength: '', pkgWeight: '', pkgInsured: false, pkgTwoDay: false, pkgHazMat: false,
   pkgWkndDlvry: true, pkgProcDate: '11:10:2019:12:00:59:99', pkgETA: '11:09:2019:12:00:00:00', pkgAirFrgt: true },
];
