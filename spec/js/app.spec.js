describe('Function to add the html listeners:', () => {
});
let testClickDisplay;
let testClickerButton;
let testClicker;
   beforeEach(() => {
   testClickDisplay = document.createElement('div');
   testClickerButton = document.createElement('button');
   testClicker = new ClickCounter();
   makeButtonIntoClicker(testClickerButton, testClicker);
  
   });
    describe('The click cookie element should have the count text within it.', () => {
         it('Hitting click with a mouse will update the click count', () => {
            testClickerButton.click();
            expect(testClicker.clickCount).toBe(1);
         });
         it('Hitting the click will update the DOM inner html' , () => {
            testClickerButton.click();
            updateNumberOfClicks(testClicker, testClickDisplay);
            expect(testClickDisplay.innerHTML).toBe('1');
         });
         it('combining the first two tests together works, click is updated and the inner html is also updated', () => {
            testClickerButton.click();
            updateNumberOfClicks(testClicker, testClickDisplay);
            expect(testClickDisplay.innerHTML).toBe('1');
         });
      describe('the clicking logic works for multiple clicks etc', () => {
         it('hitting click 100 times will have a click companion available', () =>{
            for(let i = 0;i < 100 ; i++){
               testClickerButton.click();
            }
            expect(testClicker.clickCompanionsAvailable).toBe(1);
         });
      })
      describe('setting up the click companion display', () => {
            it('after 100 clicks the available companion display is 1', () => {
            testCompanionDisplay = document.createElement('div');
            updateCompanionDisplay(testCompanionDisplay, testClicker);
               for (let i = 0; i < 120; i++) {
                  testClickerButton.click();
               }  
            updateCompanionDisplay(testCompanionDisplay, testClicker);
            expect(testClicker._getClickCompanionsAvailable()).toBe(1);
            expect(testCompanionDisplay.innerHTML).toBe('1');
            });
      });
   });