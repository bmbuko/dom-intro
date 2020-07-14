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

const settingsBill = SettingsBill();

function settingsUpdate() {


  const costOfCall = Number(callCostSettingElem.value);
  const costOfSMS = Number(smsCostSettingElem.value);
  const criticalCost = Number(criticalLevelSettingElem.value);
  const warningCost = Number(warningLevelSettingElem.value);

  settingsBill.setCallCost(costOfCall);
  settingsBill.setSmsCost(costOfSMS);
  settingsBill.setCriticalLevel(criticalCost);
  settingsBill.setWarningLevel(warningCost);

  totalColor()

}
function radioBillSetTotal() {

  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  var billItemTypeWithSettings = checkedRadioBtn.value
  settingsBill.billType(billItemTypeWithSettings);




  callsElement.innerHTML = settingsBill.getTotalCallCost();
  smsElement.innerHTML = settingsBill.getTotalSmsCost();

  totalColor()


  //total = cTotal + sTotal;
  totalCostElement.innerHTML = settingsBill.getTotalCost();
}

function totalColor() {
  totalCostElement.classList.remove("warning");
  totalCostElement.classList.remove("danger");
  totalCostElement.classList.add(settingsBill.totalClassName());
}



addBtn.addEventListener("click", radioBillSetTotal);


//add an event listener for when the 'Update settings' button is pressed
updateSettingsBtn.addEventListener("click", settingsUpdate);
//add an event listener for when the add button is pressed
