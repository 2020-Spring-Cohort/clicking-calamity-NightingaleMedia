class ClickCounter {
    constructor(){
        this.clickCount = 0;
        //clickCompanions
        this.clickCompanionsSelected = 0;
        this.clickCompanionsAvailable = 0;
        this.clickCompanionPrice = 40;
        this.clickCompanionPriceIncrease = 0.10;

        //Click Compounders
        this.autoClickersAvailable = 0;
        this.autoClickersSelected = 0;
        this.autoClickerPrice = 40;
        this.autoClickerPriceIncrease = 0.10;
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
        this.autoClickersAvailable = 
           Math.floor(this.clickCount / this.autoClickerPrice);
    }
    _purchaseClickCompanion(){
        this.clickCompanionEligibility();
        if (this.clickCompanionsAvailable > 0) {
            this.clickCount -= this.clickCompanionPrice;
            this.clickCompanionsAvailable --;
            this.clickCompanionsSelected++;
            this._calculateClickCompanionPrice();
        } else throw Error('You dont have enough clicks!')
    }

    _purchaseAutoClicker(){
        this.clickCompanionEligibility();
        if (this.autoClickersAvailable > 0) {
            this.clickCount -= this.autoClickerPrice;
            this.autoClickersAvailable --;
            this.autoClickersSelected++;
            this._calculateAutoClickerPrice();
        }
    }

    _calculateClickCompanionPrice() {
        if (this.clickCompanionsSelected != 0) {
            let price = Math.floor((this.clickCompanionPrice) * (1 + this.clickCompanionPriceIncrease));
            this.clickCompanionPrice = price;
        }
    }

    _calculateAutoClickerPrice(){
        if (this.autoClickersSelected != 0) {
            let priceCalc = Math.pow(this.autoClickerPrice, (1 + this.autoClickerPriceIncrease))
            let price = Math.floor(priceCalc);
            this.autoClickerPrice = price;
        }
    }

    _getClickCount(){
        return this.clickCount;
    }
    _getClickCompanionsAvailable(){
        return this.clickCompanionsAvailable;
    }
    _getClickCompanionsSelected() {
        return this.clickCompanionsSelected;
    }
    _getClickCompanionPrice() {
        return this.clickCompanionPrice;
    }
    _getAutoClickersSelected() {
        return this.autoClickersSelected;
    }
    _getAutoClickersAvailable(){
        return this.autoClickersAvailable;
    }
    _getAutoClickerPrice(){
        return this.autoClickerPrice;
    }

    initialize(){
        this.clickCount = 0;

        this.autoClickerPrice = 40;
        this.autoClickersAvailable = 0;
        this.autoClickersSelected = 0;

        this.clickCompanionsSelected = 0;
        this.clickCompanionsAvailable = 0;
        this.clickCompanionPrice = 40;

    }

}