class ClickCounter {
    constructor(){
        this.clickCount = 0;
        this.clickCompanionEligible = false;
        this.clickCompanionsAmount = 0;
        this.clicksPerSecond = 0;
    }
    countClick() {
        this.clickCount++;
    }
    
    clickCompanionEligibility() {
        if(this.clickCount > 10){ 
            this.clickCompanionEligible = true;
        }
        return this.clickCompanionEligible;
    }

    clickCompanion(){
    while(this.clickCompanionsAmount > 0){ 
       
        }
    }
}