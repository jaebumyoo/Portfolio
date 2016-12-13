import angular from "angular";
import uiRouter from "angular-ui-router";
import "./stylesheet.css";

import entrHtml from "./templates/entr.html";
import entrCtrl from "./controllers/entrCtrl";

import mainHtml from "./templates/main.html";
import mainCtrl from "./controllers/mainCtrl";

angular.module( "myApp", [ uiRouter ] )
  .config( function( $stateProvider, $urlRouterProvider ) {
    $stateProvider
      .state( 'entrance', {
        controller: entrCtrl,
        url: '/',
        template: entrHtml
      } )
      .state( 'main', {
        controller: mainCtrl,
        url: '/main',
        template: mainHtml
      } );

    $urlRouterProvider.otherwise( '/' );
  }
);
