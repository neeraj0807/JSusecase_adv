var body = document.getElementById("body");

//creating heading
var heading = document.createElement('h1');
var headingText = document.createTextNode('User Management');
body.appendChild(heading).appendChild(headingText);

//create link
var aTag = document.createElement('a');
aTag.setAttribute('href',"index.html");
aTag.innerText = "Home";
body.appendChild(aTag);

//create form
// Create a break line element 
var br = document.createElement("br");

function createForm() { 
            
    // Create a form
    var form = document.createElement("form"); 
    form.setAttribute("method", "post"); 
    form.setAttribute("id", "myform_id"); 

    // Create an input element for first name 
    var firstNameInput = document.createElement("input"); 
    firstNameInput.setAttribute("type", "text"); 
    firstNameInput.setAttribute("name", "firstName");
    firstNameInput.setAttribute("id", "firstName");
    firstNameInput.setAttribute("class", "formField");
    firstNameInput.setAttribute("value", "");
    firstNameInput.setAttribute("placeholder", "First Name"); 

    // Create an input element for last name 
    var lastNameInput = document.createElement("input"); 
    lastNameInput.setAttribute("type", "text"); 
    lastNameInput.setAttribute("name", "lastName");
    lastNameInput.setAttribute("id", "lastName");
    lastNameInput.setAttribute("class", "formField");
    lastNameInput.setAttribute("value", "");
    lastNameInput.setAttribute("placeholder", "Last Name"); 

    // Create an input element for date of birth 
    var sapIdInput = document.createElement("input"); 
    sapIdInput.setAttribute("type", "text"); 
    sapIdInput.setAttribute("name", "sapId");
    sapIdInput.setAttribute("id", "sapId");
    sapIdInput.setAttribute("class", "formField");
    sapIdInput.setAttribute("value", "");
    sapIdInput.setAttribute("placeholder", "SAP ID"); 

    // Create an input element for email
    var emailIdInput = document.createElement("input"); 
    emailIdInput.setAttribute("type", "text"); 
    emailIdInput.setAttribute("name", "email");
    emailIdInput.setAttribute("id", "email");
    emailIdInput.setAttribute("class", "formField");
    emailIdInput.setAttribute("value", "");
    emailIdInput.setAttribute("placeholder", "E-Mail"); 

    // Create an input element for email
    var contactNumberInput = document.createElement("input"); 
    contactNumberInput.setAttribute("type", "text"); 
    contactNumberInput.setAttribute("name", "contactNumber");
    contactNumberInput.setAttribute("id", "contactNumber");
    contactNumberInput.setAttribute("class", "formField");
    contactNumberInput.setAttribute("value", "");
    contactNumberInput.setAttribute("placeholder", "Contact Number"); 

    // Create an select box for location
    var locationArray = ["Bangalore", "Mysour", "Noida", "Hyderabad"];
 
    var select = document.createElement("select");
    select.name = "location";
    select.id = "location"
   
    for (const location of locationArray) {
      var option = document.createElement("option");
      option.value = location;
      option.text = location;
      select.appendChild(option);
    }

    // Create radio button for gender
    var genderLabel = document.createElement("div");
    var genderInput = document.createTextNode('Gender');

    var genderMaleRadioButton = document.createElement("input");
    genderMaleRadioButton.setAttribute("type", "radio");
    genderMaleRadioButton.setAttribute("name", "gender");
    genderMaleRadioButton.setAttribute("id", "Male");
    genderMaleRadioButton.setAttribute("class", "gender");
    genderMaleRadioButton.setAttribute("value", "Male");

    var genderFemaleRadioButton = document.createElement("input");
    genderFemaleRadioButton.setAttribute("type", "radio");
    genderFemaleRadioButton.setAttribute("name", "gender");
    genderFemaleRadioButton.setAttribute("id", "Female");
    genderFemaleRadioButton.setAttribute("class", "gender");
    genderFemaleRadioButton.setAttribute("value", "Female");

    // Create checkbox for language
    var LanguageLabel = document.createElement("div");
    var LanguageText = document.createTextNode('Language');
    var LanguageArray = ["English", "Hindi"];

    var userId = document.createElement("input"); 
    userId.setAttribute("type", "hidden"); 
    userId.setAttribute("name", "uid");
    userId.setAttribute("id", "uid");
    userId.setAttribute("value", "");

    // create a submit button 
    var submitButton = document.createElement("input"); 
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
    var spanGengerMale = document.createElement("span");
    var labelGenderMale = document.createTextNode("Male");
    form.appendChild(spanGengerMale).appendChild(labelGenderMale);
 
    form.appendChild(genderFemaleRadioButton);
    var spanGengerFemale = document.createElement("span");
    var labelGenderFemale = document.createTextNode("Female");
    form.appendChild(spanGengerFemale).appendChild(labelGenderFemale);
    form.appendChild(br.cloneNode()); 

    // Append language
    form.appendChild(LanguageLabel).appendChild(LanguageText);  
    for (const leng of LanguageArray) {
        var languageName = document.createTextNode(leng);
        var checkBoxInput = document.createElement("input");
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
    getUserById();
}

//call create form function
createForm();


function languageCheckBox() {
    var inputs = document.getElementsByName('language[]');
    var lang = [];
    for(var i = 0, l = inputs.length; i < l; ++i) {
      if(inputs[i].checked) {
        lang.push(inputs[i].value);
      }
    }
    return lang;
}

//Function to handle submit user form
function handelSubmit (e){
    e.preventDefault();
 
    data = {
        "firstName": document.getElementById('firstName').value,
        "lastName": document.getElementById('lastName').value,
        "sapId": document.getElementById('sapId').value,
        "email": document.getElementById('email').value,
        "contactNumber": document.getElementById('contactNumber').value,
        "location": document.getElementById('location').value,
        "gender": document.querySelector('input[name = "gender"]:checked').value,
        "language": languageCheckBox(),
    }

    var hiddenUserId = document.getElementById('uid').value;
    if(hiddenUserId == ""){
        var URL = 'http://localhost:8090/users';
        var formMethod = "POST";
    }else{
        var URL = 'http://localhost:8090/users/'+hiddenUserId;
        var formMethod = "PUT";
    }

    //Fetch data from backend
	fetch(URL, {
		method: formMethod,
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json'
		}
	}).then(function (response) {
		if (response.ok) {
            //console.log(response.json());
            window.location.href="index.html";
        }
	}).then(function (data) {
        console.log(data);
	}).catch(function (error) {
        console.warn(error);
    });
}

//Get user by supplying user id
function getUserById(){
    var url = new URL(window.location.href);
    var search_params = url.searchParams; 
    var uid = search_params.get('uid');

    //Fetch user data
    if(uid != null){
        var result ='';
        fetch('http://localhost:8090/users/'+uid)
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
            var h3Tag = document.createElement('h3');
            var h3heading = document.createTextNode('Edit User');
            body.appendChild(h3Tag).appendChild(h3heading);
        })
        .catch(function(error) {
            console.log(error);
            result = error;
        });
    }
}

