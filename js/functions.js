import {MAIN_HEADING, USER_EDIT_FORM_TEXT, BACKEND_URL, USER_DELETE_CONFIRMATION_MESSAGE, USER_DELETE_MESSAGE, USER_ADD_FORM_URL, HOME_PAGE_URL, LOCATIONS, LANGUAGES} from './constants.js';
import { pageHeadingStyle, inputFieldStyle, buttonStyle, radioButtonStyle, fontBold, formStyle, editButtonStyle, deleteButtonStyle } from './styles.js';

//Create page heading
export function createPageHeading() {
    const heading = document.createElement('h1');
    const headingText = document.createTextNode(MAIN_HEADING);
    Object.assign(heading.style, pageHeadingStyle);
    body.appendChild(heading).appendChild(headingText);
}

//Create page sub heading
export function createPageSubHeading(pageSubHeading){
    const subHeading = document.createElement('h3');
    subHeading.id = "subHeader";
    const subHeadingText = document.createTextNode(pageSubHeading);
    Object.assign(subHeading.style, pageHeadingStyle);
    body.appendChild(subHeading).appendChild(subHeadingText);
}

export const userList = () => {
    //Fetch user data
    const url = `${BACKEND_URL}/users`;

    fetch(url)
    .then(
        (resp) => resp.json())
    .then(function(data) {
        console.log(data);
        tableCreate(data)
    })
    .catch(function(error) {
        console.log(error);
    });
}

//Create table to dispaly user data
function tableCreate(data) {
    const tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    const tbdy = document.createElement('tbody');
    const tr = document.createElement('tr');
    const tr1 = document.createElement('tr');  
    //Heading
    const th = document.createElement('th');
    th.appendChild(document.createTextNode("First Name"));
    const th1 = document.createElement('th');
    th1.appendChild(document.createTextNode("Last Name"));
    const th2 = document.createElement('th');
    th2.appendChild(document.createTextNode("SAP ID"));
    const th3 = document.createElement('th');
    th3.appendChild(document.createTextNode("Email"));
    const th4 = document.createElement('th');
    th4.appendChild(document.createTextNode("Contact Number"));
    const th5 = document.createElement('th');
    th5.appendChild(document.createTextNode("Location"));
    const th6 = document.createElement('th');
    th6.appendChild(document.createTextNode("Gender"));
    const th8 = document.createElement('th');
    th8.appendChild(document.createTextNode("Language"));
    const th7 = document.createElement('th');
    th7.appendChild(document.createTextNode("Actions"));

    tr1.appendChild(th);
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    tr1.appendChild(th6);
    tr1.appendChild(th8);
    tr1.appendChild(th7);
    tbdy.appendChild(tr1);

    let dataLength = data.length;
    for (let i = 0; i < dataLength; i++) {
        const tr = document.createElement('tr');
        //User data
        const {firstName, lastName, sapId, email, contactNumber, location, gender, language, id} = data[i];
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(firstName  ?? ""));
        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(lastName ?? ""));
        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(sapId ?? ""));
        let td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(email ?? ""));
        let td4 = document.createElement('td');
        td4.appendChild(document.createTextNode(contactNumber ?? ""));
        let td5 = document.createElement('td');
        td5.appendChild(document.createTextNode(location ?? ""));
        let td6 = document.createElement('td');
        td6.appendChild(document.createTextNode(gender ?? ""));
        let td7 = document.createElement('td');
        let td8 = document.createElement('td');
        td8.appendChild(document.createTextNode(language ?? ""));

        //Update user
        let editButton = document.createElement("input"); 
        editButton.setAttribute("type", "button"); 
        editButton.setAttribute("value", "Edit");
        editButton.setAttribute("id", id ?? 0);
        editButton.setAttribute("data-uid", id ?? 0); 
        editButton.addEventListener("click", handelEdit);
        Object.assign(editButton.style, editButtonStyle);
        td7.appendChild(editButton);

        //Delete user
        let deleteButton = document.createElement("input"); 
        deleteButton.setAttribute("type", "button"); 
        deleteButton.setAttribute("value", "Delete");
        deleteButton.setAttribute("id", id ?? 0);
        deleteButton.setAttribute("data-uid", id ?? 0); 
        deleteButton.addEventListener("click", handelDelete);
        Object.assign(deleteButton.style, deleteButtonStyle);
        td7.appendChild(deleteButton);

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td8);
        tr.appendChild(td7);
        
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}

