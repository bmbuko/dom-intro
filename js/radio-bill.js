// get a reference to the sms or call radio buttons
const billItemTypeRadio =document.querySelector(".billTypeRadio");
//get a reference to the add button
const radioBillAddButton =document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const callTotalElemTwo =document.querySelector(".callTotalTwo");
const smsTotalElemTwo =document.querySelector(".smsTotalTwo");
const totalCostElemTwo =document.querySelector(".totalTwo");
var cTotal =0;
var sTotal =0;

function radioBillTotal(){
    var checkedRadioBtn =document.querySelector("input[name ='billItemType']:checked");
    var billItemType = checkedRadioBtn.value
if (billItemType ==="call"){
    cTotal += 2.75
}
else if(billItemType === "sms"){
    sTotal += 0.75;
}
callTotalElemTwo.innerHTML =cTotal.toFixed(2)
smsTotalElemTwo.innerHTML =sTotal.toFixed(2)
var totalCostTwo = cTotal +sTotal
totalCostElemTwo.innerHTML = totalCostTwo.toFixed(2)

if(totalCostTwo >=50){
    totalCostElemTwo.classList.add("danger")
}
else if(totalCostTwo >= 30){
    totalCostElemTwo.classList.add("warning")
}
}
radioBillAddButton.addEventListener("click" ,radioBillTotal)
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
