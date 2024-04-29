// var Mobile = {
//     mobileName :"Samsung",
//     mobileModel:"A55",
//     price:30000,

//     display : function()
//     {
//         document.writeln(this.mobileName+" "+this.mobileModel+" "+this.price);
//     }
// }

function Mobiles(mobileName,mobileModel,price)
{
    this.mobileName = mobileName;
    this.mobileModel = mobileModel;
    this.price = price;

     this.display = function()
     {
        document.writeln(this.mobileName+" "+this.mobileModel+" "+this.price);
    }
}

var m1 = new Mobiles("Samsung","A55",30000);
m1.display();
//m1.display();   