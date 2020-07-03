describe("The Calculate Bill",function(){

    it("should return a string total when the string is entered " ,function(){
      
       
        assert.equal(11.75,totalPhoneBill("call,sms,call,call,call"));

    });
});