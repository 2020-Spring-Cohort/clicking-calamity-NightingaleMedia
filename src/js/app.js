
const updateCompanionDisplay = (companionDisplay, clicker) => {
    const companionBg = document.querySelector('.click-companion');
    const companionAmt = document.querySelector('.click-companion-cost');
    companionAmt.innerHTML = clicker._getClickCompanionPrice();
    companionDisplay.innerHTML = clicker._getClickCompanionsAvailable();
    if(clicker._getClickCompanionsAvailable() > 0){
        companionBg.classList.add("available");
    } else {
        companionBg.classList.remove("available");
    }
};

const updateNumberOfClicks = (clicker, clickDisplay) => {
    clickDisplay.innerHTML = clicker._getClickCount();
};

const updateClickWorth = (clickWorthDisplay, clicker) => {
    if(clicker._getClickCompanionsSelected() > 0){
    clickWorthDisplay.innerHTML = 'One Click is Worth: ' + (1 + clicker._getClickCompanionsSelected());
    }
}

const makeButtonIntoClicker = (clickerElement, clicker) => {
    clickerElement.addEventListener('click', () => {
        clickerElement.classList.add('clicking');
        clickerElement.addEventListener('transitionend', ()=>{
            clickerElement.classList.remove('clicking');
        })
        clicker.countClick();   
        updateAllElements();
    });
};

const makeButtonToPurchaseCompanion = (clicker) => {
    const companionBg = document.querySelector('.click-companion');
    companionBg.addEventListener('click', () => {
    clicker._purchaseClickCompanion();
    updateAllElements();
    });
};

const updateAllElements = () => {
    updateCompanionDisplay(appCompanionDisplay, appClicker);
    updateNumberOfClicks(appClicker, appClickDisplay);
    updateClickWorth(appClickWorth, appClicker);
}

const appClickWorth = document.querySelector('.click-worth')
const appCompanionDisplay = document.querySelector('.click-companion-amt')
const appClickDisplay = document.querySelector('.my-clicks');
const button = document.querySelector('.click');
const appClicker = new ClickCounter();

makeButtonIntoClicker(button, appClicker);
makeButtonToPurchaseCompanion(appClicker);