//Function to handel delete user
function handelDelete (){
    const msg = confirm(`${USER_DELETE_CONFIRMATION_MESSAGE}`);
    let uid = this.id ?? null;
    if (msg === true && uid != null) {
        fetch(`${BACKEND_URL}/users/${uid}`, {
            method: 'DELETE',
        }).then(function (response) {
            if (response.ok) {
                console.log(response.json());
                alert(`${USER_DELETE_MESSAGE}`);
                window.location.href = HOME_PAGE_URL;
            }
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.warn(error);
        });
    }
}

//Function to handel edit a user
function handelEdit (){
    let uid = this.id ?? "";
    window.location.href=`${USER_ADD_FORM_URL}?uid=${uid}`;
}

//Create user add form
export function createForm() {
    const form = document.createElement("form"); 
    form.setAttribute("method", "post"); 
    form.setAttribute("id", "myform_id"); 
    Object.assign(form.style, formStyle);

    // Create a break line element 
    const br = document.createElement("br");

    let messagesDiv = document.createElement("div");
    messagesDiv.setAttribute("id", "errorMessage");
    messagesDiv.setAttribute("class", "errorMessage");
    form.appendChild(messagesDiv); 

    // Create an input element for first name 
    const firstNameInput = document.createElement("input"); 
    firstNameInput.setAttribute("type", "text"); 
    firstNameInput.setAttribute("name", "firstName");
    firstNameInput.setAttribute("id", "firstName");
    firstNameInput.setAttribute("class", "formField");
    firstNameInput.setAttribute("value", "");
    firstNameInput.setAttribute("placeholder", "First Name*");
    Object.assign(firstNameInput.style, inputFieldStyle);

    // Create an input element for last name 
    const lastNameInput = document.createElement("input"); 
    lastNameInput.setAttribute("type", "text"); 
    lastNameInput.setAttribute("name", "lastName");
    lastNameInput.setAttribute("id", "lastName");
    lastNameInput.setAttribute("class", "formField");
    lastNameInput.setAttribute("value", "");
    lastNameInput.setAttribute("placeholder", "Last Name*");
    Object.assign(lastNameInput.style, inputFieldStyle);

    // Create an input element for date of birth 
    const sapIdInput = document.createElement("input"); 
    sapIdInput.setAttribute("type", "text"); 
    sapIdInput.setAttribute("name", "sapId");
    sapIdInput.setAttribute("id", "sapId");
    sapIdInput.setAttribute("class", "formField");
    sapIdInput.setAttribute("value", "");
    sapIdInput.setAttribute("placeholder", "SAP ID*");
    Object.assign(sapIdInput.style, inputFieldStyle);

    // Create an input element for email
    const emailIdInput = document.createElement("input"); 
    emailIdInput.setAttribute("type", "text"); 
    emailIdInput.setAttribute("name", "email");
    emailIdInput.setAttribute("id", "email");
    emailIdInput.setAttribute("class", "formField");
    emailIdInput.setAttribute("value", "");
    emailIdInput.setAttribute("placeholder", "E-Mail*");
    Object.assign(emailIdInput.style, inputFieldStyle);

    // Create an input element for email
    const contactNumberInput = document.createElement("input"); 
    contactNumberInput.setAttribute("type", "text"); 
    contactNumberInput.setAttribute("name", "contactNumber");
    contactNumberInput.setAttribute("id", "contactNumber");
    contactNumberInput.setAttribute("class", "formField");
    contactNumberInput.setAttribute("value", "");
    contactNumberInput.setAttribute("placeholder", "Contact Number*");
    Object.assign(contactNumberInput.style, inputFieldStyle);

    // Create an select box for location
    const select = document.createElement("select");
    select.name = "location";
    select.id = "location"
    Object.assign(select.style, inputFieldStyle);

    LOCATIONS.map((location)=>{
        const option = document.createElement("option");
        option.value = location;
        option.text = location;
        select.appendChild(option);
    }) 
    
    // Create radio button for gender
    let genderLabel = document.createElement("div");
    let genderInput = document.createTextNode('Gender');
    Object.assign(genderLabel.style, fontBold);

    let genderMaleRadioButton = document.createElement("input");
    genderMaleRadioButton.setAttribute("type", "radio");
    genderMaleRadioButton.setAttribute("name", "gender");
    genderMaleRadioButton.setAttribute("id", "Male");
    genderMaleRadioButton.setAttribute("class", "gender");
    genderMaleRadioButton.setAttribute("value", "Male");
    Object.assign(genderMaleRadioButton.style, radioButtonStyle);

    let genderFemaleRadioButton = document.createElement("input");
    genderFemaleRadioButton.setAttribute("type", "radio");
    genderFemaleRadioButton.setAttribute("name", "gender");
    genderFemaleRadioButton.setAttribute("id", "Female");
    genderFemaleRadioButton.setAttribute("class", "gender");
    genderFemaleRadioButton.setAttribute("value", "Female");
    Object.assign(genderFemaleRadioButton.style, radioButtonStyle);

    // Create checkbox for language
    let LanguageLabel = document.createElement("div");
    let LanguageText = document.createTextNode('Language');
    Object.assign(LanguageLabel.style, fontBold);

    let userId = document.createElement("input"); 
    userId.setAttribute("type", "hidden"); 
    userId.setAttribute("name", "uid");
    userId.setAttribute("id", "uid");
    userId.setAttribute("value", "");

    // create a submit button 
    const submitButton = document.createElement("input"); 
    submitButton.setAttribute("type", "button"); 
    submitButton.setAttribute("value", "Submit");
    submitButton.addEventListener("click", handelSubmit);
    Object.assign(submitButton.style, buttonStyle);
    
    // Append the full name input 
    form.appendChild(firstNameInput);  
        
    // Inserting a line break 
    form.appendChild(br.cloneNode());  
    
    // Append the last name 
    form.appendChild(lastNameInput);  
    form.appendChild(br.cloneNode()); 
    
    // Append the SAP id 
    form.appendChild(sapIdInput);  
    form.appendChild(br.cloneNode());  
        
    // Append the emailID
    form.appendChild(emailIdInput);  
    form.appendChild(br.cloneNode());  

    // Append the contact number
    form.appendChild(contactNumberInput);  
    form.appendChild(br.cloneNode());  
                
    // Append the contact number
    form.appendChild(select);  
    form.appendChild(br.cloneNode());  

    // Append the gender
    form.appendChild(genderLabel).appendChild(genderInput);
    form.appendChild(genderMaleRadioButton);  
    const spanGengerMale = document.createElement("span");
    const labelGenderMale = document.createTextNode("Male");
    form.appendChild(spanGengerMale).appendChild(labelGenderMale);
 
    form.appendChild(genderFemaleRadioButton);
    const spanGengerFemale = document.createElement("span");
    const labelGenderFemale = document.createTextNode("Female");
    form.appendChild(spanGengerFemale).appendChild(labelGenderFemale);
    form.appendChild(br.cloneNode()); 

    // Append language
    form.appendChild(LanguageLabel).appendChild(LanguageText);  

    LANGUAGES.map((language)=>{
        const languageName = document.createTextNode(language);
        let checkBoxInput = document.createElement("input");
        checkBoxInput.type= "checkbox";
        checkBoxInput.name = "language[]";
        checkBoxInput.id = language;
        checkBoxInput.setAttribute("class", "language");
        checkBoxInput.value = language;
        Object.assign(checkBoxInput.style, radioButtonStyle);
        form.appendChild(checkBoxInput);
        form.appendChild(languageName);
    })

    form.appendChild(userId);
    form.appendChild(br.cloneNode()); 

    // Append the submit button 
    form.appendChild(submitButton);  
    body.appendChild(form); 
}

