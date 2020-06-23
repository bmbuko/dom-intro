describe("The Settings Bill", function() {

    it("should be able to set the call cost", function() {
        const settingsBill = SettingsBill();
        settingsBill.setCriticalLevel(6)

        const settingsBill2 = SettingsBill();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());

        settingsBill.setCallCost(3.25);
        assert.equal(3.25, settingsBill.getCallCost());

    });

    it("should be able to set the sms cost", function() {
        const settingsBill = SettingsBill();
        settingsBill.setCriticalLevel(6)

        const settingsBill2 = SettingsBill();
        settingsBill2.setSmsCost(0.65);
        assert.equal(0.65, settingsBill2.getSmsCost());

        settingsBill.setSmsCost(0.75);
        assert.equal(0.75, settingsBill.getSmsCost());

    });
    it("should be able to set the  call cost and sms cost", function() {
        const settingsBill = SettingsBill();
        settingsBill.setCallCost(3.25);
        settingsBill.setSmsCost(0.75);
        settingsBill.setCriticalLevel(6)

        assert.equal(3.25,settingsBill.getCallCost());
        assert.equal(0.75, settingsBill.getSmsCost());

        const settingsBill2 = SettingsBill();
        settingsBill2.setCallCost(2.75);
        settingsBill2.setSmsCost(0.65)
        assert.equal(2.75, settingsBill2.getCallCost());
        assert.equal(0.65, settingsBill2.getSmsCost());


});
it("should be able to set the  warning level", function() {
    const settingsBill = SettingsBill();
    settingsBill.setWarningLevel(10);
    

    assert.equal(10, settingsBill.getWarningLevel());
    const settingsBill2 = SettingsBill();
    settingsBill2.setWarningLevel(20);
    
    assert.equal(20, settingsBill2.getWarningLevel());
    


});
it("should be able to set the  critical level", function() {
    const settingsBill = SettingsBill();
    settingsBill.setCriticalLevel(30);
    

    assert.equal(30, settingsBill.getCriticalLevel());
    const settingsBill2 = SettingsBill();
    settingsBill2.setCriticalLevel(60);
    
    assert.equal(60, settingsBill2.getCriticalLevel());
    
});

describe("use values inside the factory function", function(){

it("should be able to use the  the call cost set",function(){

    const settingsBill = SettingsBill();
    settingsBill.setCriticalLevel(6)

    settingsBill.setCallCost(2.22);
    settingsBill.setSmsCost(0.65);
    settingsBill.makeCall();
    settingsBill.makeCall();

    assert.equal(4.44,settingsBill.getTotalCost());
    assert.equal(4.44,settingsBill.getTotalCallCost());
    assert.equal(0.00,settingsBill.getTotalSmsCost());
});
it("should be able to use the call cost set for 4 calls at 0.99 each",function(){

    const settingsBill = SettingsBill();
    settingsBill.setCriticalLevel(6)
    
    settingsBill.setCallCost(0.99);
    settingsBill.setSmsCost(0.65);
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    
    assert.equal(3.96,settingsBill.getTotalCost());
    assert.equal(3.96,settingsBill.getTotalCallCost());
    assert.equal(0.00,settingsBill.getTotalSmsCost());
    });
    it("should be able to use the  sms cost set for sending 4 smss at 0.65 each",function(){

        const settingsBill = SettingsBill();
        settingsBill.setCriticalLevel(6)
        
        settingsBill.setCallCost(0.99);
        settingsBill.setSmsCost(0.65);
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();
        
        assert.equal(2.60,settingsBill.getTotalCost());
        assert.equal(0.00,settingsBill.getTotalCallCost());
        assert.equal(2.60,settingsBill.getTotalSmsCost());
        });
        it("should be able to use the   call and sms cost set for sending 2 smss at 0.65 each and make 1 call at 0.99 each" ,function(){

            const settingsBill = SettingsBill();
            settingsBill.setCriticalLevel(6)


            settingsBill.setCallCost(0.99);
            settingsBill.setSmsCost(0.65);
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();
            
            
            
            assert.equal(2.29,settingsBill.getTotalCost());
            assert.equal(0.99,settingsBill.getTotalCallCost());
            assert.equal(1.30,settingsBill.getTotalSmsCost());
            }); 
            

});

describe("warning and critical level", function(){  

    it(" should return a class name of 'warning' if warning level is reached",function() {

        const settingsBill = SettingsBill();

  
        settingsBill.setCallCost(0.99);
        settingsBill.setSmsCost(0.65);
        settingsBill.setCriticalLevel(6)
        settingsBill.setWarningLevel(3)
  
  
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
         settingsBill.makeCall();
  
         assert.equal("warning",settingsBill.totalClassName());
  
    
});

it(" should return a class name of 'critical' if critical level  has been reached",function() {

    const settingsBill = SettingsBill();
  
    
    settingsBill.setCallCost(2.00);
    settingsBill.setSmsCost(0.65);
    settingsBill.setCriticalLevel(6)
   
    
    
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
   
    
    

    
    assert.equal("critical",settingsBill.totalClassName());
});
it(" should stop  the total call cost from increasing when critical level  has been reached",function() {

    const settingsBill = SettingsBill();
  
    
    settingsBill.setCallCost(2.00);
    settingsBill.setSmsCost(0.65);
    settingsBill.setCriticalLevel(6)
   
    
    
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
   
    
    

    
    assert.equal("critical",settingsBill.totalClassName());
    assert.equal(6,settingsBill.getTotalCallCost());
});
});
});