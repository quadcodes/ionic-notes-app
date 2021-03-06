// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
'use strict';

angular.module('starter', ['ionic', 'starter.controllers', 'app.core'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuController',
        controllerAs: 'vm'
      })
      .state('app.create', {
        url: '/create/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/create.html',
            controller: 'CreateController',
            controllerAs: 'vm'
          }
        }
      })
      .state('app.notes', {
        url: '/notes/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/edit.html',
            controller: 'EditController',
            controllerAs: 'vm'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise(function() {
      return '/app/create/' + String(Date.now());
    });
  });
