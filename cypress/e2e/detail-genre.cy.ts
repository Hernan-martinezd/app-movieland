describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('/')
      cy.contains('Movieland')
    })
   })
  
   describe('Revisar un genero de la lista', () => {
    it('Visitar la pagina donde se listan las películas', () => {
      cy.visit('/genres/list')
      cy.contains('Listar películas')
      cy.contains('Drama')
      cy.contains('Crime')
      cy.get('body > app-genre-list > div.container-fluid.main-container > div > div:nth-child(1) > div > div.card-img-overlay.card-style > div').click();
      cy.contains('Item, The')
      cy.contains('Good For Nothing')
      cy.contains('Arrowsmith')
    })
   })

   describe('Revisar un segundo genero de la lista', () => {
    it('Visitar la pagina donde se listan las películas', () => {
      cy.visit('/genres/list')
      cy.contains('Listar películas')
      cy.contains('Drama')
      cy.contains('Crime')
      cy.get('body > app-genre-list > div.container-fluid.main-container > div > div:nth-child(2) > div > div.card-img-overlay.card-style > div').click();
      cy.contains('Godzilla')
      cy.contains('Cheers for Miss Bishop')
      cy.contains('Gone Fishin')
    })
})


describe('Revisar un genero ingresando desde la pagina principala', () => {
    it('Visitar la pagina donde se listan las películas', () => {
      cy.visit('/')
      cy.contains('Movieland');
      cy.contains('Listar películas')
      cy.get("#genreNavbarDropdown").click();
      cy.wait(1)
      cy.get("#navbarNav > ul > li:nth-child(4) > ul > li:nth-child(1) > a").click();
      cy.contains('Drama')
      cy.contains('Crime')
      cy.get('body > app-genre-list > div.container-fluid.main-container > div > div:nth-child(2) > div > div.card-img-overlay.card-style > div').click();
      cy.contains('Godzilla')
      cy.contains('Cheers for Miss Bishop')
      cy.contains('Gone Fishin')
    })
})