//Function to handle submit user form
function handelSubmit (e){
    e.preventDefault();

    const firstName  = document.getElementById('firstName').value.trim() ?? "";
    const lastName = document.getElementById('lastName').value.trim() ?? "";
    const sapId = document.getElementById('sapId').value.trim() ?? "";
    const email = document.getElementById('email').value.trim() ?? "";
    const contactNumber = document.getElementById('contactNumber').value.trim() ?? "";
    const location = document.getElementById('location').value ?? "";
    const gender = document.querySelector('input[name = "gender"]:checked').value ?? "";
    const language = languageCheckBox() ?? [];

    let messages = [];
    if(firstName === "" || firstName === null){
        messages.push("First Name");
    }
    if(lastName == "" || lastName == null){
        messages.push("Last Name");
    }
    if(sapId == "" || sapId == null){
        messages.push("SAP Id");
    }
    if(email == "" || email == null){
        messages.push("Email");
    }
    if(contactNumber == "" || contactNumber == null || isNaN(contactNumber)){
        messages.push("Contact Number");
    }
    if(messages.length > 0){
        errorMessage.innerText = `${messages.join(', ')} Required`;
        errorMessage.style.color = 'red';
        return false;
    }

    const data = { firstName, lastName, sapId, email, contactNumber, location, gender, language }

    const hiddenUserId = document.getElementById('uid').value ?? "";
    let url = ""; let formMethod = "";

    //Set url and method for add or edit user
    if(hiddenUserId == ""){
        url = `${BACKEND_URL}/users`;
        formMethod = "POST";
    }else{
        url = `${BACKEND_URL}/users/${hiddenUserId}`;
        formMethod = "PUT";
    }

    //Fetch data from backend
	fetch(url, {
		method: formMethod,
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json'
		}
	}).then(function (response) {
		if (response.ok) {
            //console.log(response.json());
            window.location.href = HOME_PAGE_URL;
        }
	}).then(function (data) {
        console.log(data);
	}).catch(function (error) {
        console.warn(error);
    });
}

