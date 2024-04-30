function getText() {
    var name = document.getElementById("name").value;
    var pass = document.getElementById("password").value;

    if (name == "Partha") {
        alert("Welcome " + name);
    }

    else {
        alert("Wrong name");
    }
}