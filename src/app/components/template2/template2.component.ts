import * as angular from 'angular';

export class Template2Controller {

  /** @ngInject */
  constructor(
    private $stateParams: any
  ) {}


  $onInit() { }

}

export const template2: angular.IComponentOptions = {
  template: require('./template2.component.html'),
  controller: Template2Controller,
  controllerAs: 'vm'
};
