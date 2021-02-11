import {MAIN_HEADING, USER_EDIT_FORM_TEXT, BACKEND_URL, USER_DELETE_CONFIRMATION_MESSAGE, USER_DELETE_MESSAGE, USER_ADD_FORM_URL, HOME_PAGE_URL, LOCATION_ARRAY} from './constants.js';

//Create page heading
export function createPageHeading() {
    let heading = document.createElement('h1');
    let headingText = document.createTextNode(`${MAIN_HEADING}`);
    body.appendChild(heading).appendChild(headingText);
}

//Create page sub heading
export function createPageSubHeading(pageSubHeading){
    let subHeading = document.createElement('h3');
    subHeading.id = "headertag";
    let subHeadingText = document.createTextNode(pageSubHeading);
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
    let tbl = document.createElement('table');
    tbl.style.width = '90%';
    tbl.setAttribute('border', '1');
    let tbdy = document.createElement('tbody');
    let tr = document.createElement('tr');
    let tr1 = document.createElement('tr');  
    //Heading
    let th = document.createElement('th');
    th.appendChild(document.createTextNode("First Name"));
    let th1 = document.createElement('th');
    th1.appendChild(document.createTextNode("Last Name"));
    let th2 = document.createElement('th');
    th2.appendChild(document.createTextNode("SAP ID"));
    let th3 = document.createElement('th');
    th3.appendChild(document.createTextNode("Email"));
    let th4 = document.createElement('th');
    th4.appendChild(document.createTextNode("Contact Number"));
    let th5 = document.createElement('th');
    th5.appendChild(document.createTextNode("Location"));
    let th6 = document.createElement('th');
    th6.appendChild(document.createTextNode("Gender"));
    let th7 = document.createElement('th');
    th7.appendChild(document.createTextNode("Actions"));

    tr1.appendChild(th);
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    tr1.appendChild(th6);
    tr1.appendChild(th7);
    tbdy.appendChild(tr1);

    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr');
        //User data
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(data[i].firstName));
        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(data[i].lastName));
        let td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(data[i].sapId));
        let td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(data[i].email));
        let td4 = document.createElement('td');
        td4.appendChild(document.createTextNode(data[i].contactNumber));
        let td5 = document.createElement('td');
        td5.appendChild(document.createTextNode(data[i].location));
        let td6 = document.createElement('td');
        td6.appendChild(document.createTextNode(data[i].gender));
        let td7 = document.createElement('td');

        //Delete user
        let deleteButton = document.createElement("input"); 
        deleteButton.setAttribute("type", "button"); 
        deleteButton.setAttribute("value", "Delete");
        deleteButton.setAttribute("id", data[i].id);
        deleteButton.setAttribute("data-uid", data[i].id); 
        deleteButton.addEventListener("click", handelDelete);
        td7.appendChild(deleteButton);

        //Update user
        let editButton = document.createElement("input"); 
        editButton.setAttribute("type", "button"); 
        editButton.setAttribute("value", "Edit");
        editButton.setAttribute("id", data[i].id);
        editButton.setAttribute("data-uid", data[i].id); 
        editButton.addEventListener("click", handelEdit);
        td7.appendChild(editButton);

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}

//Function to handel delete user
function handelDelete (){
    let msg = confirm(`${USER_DELETE_CONFIRMATION_MESSAGE}`);
    let uid = this.id;
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
    let uid = this.id;
    window.location.href=`${USER_ADD_FORM_URL}?uid=${uid}`;
}

