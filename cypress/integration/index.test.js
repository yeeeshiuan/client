describe('Index', () => {
    it('users should be able to view the "/" page', () => {
        cy.visit('/')
            .get('p').contains('This is my App.(Main)');
    });

    it('users should be able to view the "/about" page', () => {
    cy
        cy.visit('/about')
            .get('p').contains('This is my App.(About)');
  });
});
