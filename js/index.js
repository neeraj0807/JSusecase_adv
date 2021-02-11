import { USER_ADD_FORM_TEXT, USER_ADD_FORM_URL, HOME_PAGE_SUB_HEADING } from './constants.js';
import { createPageHeading, createPageSubHeading, userList } from './functions.js';
import { pageHeadingStyle } from './styles.js';

const body = document.getElementById("body");

//creating heading
createPageHeading();

//Create sub heading
createPageSubHeading(HOME_PAGE_SUB_HEADING);

//Create link
const navDiv = document.createElement('div');
const aTag = document.createElement('a');
aTag.setAttribute('href', USER_ADD_FORM_URL);
aTag.innerText = USER_ADD_FORM_TEXT;
navDiv.appendChild(aTag);
Object.assign(navDiv.style, pageHeadingStyle);
body.appendChild(navDiv);

//Fetch user data
userList();
