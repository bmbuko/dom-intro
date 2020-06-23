function RadioBill(){
    var callTotal = 0;
    var smsTotal = 0;
    var theCallCost = 2.75
    var smsCost = 0.75
    

    function getCallTotal(){
        return callTotal;

    }
    function makeCall(){
        return callTotal += theCallCost 
    }
    function getTotalCost(){
        return callTotal += smsTotal;
    }
    function sendSms(){
        return smsTotal += smsCost;

    }
    function getSmsTotal(){
         return smsTotal
    }
    function totalColor(){ 
        if(getTotalCost >= 30){
            return "warning"
        }
        if(getTotalCost >= 50){
            return "danger"
        }

    }










return{
    makeCall,
    getCallTotal,
    getTotalCost,
    sendSms,
    getSmsTotal,
    totalColor
}
}