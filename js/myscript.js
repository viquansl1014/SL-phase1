
//create x button 
var unorderedList = document.getElementById("posts-list");
    if (unorderedList!=null){
        var list = unorderedList.getElementsByTagName("li");

    //console.log(list.length);
    for (i=0; i<list.length; i++){
        var span  =document.createElement('span');
        var x = document.createTextNode('\u00D7');
        span.appendChild(x);
        span.className = 'close';
        list[i].appendChild(span);
    }

    // add functionality
    var close = document.getElementsByClassName('close');
    for (i=0; i< close.length; i++){
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'None';
        }
    }
}

function newPost(){
    var inputValue = document.getElementById("post-input").value;
    var postTitle = document.getElementById("post-title").value;

    // create element
    var title = document.createTextNode(postTitle);
    var header = document.createElement('h2');
    header.appendChild(title);
    header.className = 'display-4';

    var text = document.createTextNode(inputValue);

    var container = document.createElement('div');
    container.className = 'blog-post';
    container.appendChild(header);
    container.appendChild(text);

    var li = document.createElement('li');
    li.appendChild(container);

    if(inputValue === ''){
        alert('You must write something..');
    }else if (postTitle ===''){
        alert('Please enter title..');
    }else{
        var postList = document.getElementById('posts-list');
        postList.appendChild(li);
        document.getElementById('post-input').value = '';
        document.getElementById('post-title').value = '';

        var span  =document.createElement('span');
        var x = document.createTextNode('\u00D7');
        span.appendChild(x);
        span.className = 'close';

        li.appendChild(span);

        // close post function 
        var close = document.getElementsByClassName('close');
        for (i=0; i< close.length; i++){
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = 'None';
            }
        }

    }

}

//something.js

function printError(id, message) {
    var name = document.getElementById(id);
    name.innerHTML = message;
}

function validateField(field, fieldErr, regex) {
    var f = document.getElementsByName(field);
    //console.log(field);

    if (f[0].value === "") {
        printError(fieldErr, "Error: Empty " + field + ".");
        //alert("false");
        return false;
    }
    else if (regex.test(f[0].value) == false) {
        printError(fieldErr, "Error: Invalid " + field + ".");
        //alert("false");
        return false;
    }
    else {
        printError(fieldErr, "");
        //alert("true");
        return true;
    }
}


//Backend Functions
function validateName() {
    var regex = /^[a-zA-Z/s]+$/;
    return validateField("name", "nameErr", regex);
}

function validateEmail() {
    var regex = /^\S+@\S+\.\S+$/;
    return validateField("email", "emailErr", regex);
}

function validatePhone() {
    var regex = /[0-9]{10}/;
    return validateField("mobile", "mobileErr", regex);
}

function validateCountry() {
    var field = document.getElementsByName("country");

    if (field[0].value == "Select") {
        printError("countryErr", "Error: Invalid country.");
        return false;
    }
    else {
        printError("countryErr", "");
        return true;
    }
}

function validateGender() {
    var field = document.getElementsByName("gender");

    if (field[0].value === "") {
        printError("genderErr", "Error: Gender not chosen.");
        return false;
    }
    else {
        printError("genderErr", "");
        return true;
    }
}
function validateMessage() {
    var regex = /^[a-zA-Z/s]+$/;
    return validateField("message", "messageErr", regex);
}

//Actual function being called
function validateForm() {

    var submit = document.getElementById("submit");
    submit.disabled = true;

    //Validation array
    var valArray = new Array(5);
    valArray[0] = validateName();
    valArray[1] = validateEmail();
    valArray[2] = validatePhone();
    valArray[3] = validateCountry();
    //valArray[4] = validateGender();
    valArray[4] = validateMessage();

    for (var i = 0; i < valArray.length; i++) {
        if (valArray[i] == false) {
            return false;
        }
    }

    submit.disabled = false;
    return true; //if all conditions are successful
}

function submitFeedback(){
    if (validateForm()){
        alert('message submitted');
    }
}