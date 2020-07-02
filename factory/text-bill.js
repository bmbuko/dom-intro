function TextBill(){
    callCost =2.75
    callsTotal =0;
    smsCost = 0.75;
    smsTotal =0;
    function setCallCost(call){
        return callCost = call;

    } 
    function theSmsCost(smsCost){
        return  smsCost = sms;
    }
    function getCallCost(){
        return callCost;
    }
    function getSmsCost(){
        return smsCost
    }
    function callTotal(){
        return callsTotal;
    }
    function action(call){
        return callCost += callsTotal
    }
    function theTotal(){
        return callsTotal + smsTotal
    }











    return{
        setCallCost,
        theSmsCost,
        getSmsCost,
        getCallCost,
        callTotal,
        action,
        theTotal
    }
    

    
}