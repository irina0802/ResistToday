import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.navBar.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     location.href='find.html';
//   },
// });

Template.navBar.events({
  'click #myButton': function(event, template) {
    event.preventDefault();  
    Router.go('anotherpath');
  }
});

Router.map(function() {
  this.route('anotherpath', {
    path: 'about.html',

    layoutTemplate: 'myLayout',

    controller: myController
  });
});

