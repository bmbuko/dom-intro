function SettingsBill() {
    
let callCost = 0;
let theSmsCost = 0;
let theWarningLevel = 0;
let theCriticalLevel = 0;

    function setCallCost(cost) {
        callCost = cost;
    }

    function getCallCost() {
        return callCost;
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

    function actionType(type) {

        

    }


    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel
        
    

    }


}