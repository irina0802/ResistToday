import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

// var email = prompt("Please enter your email if you would like to sign up.");

// if (person != null) {
//     document.getElementById("demo").innerHTML =
//     "You may be notified at " + email + " when any updates occur";

import './body.html';

Template.body.helpers({
	todos(){
		return Tasks.find({});
	}
})

Template.body.events({
	'submit .new-task'(event) {
		event.preventDefault();

		console.log(template.find('task').value);
	}
});