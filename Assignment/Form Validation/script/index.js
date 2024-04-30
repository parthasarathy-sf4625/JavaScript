function displayOutput() {
    var name = getElementById("firstname").value;
    name = name + " " + getElementById("lastname").value;

    var mail = getElementById("mail").value;

    var phone = getElementById("phone").value;

    var password = getElementById("password").value;

    var male = getElementById("male");
    var female = getElementById("female");
    var other = getElementById("other");
    var gender;
    if (male.checked == true) {
        gender = "Male";
    }
    else if (female.checked == true) {
        gender = "Female";
    }
    else {
        gender = "Not wish to Disclose";
    }

    var Address = getElementById("address");
    var date = getElementById("dob");
    var time = getElementById("time");

    //var languages = 

}


// document.getElementById("form").style.display="none";
// document.getElementById("output").style.display="block";  