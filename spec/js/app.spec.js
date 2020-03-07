describe('Function to add the html listeners:', () => {
});
let testClickDisplay;
let testClickerButton;
let testClicker;
   beforeEach(() => {
   testClickDisplay = document.createElement('div');
   testClickerButton = document.createElement('button');
   testClicker = new ClickCounter();
   makeButtonIntoClicker(testClickerButton, testClicker, testClickDisplay);
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
            expect(testClickDisplay.innerHTML).toBe('1');
         });
         
   });