function RadioBill() {
    var callCost = 2.75
    var callsTotal = 0;
    var smsCost = 0.75;
    var smsTotal = 0;
    var warning = 30
    var danger = 50



    function setCallCost() {
        return callCost = call;

    }
    function theSmsCost() {
        return smsCost = sms;
    }

    function getCallTotal() {
        return callsTotal;

    }
    function getSmsTotal() {
        return smsTotal
    }

    // function action() {
    //     return callsTotal += callCost

    // }
    // function actionSendSms() {
    //     return smsTotal += smsCost
    // }
    function theTotal() {
        return callsTotal + smsTotal
    }
    function orange() {
        return warning;
    }
    function red() {
        return danger;
    }
    function billItemType(billItemType) {
        if (billItemType === "call") {
            callsTotal += 2.75;
        }
        else if (billItemType === "sms") {
            smsTotal += 0.75;
        }
    }


    function totalColor() {
        if (theTotal() >= red()) {
            return "danger"
        }
        if (theTotal() >= orange()) {
            return "warning"
        }

    }
    

         return {
        setCallCost,
        theSmsCost,
        getCallTotal,
        theTotal,
        getSmsTotal,
        orange,
        red,
        totalColor,
        billItemType
    }



}