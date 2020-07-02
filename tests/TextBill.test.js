describe("The Text Bill", function () {
    it("should able to add  2.75 when each call is entered when 6 calls are made at 2.75 each", function () {
        const textBill = TextBill()
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        
        assert.equal(16.50, textBill.theTotal());
        assert.equal(16.50,textBill.callTotal());
       
       

    });
    it("should be able to send 4 sms at 0.75 each and make 4 calls at 2.75 each call",function(){
        const textBill = TextBill()

        textBill.actionSendSms();
        textBill.actionSendSms();
        textBill.actionSendSms();
        textBill.actionSendSms();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        assert.equal(3,textBill.theSmsTotal());
        assert.equal(11,textBill.callTotal());
        assert.equal(14,textBill.theTotal());
    });

    it("should be able to send 4 sms  at 0.75 each",function(){
        const textBill= TextBill();

        textBill.actionSendSms();
        textBill.actionSendSms();
        textBill.actionSendSms();
        textBill.actionSendSms();
        assert.equal(3,textBill.theTotal());
        assert.equal(3,textBill.theSmsTotal());
    });
    describe("The total color ",function(){
    it("should show the total colar in orange when it exceeds 30",function(){
        const textBill = TextBill();

        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action(); 
        assert.equal("warning",textBill.theTotalColor());

    }) 
    it("should show the total color in red when the total exceeds 50",function(){

        const textBill = TextBill()
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        textBill.action();
        assert.equal("danger",textBill.theTotalColor());
    })
   

    })

});