describe("The Radio Bill",function(){

    it("should be able to use the call cost set for 4 calls at 2.75 each and incremement when the call button is pressed " ,function(){
        let radioBill= RadioBill()
        
        radioBill.makeCall();
        
        radioBill.makeCall();
        radioBill.makeCall();
        radioBill.makeCall();
        assert.equal(11,radioBill.totalCost())
        assert.equal(11,radioBill.getCallTotal())

    });
    it("should be able to use the sms cost set for 2 sms's at 0.75 each" ,function(){
        let radioBill = RadioBill()
        radioBill.sendSms();
        radioBill.sendSms();

        assert.equal(1.50,radioBill.totalCost());
        assert.equal(1.50,radioBill.getSmsTotal());

    });
    it("should be able to send an sms at 0.75 each and a call at 2.75 each",function(){   
        let radioBill  = RadioBill();

        radioBill.sendSms();
        radioBill.makeCall();
        assert.equal(0.75,radioBill.getSmsTotal());
        assert.equal(2.75,radioBill.getCallTotal());
        assert.equal(3.50,radioBill.totalCost());
    });
    describe("The warning and danger total color",function(){
        
       it("should  show  the total in 'orange' if the total cost exceeds 30",function(){
           let radioBill = RadioBill();

           radioBill.makeCall();
           radioBill.makeCall();
           radioBill.makeCall();
           radioBill.makeCall();
           radioBill.makeCall();
           radioBill.makeCall();
           radioBill.makeCall();
           radioBill.makeCall();
           radioBill.makeCall();
           radioBill.makeCall();
           radioBill.makeCall();




            assert.equal("warning",radioBill.totalColor())
        });
        it("should show the total in 'red'  if the the total cost exceeds 50",function(){
            let radioBill = RadioBill()

            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();
            radioBill.makeCall();

            assert.equal("danger",radioBill.totalColor());

        })

    });
    


    
    

});
