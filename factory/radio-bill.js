function RadioBill(){
    var callTotal = 0;
    var smsTotal = 0;
    var theCallCost = 2.75
    var smsCost = 0.75
    var theWarning = 30
    var theDanger = 50
    

    function getCallTotal(){
        return callTotal;

    }
    function makeCall(){
        return callTotal += theCallCost 
    }
    function totalCost(){
        return callTotal += smsTotal;
    }
    function sendSms(){
        return smsTotal += smsCost;

    }
    function getSmsTotal(){
         return smsTotal
    }
    function getWarning(){
        return theWarning
    }
    function getDanger(){
        return theDanger
    } 
    function totalColor() {
        if(totalCost() >= getDanger()){
            return "danger"
        }
    if(totalCost() >= getWarning()){
        return "warning"
    }
}











return{
    makeCall,
    getCallTotal,
    totalCost,
    sendSms,
    getSmsTotal,
    totalColor,
    getWarning,
    getDanger
}
}