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
        return callCost += theSmsCost;
    }
    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    } 
    function getSmsCost(){
    return theSmsCost;
    }
    function setWarningLevel(level){
        theWarningLevel = level;
        
    }
    function getWarningLevel(){
        return theWarningLevel;
    }
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }
    function getCriticalLevel(){
        return theCriticalLevel;
    }
    function makeCall(){
        if(!hasReachedCriticalLevel()){
        callCostTotal += callCost;
        }

    }
    function getTotalCost(){
        return callCostTotal + smsCostTotal;

    }
    function getTotalCallCost(){
        return callCostTotal;

    }
    function getTotalSmsCost(){
        return smsCostTotal;

    }
    function sendSms(){
        if(!hasReachedCriticalLevel()){
         smsCostTotal += theSmsCost;
        }
    }

    function hasReachedCriticalLevel(){
        return getTotalCost() >=  getCriticalLevel();

    }
    function totalClassName(){
        if(getTotalCost() >= getCriticalLevel()){
            return "critical"

        }
    
     if( getTotalCost() >=  getWarningLevel()){
            return "warning"
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
        hasReachedCriticalLevel



        
    

    }
}