// get a reference to the sms or call radio buttons
const billItemTypeRadio =document.querySelector(".billTypeRadio");
//get a reference to the add button
const radioBillAddButton =document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
const callTotalElemTwo =document.querySelector(".callTotalTwo");
const smsTotalElemTwo =document.querySelector(".smsTotalTwo");
const totalCostElemTwo =document.querySelector(".totalTwo");

const radioBill = RadioBill();
function radioBillTotal(){
    var checkedRadioBtn =document.querySelector("input[name ='billItemType']:checked");
    var billItemType = checkedRadioBtn.value
    radioBill.billItemType(billItemType);

callTotalElemTwo.innerHTML =radioBill.getCallTotal();
smsTotalElemTwo.innerHTML =radioBill.getSmsTotal();
//var totalCostTwo = callTot+smsTot
totalCostElemTwo.innerHTML = radioBill.theTotal();

//if(totalCostTwo >=50){
    totalCostElemTwo.classList.remove("danger")
totalCostElemTwo.classList.remove("warning")



    totalCostElemTwo.classList.add(radioBill.totalColor())
}
radioBillAddButton.addEventListener("click" ,radioBillTotal)