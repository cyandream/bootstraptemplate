import 'tether';

import * as angular from 'angular';
import 'angular-messages';
import 'angular-ui-grid';
import 'angular-nl2br-filter';
import 'angular-translate';
import 'angular-translate-interpolation-messageformat';
import 'angular-sanitize';
import 'angular-translate-loader-url';
import 'angular-utils-pagination';
import 'angular-base64';
import 'ngstorage';
import 'angular-bootstrap-datetimepicker';
import 'angular-date-time-input';
import 'bootstrap';
import * as moment from 'moment';

import {template1} from './app/components/template1/template1.component';
import {template2} from './app/components/template2/template2.component';

import 'angular-ui-router';
import routesConfig from './routes';

import {header} from './app/components/shared/header';
import {footer} from './app/components/shared/footer';


import './css/main.scss';

angular
  .module('app', [
    'angularUtils.directives.dirPagination',
    'ui.router',
    'ui.grid',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ngMessages',
    'ngSanitize',
    'pascalprecht.translate',
    'nl2br-filter',
    'ui.bootstrap.datetimepicker',
  ])
  .config(routesConfig)
  .component('template1', template1)
  .component('template2', template2)
  .component('smartHeader', header)
  .component('smartFooter', footer);

