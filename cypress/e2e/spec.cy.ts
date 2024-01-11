describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Movieland')
  })
 })

 describe('My second Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/movies/list')
    cy.contains('Listar películas')
  })
 })