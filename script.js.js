// function value(num1, num2){
//     document.querySelector("#screen").innerHTML=num1*num2;
// }

function val(n1){
    // num1=n1;
    // console.log(num1);
   let num1= document.querySelector("#screen").innerHTML;
    num1+= n1;
    document.querySelector("#screen").innerHTML=num1;
    console.log(num1);

}

function result(){

    let v1 = document.querySelector("#screen").innerHTML;
    let v2 = eval(v1);
    document.querySelector("#screen").innerHTML=v2;
    console.log("Result");
}


function cle(){
    
    document.querySelector("#screen").innerHTML="";
    let x=document.querySelector("#audio");
    x.play();

    console.log("clear");
}

// function value(n2){
//     num2=n2;
//     console.log(num2);
// }
// const multi = (num1,num2)=>{
//     document.querySelector("#screen").innerHTML=num1*num2;
// }
// document.querySelector("#multi").addEventListener("click",multi);