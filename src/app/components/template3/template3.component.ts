import * as angular from 'angular';

export class Template3Controller {

  /** @ngInject */
  constructor(
    private $stateParams: any
  ) {}


  $onInit() { }

}

export const template3: angular.IComponentOptions = {
  template: require('./template3.component.html'),
  controller: Template3Controller,
  controllerAs: 'vm'
};
