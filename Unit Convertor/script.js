 function clicklen(){
    document.getElementById("len").click();
 }


//  var res_type,input_value,input_type,res_type;

// var c=document.getElementsByTagName("a")[0];
// c.onclick()=c.style.backgroundColor="red"


function reset(){
    input_value=document.getElementById("input_value");
    res_value=document.getElementById("res_value");
    input_value.value=0;
    res_value.value=0;
    input_value=document.getElementById("input_valu");
    res_value=document.getElementById("res_valu");
    input_value.value=0;
    res_value.value=0;
    input_value=document.getElementById("input_val");
    res_value=document.getElementById("res_val");
    input_value.value=0;
    res_value.value=0;
}

function getlen(){
    input_value=document.getElementById("input_value");
    res_value=document.getElementById("res_value");
    input_type=document.getElementById("get");
    res_type=document.getElementById("set");
    console.log(input_value.value);
    console.log(res_type.value);
    
    if(input_type.value==='meter' && res_type.value==='cm'){
        res_value.value=input_value.value*100;
   
    }
    if(input_type.value==='meter' && res_type.value==='km'){
        res_value.value=input_value.value*1000;
   
    }
    if(input_type.value==='meter' && res_type.value==='foot'){
        res_value.value=input_value.value*3.280839895;
   
    }
    if(input_type.value==='cm' && res_type.value==='meter'){
        res_value.value=input_value.value*0.01;
   
    }
    if(input_type.value==='cm' && res_type.value==='km'){
        res_value.value=input_value.value*0.001;
   
    }
    if(input_type.value==='cm' && res_type.value==='foot'){
        res_value.value=input_value.value*0.3048;
   
    }
    if(input_type.value==='km' && res_type.value==='meter'){
        res_value.value=input_value.value*1000;
   
    }
    if(input_type.value==='km' && res_type.value==='cm'){
        res_value.value=input_value.value*100000;
   
    }
    if(input_type.value==='km' && res_type.value==='foot'){
        res_value.value=input_value.value*3280.84;
   
    }
    if(input_type.value==='foot' && res_type.value==='meter'){
        res_value.value=input_value.value*0.3048;
   
    }
    if(input_type.value==='foot' && res_type.value==='cm'){
        res_value.value=input_value.value*30.48;
   
    }
    if(input_type.value==='foot' && res_type.value==='km'){
        res_value.value=input_value.value*0.0003048;
   
    }
    if(input_type.value===res_type.value){
        res_value.value=input_value.value;
   
    }
}

function setlen(){
    var res_value=document.getElementById("input_value");
    var input_value=document.getElementById("res_value");
    var res_type=document.getElementById("get");
    var input_type=document.getElementById("set");
    console.log(input_value.value);
    console.log(res_type.value);
    
    if(input_type.value==='meter' && res_type.value==='cm'){
        res_value.value=input_value.value*100;
   
    }
    if(input_type.value==='meter' && res_type.value==='km'){
        res_value.value=input_value.value*1000;
   
    }
    if(input_type.value==='meter' && res_type.value==='foot'){
        res_value.value=input_value.value*3.280839895;
   
    }
    if(input_type.value==='cm' && res_type.value==='meter'){
        res_value.value=input_value.value*0.01;
   
    }
    if(input_type.value==='cm' && res_type.value==='km'){
        res_value.value=input_value.value*0.001;
   
    }
    if(input_type.value==='cm' && res_type.value==='foot'){
        res_value.value=input_value.value*0.3048;
   
    }
    if(input_type.value==='km' && res_type.value==='meter'){
        res_value.value=input_value.value*1000;
   
    }
    if(input_type.value==='km' && res_type.value==='cm'){
        res_value.value=input_value.value*100000;
   
    }
    if(input_type.value==='km' && res_type.value==='foot'){
        res_value.value=input_value.value*3280.84;
   
    }
    if(input_type.value==='foot' && res_type.value==='meter'){
        res_value.value=input_value.value*0.3048;
   
    }
    if(input_type.value==='foot' && res_type.value==='cm'){
        res_value.value=input_value.value*30.48;
   
    }
    if(input_type.value==='foot' && res_type.value==='km'){
        res_value.value=input_value.value*0.0003048;
   
    }
    if(input_type.value===res_type.value){
        res_value.value=input_value.value;
   
    }
}



function getweight(){
    var input_value=document.getElementById("input_valu");
    var res_value=document.getElementById("res_valu");
    var input_type=document.getElementById("get1");
    var res_type=document.getElementById("set1");
    console.log(input_type.value);
    console.log(res_value.value);
    // alert("hii")
    
    if(input_type.value==='gram' && res_type.value==='kg'){
        res_value.value=input_value.value*0.001;
   
    }
    if(input_type.value==='gram' && res_type.value==='mtone'){
        res_value.value=input_value.value*0.000001;
   
    }
   
    
    if(input_type.value==='kg' && res_type.value==='gram'){
        res_value.value=input_value.value*1000;
   
    }
    if(input_type.value==='kg' && res_type.value==='mtone'){
        res_value.value=input_value.value*0.001;
   
    }
   
    
    if(input_type.value==='mtone' && res_type.value==='gram'){
        res_value.value=input_value.value*1000000;
   
    }
    if(input_type.value==='mtone' && res_type.value==='kg'){
        res_value.value=input_value.value*1000;
   
    }

}
function setweight(){
    var res_value=document.getElementById("input_valu");
    var input_value=document.getElementById("res_valu");
    var res_type=document.getElementById("get1");
    var input_type=document.getElementById("set1");
    console.log(input_type.value);
    console.log(res_value.value);
    // alert("hii")
    
    if(input_type.value==='gram' && res_type.value==='kg'){
        res_value.value=input_value.value*0.001;
   
    }
    if(input_type.value==='gram' && res_type.value==='mtone'){
        res_value.value=input_value.value*0.000001;
   
    }
   
    
    if(input_type.value==='kg' && res_type.value==='gram'){
        res_value.value=input_value.value*1000;
   
    }
    if(input_type.value==='kg' && res_type.value==='mtone'){
        res_value.value=input_value.value*0.001;
   
    }
   
    
    if(input_type.value==='mtone' && res_type.value==='gram'){
        res_value.value=input_value.value*1000000;
   
    }
    if(input_type.value==='mtone' && res_type.value==='kg'){
        res_value.value=input_value.value*1000;
   
    }
    if(input_type.value===res_type.value){
        res_value.value=input_value.value;
   
    }

}

function gettemp(){
    //celcious to fahrenheight

    input_value=document.getElementById("input_val");
    res_value=document.getElementById("res_val");
    input_type=document.getElementById("get2");
    res_type=document.getElementById("set2");


    if(input_type.value==='celcius' && res_type.value==='fah'){
        res_value.value=(input_value.value*1.8) +32;
   
    }
    if(input_type.value==='fah' && res_type.value==='celcius'){
        res_value.value=(input_value.value-32) * (5/9);
   
    }
    if(input_type.value===res_type.value){
        res_value.value=input_value.value;
   
    }
}
function settemp(){
    //celcious to fahrenheight

    input_value=document.getElementById("input_val");
    res_value=document.getElementById("res_val");
    input_type=document.getElementById("get2");
    res_type=document.getElementById("set2");


    if(res_type.value==='celcius' && input_type.value==='fah'){
        input_value.value=(res_value.value*1.8) +32;
   
    }
    if(res_type.value==='fah' && input_type.value==='celcius'){
        input_value.value=(res_value.value-32) * (5/9);
   
    }
    if(input_type.value===res_type.value){
        input_value.value=res_value.value;
   
    }
}