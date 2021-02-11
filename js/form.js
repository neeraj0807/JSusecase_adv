import { USER_ADD_FORM_TEXT, HOME_PAGE_URL, HOME_PAGE_TEXT } from './constants.js';
import { createPageHeading, createPageSubHeading, createForm, getUserById } from './functions.js';

let body = document.getElementById("body");

//creating heading
createPageHeading();

//Create sub heading
createPageSubHeading(USER_ADD_FORM_TEXT);

//create link
let aTag = document.createElement('a');
aTag.setAttribute('href', HOME_PAGE_URL);
aTag.innerText = HOME_PAGE_TEXT;
body.appendChild(aTag);

//create user add form
createForm();

//get user by user id to edit 
getUserById();