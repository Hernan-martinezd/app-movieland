describe('My First Test', () => {
    it('Visits the initial project page', () => {
      cy.visit('/')
      cy.contains('Movieland')
    })
   })


describe('Creación de un actor ingresando desde la pagina principala', () => {
    it('Ingresar valores en el formulario para la creación de un actor', () => {
      cy.visit('/')
      cy.contains('Movieland');
      cy.contains('Listar películas')
      cy.get("#actorNavbarDropdown").click();
      cy.wait(1)
      cy.get('#navbarNav > ul > li:nth-child(3) > ul > li:nth-child(2) > a').click();
      cy.contains('Name')
      cy.contains('Photo')
      cy.contains('Nationality')
      cy.contains('Biography')
      cy.contains('BirthDate')
      cy.contains('Create')
      cy.contains('Cancel')
      cy.get('#name').type("Scarlett Johansson");
      cy.wait(1)
      cy.get('#photo').type("https://media.glamour.mx/photos/6483dc0a11ffc9d02e1d559f/16:9/w_1920,c_limit/scarlett_johansson.jpg");
      cy.wait(1)
      cy.get('#nationality').type("USA");
      cy.wait(1)
      cy.get('#biography').type("Scarlett Ingrid Johansson es una actriz, cantante, directora, productora, modelo y empresaria estadounidense.");
      cy.wait(1)
      cy.get('#birthDate').type("1995-12-20T05:00:00.000Z");
      cy.wait(1)

    })
})

