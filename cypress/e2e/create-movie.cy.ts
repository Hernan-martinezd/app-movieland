describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('/')
      cy.contains('Movieland')
    })
   })


describe('Creación de una película ingresando desde la pagina principal', () => {
    it('Ingresar valores en el formulario para la creación de una película', () => {
      cy.visit('/')
      cy.contains('Movieland');
      cy.contains('Listar películas')
      cy.get("#movieNavbarDropdown").click();
      cy.wait(1)
      cy.get('#navbarNav > ul > li:nth-child(3) > ul > li:nth-child(2) > a').click();
      cy.contains('title')
      cy.contains('poster')
      cy.contains('duration')
      cy.contains('country')
      cy.contains('releaseDate')
      cy.contains('Create')
      cy.contains('Cancel')
      cy.get('#title').type("");
    })
})