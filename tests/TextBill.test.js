describe("The Text Bill", function () {
    it("should able to add  2.75 when each call is entered when 6 calls are made at 2.75 each", function () {
        const textBill = TextBill()
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        
        assert.equal(16.50, textBill.theTotal());
        assert.equal(16.50,textBill.getCallTotal());
       
       

    });
    it("should be able to send 4 sms at 0.75 each and make 4 calls at 2.75 each call",function(){
        const textBill = TextBill()

        textBill.textBillTotal("sms");
        textBill.textBillTotal("sms");
        textBill.textBillTotal("sms");
        textBill.textBillTotal("sms");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        assert.equal(3,textBill.getSmsTotal());
        assert.equal(11,textBill.getCallTotal());
        assert.equal(14,textBill.theTotal());
    });

    it("should be able to send 4 sms  at 0.75 each",function(){
        const textBill= TextBill();

        textBill.textBillTotal("sms");
        textBill.textBillTotal("sms");
        textBill.textBillTotal("sms");
        textBill.textBillTotal("sms");

        assert.equal(3,textBill.theTotal());
        assert.equal(3,textBill.getSmsTotal());
    });
    describe("The total color ",function(){
    it("should show the total colar in orange when it exceeds 30",function(){
        const textBill = TextBill();

        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call"); 
        assert.equal("warning"
        ,textBill.theTotalColor());

    }) 
    it("should show the total color in red when the total exceeds 50",function(){

        const textBill = TextBill()
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        textBill.textBillTotal("call");
        assert.equal("danger",textBill.theTotalColor());
    })
   

    })

});