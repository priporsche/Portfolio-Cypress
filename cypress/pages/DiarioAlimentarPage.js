class DiarioAlimentarPage {
    // elements
    get tituloDiarioAlimentar() {
        return cy.get('h1').contains('Caderno de Refeições');
}

    get adherenceRate() {
        return cy.get('#ringPct');
    }

    get todayDate() {
        return cy.get('.day-btn.active.today');
    }

    get daySelected() {
        return cy.get('.day-btn.active');
    }

    get breakfastOption() {
        return cy.contains('#slotsCard .slot-name', 'Café da manhã');
    }

    get lunchOption() {
        return cy.contains('#slotsCard .slot-name', 'Almoço');
    }

    get morningSnackOption() {
        return cy.contains('#slotsCard .slot-name', 'Lanche da manhã');
    }

    get afternoonSnackOption() {
        return cy.contains('#slotsCard .slot-name', 'Lanche da tarde');
    }

    get dinnerOption() {
        return cy.contains('#slotsCard .slot-name', 'Jantar');
    }

    get breakfastStatusBtn() {
        return cy.contains('#slotsCard .slot-row', 'Café da manhã').find('.status-btn');
    }

    get lunchStatusBtn() {
        return cy.contains('#slotsCard .slot-row', 'Almoço').find('.status-btn');
    }

    get morningSnackStatusBtn() {
        return cy.contains('#slotsCard .slot-row', 'Lanche da manhã').find('.status-btn');
    }

    get afternoonSnackStatusBtn() {
        return cy.contains('#slotsCard .slot-row', 'Lanche da tarde').find('.status-btn');
    }

    get dinnerStatusBtn() {
        return cy.contains('#slotsCard .slot-row', 'Jantar').find('.status-btn');
    }

    get freeMealInput() {
        return cy.get('#freeInput');
    }

    get freeMealAddBtn() {
        return cy.get('#freeAddBtn');
    }

    get freeMealList() {
        return cy.get('#freeList');
    }
}

export default new DiarioAlimentarPage;