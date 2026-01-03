describe('Home', () => {
  it('loads the homepage', () => {
    cy.visit('/')
    cy.contains('Spinning')
  })
})