function languageCheckBox() {
    const inputs = document.getElementsByName('language[]');
    const lang = [];
    for(let i = 0, l = inputs.length; i < l; ++i) {
      if(inputs[i].checked) {
        lang.push(inputs[i].value);
      }
    }
    return lang;
}

//Get user by supplying user id
export function getUserById(){
    const url = new URL(window.location.href);
    const search_params = url.searchParams; 
    const uid = search_params.get('uid') ?? null;

    //Fetch user data
    if(uid != null){
        fetch(`${BACKEND_URL}/users/${uid}`)
        .then(
            (resp) => resp.json())
        .then(function(data) {
            const {firstName, lastName, sapId, email, contactNumber, location, gender, language, id} = data;

            document.getElementById('firstName').value = firstName ?? "";
            document.getElementById('lastName').value = lastName ?? "",
            document.getElementById('sapId').value = sapId ?? "",
            document.getElementById('email').value = email ?? "",
            document.getElementById('contactNumber').value = contactNumber ?? "",
            document.getElementById('location').value = location ?? "",
            document.getElementById(gender).checked = true ?? "",
            document.getElementById('uid').value = id ?? ""
            document.getElementById("subHeader").innerHTML = USER_EDIT_FORM_TEXT;
            language.map((lang)=>{
                document.getElementById(lang).checked = true;
            })
        })
        .catch(function(error) {
            console.log(error);
            let result = error;
        });
    }
}
