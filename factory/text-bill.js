function TextBill(){
   var callCost =2.75
   var callsTotal =0;
    var smsCost = 0.75;
    var smsTotal =0;
    var warning = 30
    var danger = 50
    
    

    function setCallCost(){
        return callCost = call;

    } 
    function theSmsCost(){
        return  smsCost = sms;
    }

    function callTotal(){
        return callsTotal;
        
    }
    function theSmsTotal(){
        return smsTotal
    }
    function action(){
        return  callsTotal += callCost
        
    }
    function actionSendSms(){
        return smsTotal += smsCost
    } 
    function theTotal(){
        return callsTotal +=smsTotal
    }
        function orange(){
            return warning;
        }
        function red(){
            return danger;
        }
        
    
    function theTotalColor(){
        if(theTotal()>= red() ){
            return"danger"
        }
        if(theTotal() >= orange()){
            return"warning"
        }
    
    }











    return{
        setCallCost,
        theSmsCost,
        callTotal,
        action,
        theTotal,
        actionSendSms,
        theSmsTotal,
        orange,
        red,
        theTotalColor
    }
    

    
}