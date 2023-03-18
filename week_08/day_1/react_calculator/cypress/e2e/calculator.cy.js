describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
  })

  it('should have working arithmetical operations', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '492');
  })

  it('should chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20');
  })

  it('should display output for positive numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8712');
  })

  it('should display output for negative numbers', () => {
    cy.get('#number6').click();
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-11');
  })

  it('should display output for decimal numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.5');
  })

  it('should display output for very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '97419253056');
  })

  it("should display error when dividing numbers by 0", () => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error');
  })
})

