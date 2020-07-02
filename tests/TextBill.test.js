describe("The Text Bill", function () {
    it("should able to add  2.75 when each call is entered when 6 calls are made at 2.75 each", function () {
        const textBill = TextBill()
        textBill.action("call");
        textBill.action("call");
        textBill.action("call");
        textBill.action("call");
        textBill.action("call");
        textBill.action("call");
        
        assert.equal(16.50, textBill.getCallCost());
        assert.equal(16.50,textBill.theTotal());
        assert.equal(0.00,textBill.theSmsCost());
       

    });

});