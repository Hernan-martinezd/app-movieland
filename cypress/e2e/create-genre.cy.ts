describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('/')
      cy.contains('Movieland')
    })
   })


describe('Creación de un genero ingresando desde la pagina principala', () => {
    it('Ingresar valores en el formulario para la creación de un género', () => {
      cy.visit('/')
      cy.contains('Movieland');
      cy.contains('Listar películas')
      cy.get("#genreNavbarDropdown").click();
      cy.wait(1)
      cy.get('#navbarNav > ul > li:nth-child(4) > ul > li:nth-child(2) > a').click();
      cy.contains('Type')
      cy.contains('Create')
      cy.contains('Cancel')
      cy.get('#type').type("Crimen y drama");
      cy.wait(1)
      cy.get('body > app-genre-create > div > form').click();

    })
})

