var value = [0, 0];
var operation ;
var result ;
var textbox = "";
var flag = 0;
var i = 0;
var val = 0;


function setValue(num) {

    textbox += num;
    val = val * 10 + num;
    value[i] = val;
    document.getElementById("inputbox").value = textbox;
    flag++;

}

function setOperation(ch) {
    operation = ch;
    textbox += ch;
    document.getElementById("inputbox").value = textbox;
    val = 0;
    i++;
}

function Calculate() {
    switch (operation) {
        case '+':
            {
                result = value[0] + value[1];
                value = [0,0];
                value[0]=result;
                i=0;
                break;
            }

        case '-':
            {
                result = value[0] - value[1];
                value = [0,0];
                value[0]=result;
                i=0;
                break;
            }
        case '*':
            {
                result = value[0] * value[1];
                value = [0,0];
                value[0]=result;
                i=0;
                break;
            }
        case '/':
            {
                result = value[0] / value[1];
                value = [0,0];
                value[0]=result;
                i=0;
                break;
            }

        case '%':
            {
                result  = value[0]%value[1];
                value = [0,0];
                value[0]=result;
                i=0;
                break;
            }
    }

    document.getElementById("inputbox").value = result;
}


function Reset() {
    textbox = "";
    document.getElementById("inputbox").value = "";
    value = [0,0];
    i=0
    val=0;
}

