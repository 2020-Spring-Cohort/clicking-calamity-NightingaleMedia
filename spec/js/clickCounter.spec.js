describe('Click calamity tests:', () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCounter();
    })
    describe('CountClick() records the number of clicks', () => {
        it('CountClick() 1 time should result in the click count being 1. ', () => {
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
            expect(underTest.clickCompanionsAvailable).toBe(0);
            for (let i = 0; i <= 100; i++) {
                underTest.countClick();
            }

            expect(underTest.clickCompanionsAvailable).toBe(1)
        });
        it('Count companion available should be 1 after 100', () => {
            for (let i = 0; i <= 99; i++) {
                underTest.countClick();
            }
            underTest.clickCompanionEligibility();
            expect(underTest.clickCompanionsAvailable).toBe(1);
        });
        it('First click companion can be purchased for 100 clicks', () => {
            for (let i = 0; i <= 99; i++) {
                underTest.countClick();
            }
            underTest.clickCompanionEligibility();
            underTest._purchaseClickCompanion();

            expect(underTest.clickCompanionsSelected).toBe(1);
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });
        it('Click companions can be aggregated without using them', () => {
            for (let i = 0; i <= 200; i++) {
                underTest.countClick();
            }
            expect(underTest.clickCompanionsAvailable).toBe(2);

        });
    });
    describe('Testing the automation for the click companions', () => {
        beforeEach(() => {
            for (let i = 0; i <= 110; i++) {
                underTest.countClick();
            }
        });
        it("After specified number of clicks a companion is available.", () => {
            expect(underTest.clickCompanionsAvailable).toBe(1);


        });
         it("AFter click companion is available you can purchase a companion.", () => {
            underTest._purchaseClickCompanion();
            expect(underTest.clickCompanionsAvailable).toBe(0);
            expect(underTest.clickCompanionsSelected).toBe(1);

        });
        it("After you purchase a companion, the click companion price increases.", () => {
            underTest._purchaseClickCompanion();
            expect(underTest.clickCompanionPrice).toBe(110);
 
        });
        it("After you purchase another companion, the click companion price increases even more.", () => {
            underTest._purchaseClickCompanion();
             for (let i = 0; i <= 110; i++) {
                 underTest.countClick();
             }
            underTest._purchaseClickCompanion();
            expect(underTest.clickCompanionPrice).toBe(121);

        });
    });
});