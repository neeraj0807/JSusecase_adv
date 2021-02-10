var body = document.getElementById("body");

//Create heading
var heading = document.createElement('h1');
var headingText = document.createTextNode('Users List');
body.appendChild(heading).appendChild(headingText);

//Create link
var aTag = document.createElement('a');
aTag.setAttribute('href',"form.html");
aTag.innerText = "Add User";
body.appendChild(aTag);

//Fetch user data
const url = 'http://localhost:8090/users';

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

//Create table to dispaly user data
function tableCreate(data) {
    var tbl = document.createElement('table');
    tbl.style.width = '90%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    var tr = document.createElement('tr');
    var tr1 = document.createElement('tr');  
    //Heading
    var th = document.createElement('th');
    th.appendChild(document.createTextNode("First Name"));
    var th1 = document.createElement('th');
    th1.appendChild(document.createTextNode("Last Name"));
    var th2 = document.createElement('th');
    th2.appendChild(document.createTextNode("SAP ID"));
    var th3 = document.createElement('th');
    th3.appendChild(document.createTextNode("Email"));
    var th4 = document.createElement('th');
    th4.appendChild(document.createTextNode("Contact Number"));
    var th5 = document.createElement('th');
    th5.appendChild(document.createTextNode("Location"));
    var th6 = document.createElement('th');
    th6.appendChild(document.createTextNode("Gender"));
    var th7 = document.createElement('th');
    th7.appendChild(document.createTextNode(""));

    tr1.appendChild(th);
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    tr1.appendChild(th6);
    tr1.appendChild(th7);
    tbdy.appendChild(tr1);

    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        //User data
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data[i].firstName));
        var td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(data[i].lastName));
        var td2 = document.createElement('td');
        td2.appendChild(document.createTextNode(data[i].sapId));
        var td3 = document.createElement('td');
        td3.appendChild(document.createTextNode(data[i].email));
        var td4 = document.createElement('td');
        td4.appendChild(document.createTextNode(data[i].contactNumber));
        var td5 = document.createElement('td');
        td5.appendChild(document.createTextNode(data[i].location));
        var td6 = document.createElement('td');
        td6.appendChild(document.createTextNode(data[i].gender));
        var td7 = document.createElement('td');

        //Delete user
        var deleteButton = document.createElement("input"); 
        deleteButton.setAttribute("type", "button"); 
        deleteButton.setAttribute("value", "Delete");
        deleteButton.setAttribute("id", data[i].id);
        deleteButton.setAttribute("data-uid", data[i].id); 
        deleteButton.addEventListener("click", handelDelete);
        td7.appendChild(deleteButton);

        //Update user
        var editButton = document.createElement("input"); 
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
    var msg = confirm("Do you really want to delete?");
    var uid = this.id;
    if (msg === true && uid != null) {
        fetch('http://localhost:8090/users/'+uid, {
            method: 'DELETE',
        }).then(function (response) {
            if (response.ok) {
                console.log(response.json());
                alert("User Deleted Successfully!!");
                window.location.href="index.html";
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
    var uid = this.id;
    window.location.href="form.html?uid="+uid;
}
