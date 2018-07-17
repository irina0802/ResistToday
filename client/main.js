import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var aboutCssTitle = "fontSize:40px; margin:50px;"

Template.navBar.events({
  'click #about': function(event, template){
  	event.preventDefault();
  	document.querySelector('#title').innerHTML = "About";
  	document.querySelector('main').style.background = "lightpink";
  	document.querySelector('main').style.opacity = 1;
  	document.querySelector('#title').style.cssText = aboutCssTitle;
  }
});


