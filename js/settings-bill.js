// get a reference to the sms or call radio buttons
const billItemTypeWithSettings =document.querySelector(".billItemTypeWithSettings")


// get refences to all the settings fields
const callsElement = document.querySelector(".callTotalSettings");
const smsElement = document.querySelector(".smsTotalSettings");
const totalCostElement = document.querySelector(".totalSettings")

//get a reference to the add button
const addBtn = document.querySelector(".radioAddBtn")

//get a reference to the 'Update settings' button
const updateSettingsBtn =document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
const callCostSettingElem =document.querySelector(".callCostSetting")
const smsCostSettingElem = document.querySelector(".smsCostSetting");
const warningLevelSettingElem =document.querySelector(".warningLevelSetting");
const criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

var costOfCall = 0;
var costOfSMS = 0;
var criticalCost = 0;
var warningCost = 0;

// create a variables that will keep track of all three totals.
var cTotal = 0;
var sTotal = 0;
var total = 0;
function settingsUpdate(){
    
    
    costOfCall = Number(callCostSettingElem.value);
    costOfSMS = Number(smsCostSettingElem.value);
    criticalCost = Number(criticalLevelSettingElem.value);
    warningCost = Number(warningLevelSettingElem.value);
    totalColor(total,warningCost,criticalCost);
}
function radioBillSetTotal(){

var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
var billItemTypeWithSettings = checkedRadioBtn.value

if(billItemTypeWithSettings === "call"){
    cTotal += costOfCall;
}
else if(billItemTypeWithSettings === "sms"){
    sTotal += costOfSMS;
}
callsElement.innerHTML = cTotal.toFixed(2);
smsElement.innerHTML = sTotal.toFixed(2);
totalColor(total,warningCost,criticalCost);
total = cTotal + sTotal;
totalCostElement.innerHTML = total.toFixed(2)
}
function totalColor(currentTotal,currentWarning,currentCritical){
    totalCostElement.classList.remove("warning");
    totalCostElement.classList.remove("danger");
             
    if(currentTotal >= currentWarning && currentTotal < currentCritical){
    totalCostElement.classList.remove("danger");
    totalCostElement.classList.add("warning");
    }
    else if(currentTotal >= currentCritical){
        totalCostElement.classList.remove("warning");
            totalCostElement.classList.add("danger");
    
            }
        
        
    }
    

addBtn.addEventListener("click",radioBillSetTotal)
    

    //add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener("click",settingsUpdate);
//add an event listener for when the add button is pressed



//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.[]