describe('Index', () => {
    it('users should be able to view the "/" page', () => {
        cy.visit('/')
            .get('p').contains('This is my App.');
    });
});
