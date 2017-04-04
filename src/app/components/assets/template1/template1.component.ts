import * as angular from 'angular';

export class Template1Controller {

  /** @ngInject */
  constructor(
    private $stateParams: any
  ) {}


  $onInit() { }

}

export const template1: angular.IComponentOptions = {
  template: require('./template1.component.html'),
  controller: Template1Controller,
  controllerAs: 'vm'
};