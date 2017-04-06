import * as angular from 'angular';

export class Template5Controller {

  /** @ngInject */
  constructor(
    private $stateParams: any
  ) {}


  $onInit() { }

}

export const template5: angular.IComponentOptions = {
  template: require('./template5.component.html'),
  controller: Template5Controller,
  controllerAs: 'vm'
};
