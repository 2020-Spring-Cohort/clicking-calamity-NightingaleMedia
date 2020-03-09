


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

const updateAutoClickDisplay = (autoClickerAvail, clicker) => {
    autoClickerAvail.innerHTML = clicker._getAutoClickersAvailable();
    const autoClickPrice = document.querySelector('.auto-clicker-cost')
    autoClickPrice.innerHTML = clicker._getAutoClickerPrice();
    const autoClickBg = document.querySelector('.auto-clicker')
    
    if (clicker._getAutoClickersAvailable() > 0) {
        autoClickBg.classList.add("available");
    } else {
        autoClickBg.classList.remove("available");
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
const updateAutoClickersSelected = (autoClickersSelected, clicker) => {
    if(clicker._getAutoClickersSelected() > 0){
    autoClickersSelected.innerHTML = 'Auto Clickers: ' +(clicker._getAutoClickersSelected());
    }
}

const makeButtonIntoClicker = (clickerElement, clicker) => {
    clickerElement.addEventListener('click', () => {
        clickerElement.classList.add('clicking');
        clickerElement.addEventListener('transitionend', ()=>{
            clickerElement.classList.remove('clicking');
        });
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

function autoClick() {
    appClicker.countClick();
    updateAllElements();

}

const makeButtonToPurchaseAutoClicker = (autoClickerElement, clicker) => {
    autoClickerElement.addEventListener('click', () => {
        if(clicker._getAutoClickersAvailable() > 0){ 
            clicker._purchaseAutoClicker();
            setInterval(autoClick, 1000);
            updateAllElements();
        }
    updateAllElements();
    });
}

const updateAllElements = () => {
    updateCompanionDisplay(appCompanionDisplay, appClicker);
    updateNumberOfClicks(appClicker, appClickDisplay);
    updateClickWorth(appClickWorth, appClicker);
    updateAutoClickDisplay(appAutoClickerAvail, appClicker);
    updateAutoClickersSelected(appAutoClickersSelected, appClicker);
}

const reset = (resetter, appTimer) => {
    resetter.addEventListener('click', () => {
        appClicker.initialize();
        clearInterval(appTimer);
        updateAllElements();
    });
}


const appAutoClicker = document.querySelector('.auto-clicker');
const appAutoClickerAvail = document.querySelector('.auto-clicker-avail');
const appAutoClickersSelected = document.querySelector('.auto-clickers-selected')
const appClickWorth = document.querySelector('.click-worth');
const appCompanionDisplay = document.querySelector('.click-companion-amt');
const appClickDisplay = document.querySelector('.my-clicks');
const button = document.querySelector('.click');
const resetButton = document.querySelector('.reset');
const appClicker = new ClickCounter();


makeButtonIntoClicker(button, appClicker);
makeButtonToPurchaseCompanion(appClicker);
makeButtonToPurchaseAutoClicker(appAutoClicker, appClicker);
reset(resetButton);