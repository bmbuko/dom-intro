function SettingsBill() {

    let callCost = 0;
    let theSmsCost = 0;
    let theWarningLevel = 0;
    let theCriticalLevel = 0;
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(cost) {
        callCost = cost;
    }

    function getCallCost() {
        return callCost
    }
    function setSmsCost(smsCost) {
        theSmsCost = smsCost;
    }
    function getSmsCost() {
        return theSmsCost;
    }
    function setWarningLevel(level) {
        theWarningLevel = level;

    }
    function getWarningLevel() {
        return theWarningLevel;
    }
    function setCriticalLevel(criticalLevel) {
        theCriticalLevel = criticalLevel;
    }
    function getCriticalLevel() {
        return theCriticalLevel;
    }
    function makeCall() {
        if (!hasReachedCriticalLevel()) {
            callCostTotal += callCost;
        }

    }
    function getTotalCost() {
        return callCostTotal + smsCostTotal;

    }
    function getTotalCallCost() {
        return callCostTotal;

    }
    function getTotalSmsCost() {
        return smsCostTotal;

    }
    function sendSms() {
        if (!hasReachedCriticalLevel()) {
            smsCostTotal += theSmsCost;
        }
    }
    function billType(billItemTypeWithSettings) {

        if (hasReachedCriticalLevel()){
            return;
        }
        
        if (billItemTypeWithSettings === "call") {
            callCostTotal += callCost;
        }
        else if (billItemTypeWithSettings === "sms") {
            smsCostTotal += theSmsCost;
        }
    }

    function hasReachedCriticalLevel() {
        return getTotalCost() >= getCriticalLevel();

    }
    function totalClassName() {

        console.log(getTotalCost());
        console.log(getCriticalLevel());
        
        
        if (getTotalCost() >= getCriticalLevel()) {
            return "danger"

        }

        if (getTotalCost() >= getWarningLevel()) {
            return "warning"
            // }
            //if (currentTotal >= currentWarning && currentTotal < currentCritical) {
            //totalCostElement.classList.remove("danger");
            // totalCostElement.classList.add("warning");
            // }
            //else if (currentTotal >= currentCritical) {
            //totalCostElement.classList.remove("warning");
            //totalCostElement.classList.add("danger");


        }
    }









    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        hasReachedCriticalLevel,
        billType






    }
}