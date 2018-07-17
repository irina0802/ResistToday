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
  'click #about': function(event, template){
  	event.preventDefault();
  	document.querySelector('#title').innerHTML = "About";
  	document.querySelector('main').style.background = "lightpink";
  	document.querySelector('main').style.opacity = 1;
  	document.querySelector('#title').style.fontSize = "20px";
  	document.querySelector('#title').style.margin = "40px"
  }
});


