//get a reference to the textbox where the bill type is to be entered
const billTypeText =document.querySelector(".billTypeText")
//get a reference to the add button
textTotalAddBtn =document.querySelector(".addToBillBtn")
//create a variable that will keep track of the total bill
const callsTotalElem =document.querySelector(".callTotalOne")
const smsTotalElem =document.querySelector(".smsTotalOne")
const totalCostElem =document.querySelector(".totalOne")



const textBill=TextBill()

function textBillTotal(){
    var billTypeEntered = billTypeText.value.trim();
    textBill.textBillTotal(billTypeEntered);
    
    callsTotalElem.innerHTML =textBill.getCallTotal()
    smsTotalElem.innerHTML =textBill.getSmsTotal()


   // var totalCost = callsTotal + smsTotal
    totalCostElem.innerHTML = textBill.theTotal()

    totalCostElem.classList.remove("danger")
    totalCostElem.classList.remove("warning")

    // if(totalCost >= 50){
        totalCostElem.classList.add(textBill.theTotalColor());
    // }
    // else if(totalCost >= 30){
        // totalCostElem.classList.add("warning")
    // }
}
textTotalAddBtn.addEventListener("click" , textBillTotal)