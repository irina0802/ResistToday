import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var CssTitle = "font-size:40px; margin:30px;"
var CssWords = "font-size: 16px; margin: 10px 30px;"

Template.body.events({
  'click #about': function(event, template){
  	event.preventDefault();
  	document.querySelector('#title').innerHTML = "About";
  	document.querySelector('main').style.cssText = "background-image: url('fistresist.jpg');"
  	document.querySelector('main').style.opacity = 1;
  	document.querySelector('#title').style.cssText = CssTitle;
  	document.querySelector('#words').innerHTML = "<p>The Team</p> <p>Irina</p> <ul> <li>Irina, a brooklyn native, is 16 years old.</li> <li> She currently attends the prestitges Brooklyn Technical HighSchool on of the 7 specialized highschool.</li> <li> As Irina attends Brooklyn Technical Highschool, she has praticpated two of the walkouts staged to protest the elected officals lack of response to passing effective gun legislation.</li> <li> As the daughter of immigrants Irina also finds it important to fight for the right of those who are trying to migrant to the United States</li> </ul>  <p> Gabby </p><ul> <li>Gabby, a Brooklyn native, is 16 years old.</li><li> She also like Irina attends Brooklyn Technical Highschool</li><li> At Brooklyn Tech, Gabby plays a part in her school's Black student union club, and particpated in both walkout protesting gun violence at her school. Gabby also frequently attends marches and protest such as the March for Our Lives Protest, the Women's March, and the end Family Seperation</li><li> Gabby is a firm believer in voicing her opinions She believes that people given the tools can help give about the change they want to see in this world.</li></ul><p> Gabby </p><ul><li> Gabby, a Brooklyn native, is 15 years old. </li><li> She also attends Brooklyn Tech. </li><li> At Brooklyn Tech, Gabby particpates in the crocheting club. And, she is a really active dancer outside of school.</li><li> Gabby believes that it is time for activist around the world to get together to put a stop to the divisize policies of the Trump campaign.</li> </ul>" 
  	document.querySelector('#words').style.cssText = CssWords;

  },
  'click #find': function(event, template){
  	event.preventDefault();
  	document.querySelector('#title').innerHTML = "Find A Protest Near You";
  	document.querySelector('main').style.background = "white";
  	document.querySelector('#words').innerHTML = "<p>Select a borough:</p> <button id = 'brooklyn'>Brooklyn</button> <button id='bronx'>Bronx</button> <button id='manhattan'>Manhattan</button> <button id='statenisland'>Staten Island</button> <button id='queens'>Queens</button>";
  	document.querySelector('#title').style.cssText = CssTitle;
  	document.querySelector('#words').style.cssText = CssWords;
  	document.querySelector('main').style.opacity = 1;
  },
  'click #brooklyn': function(event,template){
  	event.preventDefault();
  	document.querySelector('#brooklyn').background = blue;
  	document.querySelector('main').style.background ="white";
  }
});

// import '../imports/ui/body.js';



