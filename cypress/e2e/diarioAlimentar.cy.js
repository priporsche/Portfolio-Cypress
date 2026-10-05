import diarioAlimentar from '../pages/DiarioAlimentarPage';
import login from '../pages/LoginPage';

describe('Diário Alimentar', () => {
    beforeEach(() => {
        login.visitPage();
    });

    it('should display the correct title', () => {
        diarioAlimentar.tituloDiarioAlimentar.should('be.visible');
    });

    it('should display the adherence rate', () => {
        diarioAlimentar.adherenceRate.should('be.visible');
    });

    it('should display the breakfast option', () => {
        diarioAlimentar.breakfastOption.should('be.visible');
    });

    it('should display the lunch option', () => {
        diarioAlimentar.lunchOption.should('be.visible');
    });

    it('should display the afternoon snack option', () => {
        diarioAlimentar.afternoonSnackOption.should('be.visible');
    });

    it('should display the dinner option', () => {
        diarioAlimentar.dinnerOption.should('be.visible');
    });

    it('should click on the breakfast status button', () => {
        diarioAlimentar.breakfastStatusBtn.should('have.text', 'Pendente');
        diarioAlimentar.breakfastStatusBtn.click();
        diarioAlimentar.breakfastStatusBtn.should('have.text', '✓ Segui');
    });

    it('should click on the lunch status button', () => {
        diarioAlimentar.lunchStatusBtn.should('have.text', 'Pendente');
        diarioAlimentar.lunchStatusBtn.click();
        diarioAlimentar.lunchStatusBtn.should('have.text', '✓ Segui');
    });

    it('should click on the afternoon snack status button', () => {
        diarioAlimentar.afternoonSnackStatusBtn.should('have.text', 'Pendente');
        diarioAlimentar.afternoonSnackStatusBtn.click();
        diarioAlimentar.afternoonSnackStatusBtn.should('have.text', '✓ Segui');
    });
    
    it('should click on the dinner status button', () => {
        diarioAlimentar.dinnerStatusBtn.should('have.text', 'Pendente');
        diarioAlimentar.dinnerStatusBtn.click();
        diarioAlimentar.dinnerStatusBtn.should('have.text', '✓ Segui');
    });

    it('should display the free meal input', () => {
        diarioAlimentar.freeMealInput.should('be.visible');
    });

    it('should add a free meal', () => {
        diarioAlimentar.freeMealInput.type('Pizza');
        diarioAlimentar.freeMealAddBtn.click();
        diarioAlimentar.freeMealList.should('contain.text', 'Pizza');
    });

});