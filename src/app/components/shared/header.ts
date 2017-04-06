import * as angular from 'angular';


class HeaderController {
  public logoSrc: string = '.svg';
  public logoSrcLong: string = '.svg';
  public companyName: string = '';
  public companyLogo: string = '';
  public userHasMultipleCompanies: boolean = false;
  public companyLoaded: boolean = false;
  public route: string;

  /** @ngInject */
  constructor(
    private $scope: any,
    private $state: angular.ui.IStateService,
    private $rootScope: angular.IRootScopeService,
    private $window: angular.IWindowService


  ) {}

  $onInit = () => {


    // // On Window resize,check for $sm-break point, remove bootstrap class
    // this.$window.addEventListener('resize', function () {
    //   if (window.innerWidth > 544) {
    //     let elementNavbar: HTMLElement = document.getElementById('collapse-nav-content');
    //     $(elementNavbar).removeClass('in');
    //     let elementManageMenu: HTMLElement = document.getElementById('manage-menu');
    //     $(elementManageMenu).removeClass('open');
    //      let elementLoginMenu: HTMLElement = document.getElementById('login-container');
    //     $(elementLoginMenu).removeClass('open');
    //   }
    // });
  }

  gotoPage(route: string) {
    this.$state.go(route, {pageNumber: 1});
  }

  gotoTemplate1() {
    console.log('in template 1');
    this.$state.go('template1');
  }

    gotoTemplate2() {
    console.log('in template 2');
    this.$state.go('template2');
  }
  gotoTemplate3() {
    console.log('in template 3');
    this.$state.go('template3');
  }

  gotoTemplate4() {
    console.log('in template 4');
    this.$state.go('template4');
  }

  gotoTemplate5() {
    console.log('in template 5');
    this.$state.go('template5');
  }

  gotoTemplate6() {
    console.log('in template 6');
    this.$state.go('template6');
  }
  gotoTemplate7() {
    console.log('in template 7');
    this.$state.go('template7');
  }
}

export const header: angular.IComponentOptions = {
  template: require('./header.html'),
  controller: HeaderController,
  controllerAs: 'vm'
};
