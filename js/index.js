import { USER_ADD_FORM_TEXT, USER_ADD_FORM_URL, HOME_PAGE_SUB_HEADING } from './constants.js';
import { createPageHeading, createPageSubHeading, userList } from './functions.js';

let body = document.getElementById("body");

//creating heading
createPageHeading();

//Create sub heading
createPageSubHeading(HOME_PAGE_SUB_HEADING);

//Create link
let aTag = document.createElement('a');
aTag.setAttribute('href',`${USER_ADD_FORM_URL}`);
aTag.innerText = USER_ADD_FORM_TEXT;
body.appendChild(aTag);

//Fetch user data
userList();
