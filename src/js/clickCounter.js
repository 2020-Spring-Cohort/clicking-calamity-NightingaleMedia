class ClickCounter {
    constructor(){
        this.clickCount = 0;
        //clickCompanions
        this.clickCompanionsSelected = 0;
        this.clickCompanionsAvailable = 0;
        this.clickCompanionPrice = 100;
        //expressed as a percentage
        this.clickCompanionPriceIncrease = 0.10;
    }

    // simply counts the clicks and adds companions when necessary
    countClick() {
        if (this.clickCompanionsSelected > 0) {
            this.clickCount += this.clickCompanionsSelected;
        }
        this.clickCount++;
        this.clickCompanionEligibility();
    }

    clickCompanionEligibility() {
        this.clickCompanionsAvailable = 
           Math.floor(this.clickCount / this.clickCompanionPrice);  
    }

    _purchaseClickCompanion(){
        if (this.clickCompanionsAvailable > 0) {
            this.clickCount -= this.clickCompanionPrice;
            this.clickCompanionsAvailable --;
            this.clickCompanionsSelected++;
            this._calculateClickCompanionPrice();
        } else throw Error('You dont have enough clicks!')
    }

    _calculateClickCompanionPrice() {
        if (this.clickCompanionsSelected != 0) {
            let price = Math.floor((this.clickCompanionPrice) * (1 + this.clickCompanionPriceIncrease));
            this.clickCompanionPrice = price;
        }
    }
    _getClickCount(){
        console.log('click: ' + this.clickCount)
        return this.clickCount;
    
    }
}