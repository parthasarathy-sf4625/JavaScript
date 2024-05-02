function validate(){
     it = document.getElementById("it");
     nonit = document.getElementById("nonit");
     category ;
    if(it.selected){
        category=it.value;
    }
    else{
        category=nonit.value;
    }

     book = document.getElementById("book").value;

     authoremail = document.getElementById("authoremail").value;

     authorname = document.getElementById("authorname").value;

     published = document.getElementById("published").value;

     price = document.getElementById("price").value;

    showDetails();
    return false;
}   

function showDetails(){
    document.getElementById("form").style.display="none";
    document.getElementById("bookdetails").style.display="block";
    document.getElementById("displayheader").innerHTML=book +" Book Details";
    document.getElementById("displayheader").style.fontWeight="bold";

    document.getElementById("categoryinfo").innerHTML=category;
    document.getElementById("bookinfo").innerHTML=book;
    document.getElementById("authoremailinfo").innerHTML=authoremail;
    document.getElementById("authornameinfo").innerHTML=authorname;
    document.getElementById("publishedinfo").innerHTML=published;
    document.getElementById("priceinfo").innerHTML=price;
    
}

