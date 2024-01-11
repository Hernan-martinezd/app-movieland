describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('/')
      cy.contains('Movieland')
    })
   })


describe('Creación de una platafroma ingresando desde la pagina principal', () => {
    it('Ingresar valores en el formulario para la creación de una plataforma', () => {
      cy.visit('/')
      cy.contains('Movieland');
      cy.contains('Listar películas')
      cy.get("#genreNavbarDropdown").click();
      cy.wait(1)
      cy.get('#navbarNav > ul > li:nth-child(4) > ul > li:nth-child(2) > a').click();
      cy.contains('name')
      cy.contains('url')
      cy.contains('Create')
      cy.contains('Cancel')
    })
})