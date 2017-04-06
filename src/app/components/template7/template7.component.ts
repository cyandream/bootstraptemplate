import * as angular from 'angular';

export class Template7Controller {

  /** @ngInject */
  constructor(
    private $stateParams: any
  ) {}


  $onInit() { }

}

export const template7: angular.IComponentOptions = {
  template: require('./template7.component.html'),
  controller: Template7Controller,
  controllerAs: 'vm'
};
