describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('/')
      cy.contains('Movieland')
    })
   })
  
   describe('Revisar un actor de la lista', () => {
    it('Visitar la pagina donde se listan los actores', () => {
      cy.visit('/actors/list');
      cy.contains('Actor detail');
      cy.contains('Barnett Campagne');
      cy.contains('Godiva Durran');
    })
   })

   describe('Revisar un genero ingresando desde la pagina principala', () => {
    it('Visitar la pagina donde se listan los genereos', () => {
      cy.visit('/')
      cy.contains('Movieland');
      cy.contains('Listar películas')
      cy.get("#actorNavbarDropdown").click();
      cy.wait(1);
      cy.get("#navbarNav > ul > li:nth-child(3) > ul > li:nth-child(1) > a").click();
      cy.contains('Barnett Campagne');
      cy.contains('Godiva Durran');
    })
})