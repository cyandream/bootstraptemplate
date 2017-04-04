import * as angular from 'angular';

import { template1 } from './template1/template1.component';
export const assetsModule = 'assetsModule';

angular
  .module(assetsModule, [])
  .component('template1', template1)
