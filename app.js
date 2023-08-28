const num = document.querySelector(".num");
const displayCurrent = document.querySelector(".currentValue");
const historyValue = document.querySelector(".historyValue");
const signdisplay = document.querySelector(".operationSign");
const one = num.children[0];
const two = num.children[1];
const three = num.children[2];
const four = num.children[3];
const five = num.children[4];
const six = num.children[5];
const seven = num.children[6];
const eight = num.children[7];
const nine = num.children[8];
const zero = num.children[9];
const del = num.children[10];
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");
const eql = document.querySelector(".equal");
const clr = num.children[11];
let intinalValue = "0"
let persentValue = "0"

function display(current){
    displayCurrent.innerText = current 

}
function intinal(intinal){
    historyValue.innerText = intinal
}

function textvalue (value){
    if(persentValue === "0"){
        persentValue = value
    }else {
        if(persentValue === "Error"){
            persentValue = value;
        }else{
            persentValue += value
        }
        
    }
}

setInterval(() => {
    display(persentValue)  
    intinal(intinalValue)
},10);
let undoOperation = {addition:false,subraction:false,multiplication:false,division:false}
let operationFlag = {
    addition:false,subraction:false,multiplication:false,division:false
}

one.addEventListener("click",()=>{
     textvalue("1")  
})
two.addEventListener("click",()=>{
    textvalue("2")   
})
three.addEventListener("click",()=>{
    textvalue("3")   
})
four.addEventListener("click",()=>{
    textvalue("4")   
})
five.addEventListener("click",()=>{
    textvalue("5")   
})
six.addEventListener("click",()=>{
    textvalue("6")   
})
seven.addEventListener("click",()=>{
    textvalue("7")   
})
eight.addEventListener("click",()=>{
    textvalue("8")   
})
nine.addEventListener("click",()=>{
    textvalue("9")   
})
zero.addEventListener("click",()=>{
    textvalue("0")   
})

del.addEventListener("click",()=>{
    if (persentValue.length === 1){
        persentValue = "0"
    }else {
        persentValue = persentValue.slice(0,-1);
    }
    
})
clr.addEventListener("click",()=>{
    persentValue = "0";
    intinalValue = "0";
    operationFlag = undoOperation
    signdisplay.innerText = ""
})



add.addEventListener("click",()=>{
    let first = persentValue;
    intinalValue = first;
    persentValue = "0";
    operationFlag = {...operationFlag,addition:true};
    signdisplay.innerText = "+"
})

sub.addEventListener("click",()=>{
    let first = persentValue;
    intinalValue = first;
    persentValue = "0";
    operationFlag = {...operationFlag,subraction:true};
    signdisplay.innerText = "-";

})
mul.addEventListener("click",()=>{
    let first = persentValue;
    intinalValue = first;
    persentValue = "0";
    operationFlag = {...operationFlag,multiplication:true};
    signdisplay.innerText = "*";
})
div.addEventListener("click",()=>{
    let first = persentValue;
    intinalValue = first;
    persentValue = "0";
    operationFlag = {...operationFlag,division:true};
    signdisplay.innerText = "/";

})



eql.addEventListener("click",()=>{
    if(operationFlag.addition) {
        let finalvalue = Number(intinalValue) + Number(persentValue);
        persentValue = String(finalvalue);
        intinalValue = "0";
        operationFlag = undoOperation
    }if (operationFlag.subraction){
        let finalvalue = Number(intinalValue) - Number(persentValue);
        persentValue = String(finalvalue);
        intinalValue = "0";
        operationFlag = undoOperation;
    }if(operationFlag.multiplication){
        let finalvalue = Number(intinalValue) * Number(persentValue);
        persentValue = String(finalvalue);
        intinalValue = "0";
        operationFlag = undoOperation;
    }if(operationFlag.division){
        if(persentValue === "0"){
            persentValue = "NaN";
            intinalValue = "0";
            operationFlag = undoOperation
        }else {
            let finalvalue = Number(intinalValue) / Number(persentValue);
            persentValue = String(finalvalue);
            intinalValue = "0";
            operationFlag = undoOperation;

        }
    }
    signdisplay.innerText = ""
})



