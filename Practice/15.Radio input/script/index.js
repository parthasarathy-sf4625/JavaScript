function validate()
{
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if(male.checked==true)
    {
        gender = male.value;
        alert(gender);
    }
    else{
        gender = female.value;
        alert(gender);
    }
    var gender ;
}