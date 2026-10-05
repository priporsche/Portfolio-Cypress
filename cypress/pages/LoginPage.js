class LoginPage {
    get passwordInput() {
        return cy.get('#lockInput');
    }

    get loginBtn() {
        return cy.get('#lockSubmitBtn');
    }

    get savePlanBtn() {
        return cy.get('#saveSetupBtn');
    }

    firstAccess(password) {
        cy.visit('rotina-alimentar.html');
        this.passwordInput.type(password);
        this.loginBtn.click();
        this.savePlanBtn.click();
    }

    visitPage() {
        cy.session('diario-completo', () => {
            this.firstAccess('BUSLNU');
        });
        cy.visit('rotina-alimentar.html');
    }
}

export default new LoginPage;