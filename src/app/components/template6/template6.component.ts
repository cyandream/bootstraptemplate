import * as angular from 'angular';

export class Template6Controller {

  /** @ngInject */
  constructor(
    private $stateParams: any
  ) {}


  $onInit() { }

}

export const template6: angular.IComponentOptions = {
  template: require('./template6.component.html'),
  controller: Template6Controller,
  controllerAs: 'vm'
};
