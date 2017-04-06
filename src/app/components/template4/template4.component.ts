import * as angular from 'angular';

export class Template4Controller {

  /** @ngInject */
  constructor(
    private $stateParams: any
  ) {}


  $onInit() { }

}

export const template4: angular.IComponentOptions = {
  template: require('./template4.component.html'),
  controller: Template4Controller,
  controllerAs: 'vm'
};
