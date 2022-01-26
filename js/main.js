
function mas(){
    var value=parseInt(document.getElementById('num').value, 10);
    value=isNaN(value) ? 0 : value;
    if(value<10){
        value++;
        document.getElementById('num').value=value;
    }
}

function menos(){
    var value=parseInt(document.getElementById('num').value, 10);
    value=isNaN(value) ? 0 : value;
    if(value>1){
        value--;
        document.getElementById('num').value=value;
    }
}

function suma(uno, dos){
    var uno;
    var dos=parseInt(document.getElementById('num').value);

    document.getElementById('prec').innerHTML=uno*dos;
}

function resta(uno){
    var uno;    
    document.getElementById('prec').innerHTML= document.getElementById('prec').innerHTML-uno;
    
}

function reload(){
    location.reload();
}



