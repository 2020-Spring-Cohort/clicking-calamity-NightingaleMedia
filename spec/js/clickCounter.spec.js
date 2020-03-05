describe('Click calamity tests:', ()=> {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCounter();
    })
    describe('CountClick() records the number of clicks', () => {
        it('CountClick() 1 time should result in the click count being 1. ',  ()=> {
            underTest.countClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('Count click two times should return 2', () => {
            underTest.countClick();
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });
    
    });
    describe('Click companion should be initialized and then add clicks', () => {
        it('Click companion should be initialized at a certain value', () => {
            expect(underTest.clickCompanionEligibility()).toBe(false);
            for (let i = 0; i <= 11; i++) {
                underTest.countClick();
            }
             expect(underTest.clickCompanionEligibility()).toBe(true)
         });
        it('Count companion should  click should respond to a click', () => {
            for (let i = 0; i <= 11; i++) {
                underTest.countClick();
            }
            expect(underTest.clickCompanionEligibility()).toBe(true);
            underTest.countCompanion();
            expect(underTest.clickCount).toBe(10);
        });
        it('Count click and click companion should return the sum of both', () => {
            underTest.countClick();
            underTest.countCompanion();
            expect(underTest.clickCount).toBe(11);
        });
       
    });
});