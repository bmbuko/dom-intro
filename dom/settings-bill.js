// get a reference to the sms or call radio buttons
const billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");


// get refences to all the settings fields
const callsElement = document.querySelector(".callTotalSettings");
const smsElement = document.querySelector(".smsTotalSettings");
const totalCostElement = document.querySelector(".totalSettings");

//get a reference to the add button
const addBtn = document.querySelector(".radioAddBtn");

//get a reference to the 'Update settings' button
const updateSettingsBtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
const callCostSettingElem = document.querySelector(".callCostSetting");
const smsCostSettingElem = document.querySelector(".smsCostSetting");
const warningLevelSettingElem = document.querySelector(".warningLevelSetting");
const criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

/*var costOfCall = 0;
var costOfSMS = 0;
var criticalCost = 0;
var warningCost = 0;

// create a variables that will keep track of all three totals.
/*var cTotal = 0;
var sTotal = 0;
var total = 0;
*/
const settingsBill = SettingsBill();

function settingsUpdate() {

  costOfCall = Number(callCostSettingElem.value);
  costOfSMS = Number(smsCostSettingElem.value);
  criticalCost = Number(criticalLevelSettingElem.value);
  warningCost = Number(warningLevelSettingElem.value);
  //totalColor(total,warningCost,criticalCost);
}
function radioBillSetTotal() {

  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  var billItemTypeWithSettings = checkedRadioBtn.value
  settingsBill.billType(billItemTypeWithSettings);
  //if(total < criticalCost){
  //if(billItemTypeWithSettings === "call"){
  //  cTotal += costOfCall;
  //}
  //else if(billItemTypeWithSettings === "sms"){
  //  sTotal += costOfSMS;
  //}
  //}



  callsElement.innerHTML = settingsBill.getCallCost();
  smsElement.innerHTML = settingsBill.getSmsCost();
  //totalColor(total,warningCost,criticalCost);
  //total = cTotal + sTotal;
  totalCostElement.innerHTML = settingsBill.getTotalCost();
}

function totalColor(currentTotal, currentWarning, currentCritical) {
  totalCostElement.classList.remove("warning");
  totalCostElement.classList.remove("danger");

  if (currentTotal >= currentWarning && currentTotal < currentCritical) {
    totalCostElement.classList.remove("danger");
    totalCostElement.classList.add("warning");
  }
  else if (currentTotal >= currentCritical) {
    totalCostElement.classList.remove("warning");
    totalCostElement.classList.add("danger");

  }


}


addBtn.addEventListener("click", radioBillSetTotal);


//add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener("click", settingsUpdate);
//add an event listener for when the add button is pressed
