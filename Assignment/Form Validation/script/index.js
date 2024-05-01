function validate1() {

    var rowCount = 2;
    var firstname = checkFirstName();
    var lastName = checkLastName();
    var mail = checkmail();
    var phone = checkphone();
    var gender = checkGender();
    var address = checkAddress();
    var dob = checkDOB();
    var time = checkTime();
    var languages = checkLanguages();
    var interests = checkInterest();
    var table = document.getElementById("data");


    AddRow("FirstName", firstname.value);
    AddRow("LastName", lastName.value);
    AddRow("MailID", mail.value);
    AddRow("Phone", phone.value);
    AddRow("Gender", gender);
    AddRow("Address", address.value);
    AddRow("Date of Birth", dob.value);
    AddRow("Time", time.value);
    AddMultipleData("Languages", languages);
    AddMultipleData("Interests", interests);
    function AddMultipleData(section, userDetail) {
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var result = "";
        cell1.innerHTML = section;
        for (var i = 0; i < userDetail.length; i++) {
            result = result + userDetail[i].value + "<br>";
        }
        cell2.innerHTML = result;
        rowCount++;
    }
    function AddRow(section, userDetail) {
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = section;
        cell2.innerHTML = userDetail;
        rowCount++;
    }


    document.getElementById("form-heading").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("data").style.display = "block";

    return false;

}
function checkFirstName() {
    var firstname = document.getElementById("firstname");
    if (firstname.value == "") {
        firstname.style.border = "2px solid red";
        document.getElementsByClassName("invalid")[0].style.visibility = "visible";
        return false;
    }
    else {
        firstname.style.border = "2px solid black";
        document.getElementsByClassName("invalid")[0].style.visibility = "hidden";
        return firstname;
    }
}

function checkLastName() {
    var lastName = document.getElementById("lname");
    if (lastName.value == "") {
        lastName.style.border = "2px solid red";
        document.getElementsByClassName("invalid")[1].style.visibility = "visible";
        return false;
    }
    else {
        lastName.style.border = "2px solid black"

        document.getElementsByClassName("invalid")[1].style.visibility = "hidden";
        return lastName;
    }
}

function checkmail() {
    var mail = document.getElementById("email");
    var regx_mail = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (regx_mail.test(mail.value)) {
        mail.style.border = "2px solid black"
        document.getElementsByClassName("invalid")[2].style.visibility = "hidden";
        return mail;
    }
    else {
        mail.style.border = "2px solid red"
        document.getElementsByClassName("invalid")[2].style.visibility = "visible";
        return false;
    }
}

function checkphone() {
    var phone = document.getElementById("mobile");
    var regx_mobile = /^[5-9]\d{9}$/;
    if (regx_mobile.test(phone.value)) {
        phone.style.border= "2px solid black";
        document.getElementsByClassName("invalid")[3].style.visibility = "hidden";
        return phone;
    }
    else {
        phone.style.border = "2px solid red"
        document.getElementsByClassName("invalid")[3].style.visibility = "visible";
        return false;
    }
}

function checkGender() {
    var rad1 = document.getElementById("male");
    var rad2 = document.getElementById("female");
    var rad3 = document.getElementById("na");
    if (rad1.checked) {
        return rad1.value;
    }
    else if (rad2.checked) {
        return rad2.value;
    }
    else if (rad3.checked) {
        return rad3.value;
    }
    else {
        document.getElementsByClassName("invalid")[4].style.visibility = "visible";
        return false;
    }
}

function checkAddress() {
    var address = document.getElementById("address");
    if (address.value == "") {
        address.style.border = "2px solid red";
        document.getElementsByClassName("invalid")[5].style.visibility = "visible";
        return false;
    }
    else {
        document.getElementsByClassName("invalid")[5].style.visibility = "hidden";
        return address;
    }
}

function checkDOB() {
    var dob = document.getElementById("dob");
    if (dob.value == "") {
        dob.style.border = "2px solid red";
        document.getElementsByClassName("invalid")[6].style.visibility = "visible";
        return false;
    }
    else {
        document.getElementsByClassName("invalid")[6].style.visibility = "hidden";
        return dob;
    }
}

function checkTime() {
    var time = document.getElementById("time");
    if (time.value == "") {
        time.style.border = "2px solid red";
        document.getElementsByClassName("invalid")[7].style.visibility = "visible";
        return false;
    }
    else {
        document.getElementsByClassName("invalid")[7].style.visibility = "hidden";
        return time;
    }
}

function checkLanguages() {
    var tamil = document.getElementById("tamil");
    var english = document.getElementById("english");
    var french = document.getElementById("french");
    var seletedLanguages = [];


    if (tamil.checked) {
        seletedLanguages.push(tamil);
        flag = true;
    }
    if (english.checked) {
        seletedLanguages.push(english);
        flag = true;
    }
    if (french.checked) {
        seletedLanguages.push(french);
        flag = true;
    }

    return seletedLanguages;
}

function checkInterest() {
    var interest = document.getElementById("interest");
    var seletedInterests = [];
    for (var i = 0; i < interest.length; i++) {
        if (interest[i].selected) {
            seletedInterests.push(interest[i]);
        }
    }
    return seletedInterests;
} 