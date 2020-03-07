

const updateNumberOfClicks = (clicker, clickDisplay) => {
    clickDisplay.innerHTML = clicker.clickCount;
}

const makeButtonIntoClicker = (clickerElement, clicker, clickDisplay) => {
    clickerElement.addEventListener('click', () => {
        clicker.countClick();
        updateNumberOfClicks(clicker, clickDisplay);
    });
}


// const clickDislpay = document.getElementById('clickDisplay');
// const appClicker = new ClickCounter();
// const button = document.getElementById('clicker');