//Create user add form
export function createForm() { 
    let form = document.createElement("form"); 
    form.setAttribute("method", "post"); 
    form.setAttribute("id", "myform_id"); 

    // Create a break line element 
    let br = document.createElement("br");

    // Create an input element for first name 
    let firstNameInput = document.createElement("input"); 
    firstNameInput.setAttribute("type", "text"); 
    firstNameInput.setAttribute("name", "firstName");
    firstNameInput.setAttribute("id", "firstName");
    firstNameInput.setAttribute("class", "formField");
    firstNameInput.setAttribute("value", "");
    firstNameInput.setAttribute("placeholder", "First Name"); 

    // Create an input element for last name 
    let lastNameInput = document.createElement("input"); 
    lastNameInput.setAttribute("type", "text"); 
    lastNameInput.setAttribute("name", "lastName");
    lastNameInput.setAttribute("id", "lastName");
    lastNameInput.setAttribute("class", "formField");
    lastNameInput.setAttribute("value", "");
    lastNameInput.setAttribute("placeholder", "Last Name"); 

    // Create an input element for date of birth 
    let sapIdInput = document.createElement("input"); 
    sapIdInput.setAttribute("type", "text"); 
    sapIdInput.setAttribute("name", "sapId");
    sapIdInput.setAttribute("id", "sapId");
    sapIdInput.setAttribute("class", "formField");
    sapIdInput.setAttribute("value", "");
    sapIdInput.setAttribute("placeholder", "SAP ID"); 

    // Create an input element for email
    let emailIdInput = document.createElement("input"); 
    emailIdInput.setAttribute("type", "text"); 
    emailIdInput.setAttribute("name", "email");
    emailIdInput.setAttribute("id", "email");
    emailIdInput.setAttribute("class", "formField");
    emailIdInput.setAttribute("value", "");
    emailIdInput.setAttribute("placeholder", "E-Mail"); 

    // Create an input element for email
    let contactNumberInput = document.createElement("input"); 
    contactNumberInput.setAttribute("type", "text"); 
    contactNumberInput.setAttribute("name", "contactNumber");
    contactNumberInput.setAttribute("id", "contactNumber");
    contactNumberInput.setAttribute("class", "formField");
    contactNumberInput.setAttribute("value", "");
    contactNumberInput.setAttribute("placeholder", "Contact Number"); 

    // Create an select box for location
    let select = document.createElement("select");
    select.name = "location";
    select.id = "location"
   
    for (const location of LOCATION_ARRAY) {
      let option = document.createElement("option");
      option.value = location;
      option.text = location;
      select.appendChild(option);
    }

    // Create radio button for gender
    let genderLabel = document.createElement("div");
    let genderInput = document.createTextNode('Gender');

    let genderMaleRadioButton = document.createElement("input");
    genderMaleRadioButton.setAttribute("type", "radio");
    genderMaleRadioButton.setAttribute("name", "gender");
    genderMaleRadioButton.setAttribute("id", "Male");
    genderMaleRadioButton.setAttribute("class", "gender");
    genderMaleRadioButton.setAttribute("value", "Male");

    let genderFemaleRadioButton = document.createElement("input");
    genderFemaleRadioButton.setAttribute("type", "radio");
    genderFemaleRadioButton.setAttribute("name", "gender");
    genderFemaleRadioButton.setAttribute("id", "Female");
    genderFemaleRadioButton.setAttribute("class", "gender");
    genderFemaleRadioButton.setAttribute("value", "Female");

    // Create checkbox for language
    let LanguageLabel = document.createElement("div");
    let LanguageText = document.createTextNode('Language');
    let LanguageArray = ["English", "Hindi"];

    let userId = document.createElement("input"); 
    userId.setAttribute("type", "hidden"); 
    userId.setAttribute("name", "uid");
    userId.setAttribute("id", "uid");
    userId.setAttribute("value", "");

    // create a submit button 
    let submitButton = document.createElement("input"); 
    submitButton.setAttribute("type", "button"); 
    submitButton.setAttribute("value", "Submit"); 
    submitButton.addEventListener("click", handelSubmit);

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
    let spanGengerMale = document.createElement("span");
    let labelGenderMale = document.createTextNode("Male");
    form.appendChild(spanGengerMale).appendChild(labelGenderMale);
 
    form.appendChild(genderFemaleRadioButton);
    let spanGengerFemale = document.createElement("span");
    let labelGenderFemale = document.createTextNode("Female");
    form.appendChild(spanGengerFemale).appendChild(labelGenderFemale);
    form.appendChild(br.cloneNode()); 

    // Append language
    form.appendChild(LanguageLabel).appendChild(LanguageText);  
    for (const leng of LanguageArray) {
        let languageName = document.createTextNode(leng);
        let checkBoxInput = document.createElement("input");
        checkBoxInput.type= "checkbox";
        checkBoxInput.name = "language[]";
        checkBoxInput.id = leng;
        checkBoxInput.setAttribute("class", "language");
        checkBoxInput.value = leng;
        form.appendChild(checkBoxInput);
        form.appendChild(languageName);
      }

    form.appendChild(userId);
    form.appendChild(br.cloneNode()); 

    // Append the submit button 
    form.appendChild(submitButton);  
    body.appendChild(form); 
}


//Function to handle submit user form
function handelSubmit (e){
    e.preventDefault();
    const data = {
        "firstName": document.getElementById('firstName').value,
        "lastName": document.getElementById('lastName').value,
        "sapId": document.getElementById('sapId').value,
        "email": document.getElementById('email').value,
        "contactNumber": document.getElementById('contactNumber').value,
        "location": document.getElementById('location').value,
        "gender": document.querySelector('input[name = "gender"]:checked').value,
        "language": languageCheckBox(),
    }

    let hiddenUserId = document.getElementById('uid').value;
    let url = ""; let formMethod = "";
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
    let inputs = document.getElementsByName('language[]');
    let lang = [];
    for(let i = 0, l = inputs.length; i < l; ++i) {
      if(inputs[i].checked) {
        lang.push(inputs[i].value);
      }
    }
    return lang;
}

//Get user by supplying user id
export function getUserById(){
    let url = new URL(window.location.href);
    let search_params = url.searchParams; 
    let uid = search_params.get('uid');

    //Fetch user data
    if(uid != null){
        fetch(`${BACKEND_URL}/users/${uid}`)
        .then(
            (resp) => resp.json())
        .then(function(data) {
            document.getElementById('firstName').value = data.firstName;
            document.getElementById('lastName').value = data.lastName,
            document.getElementById('sapId').value = data.sapId,
            document.getElementById('email').value = data.email,
            document.getElementById('contactNumber').value = data.contactNumber,
            document.getElementById('location').value = data.location,
            document.getElementById(data.gender).checked = true,
            document.getElementById('uid').value = data.id
            document.getElementById("headertag").innerHTML = USER_EDIT_FORM_TEXT;
        })
        .catch(function(error) {
            console.log(error);
            result = error;
        });
    }
}
