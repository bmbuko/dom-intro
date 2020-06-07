describe("The Settings Bill", function() {

    it("should be able to set the call cost", function() {
        const settingsBill = SettingsBill();

        const settingsBill2 = SettingsBill();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());

        settingsBill.setCallCost(3.25);
        assert.equal(3.25, settingsBill.getCallCost());

    });

    it("should be able to set the sms cost", function() {
        const settingsBill = SettingsBill();

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

assert.equal(3.25, settingsBill.getCallCost());
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
});