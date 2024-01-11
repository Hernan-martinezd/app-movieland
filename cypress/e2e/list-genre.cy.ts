describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('/')
      cy.contains('Movieland')
    })
   })
  
   describe('Revisar un genero de la lista', () => {
    it('Visitar la pagina donde se listan los géneros', () => {
      cy.visit('/genres/list')
      cy.contains('Listar películas')
      cy.contains('Drama')
      cy.contains('Crime')
    })
   })

   describe('Revisar un genero ingresando desde la pagina principala', () => {
    it('Visitar la pagina donde se listan los genereos', () => {
      cy.visit('/')
      cy.contains('Movieland');
      cy.contains('Listar películas')
      cy.get("#genreNavbarDropdown").click();
      cy.wait(1)
      cy.get("#navbarNav > ul > li:nth-child(4) > ul > li:nth-child(1) > a").click();
      cy.contains('Drama')
      cy.contains('Crime')
    })
})