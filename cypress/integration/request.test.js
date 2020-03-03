describe("Request with cookies", () => {
  it("using page cookies with sub domain works", () => {
    Cypress.Cookies.debug();

    // set cookie
    cy.visit("http://local.cypress.test:5000/sub-domain-cookie");

    // check that visiting a page sends the cookie
    cy.visit("http://local.cypress.test:5000/cookies");
  });

  it("using page cookies with parent domain works", () => {
    Cypress.Cookies.debug();

    // set cookie
    cy.visit("http://local.cypress.test:5000/domain-cookie");

    // check that visiting a page sends the cookie
    cy.visit("http://local.cypress.test:5000/cookies");
  });

  it("using request cookies with sub domain works", () => {
    Cypress.Cookies.debug();

    // set cookie
    cy.request("http://local.cypress.test:5000/sub-domain-cookie");

    // check that cy.request sends the cookie
    cy.request("POST", "http://local.cypress.test:5000/cookies")
      .its("status")
      .should("equal", 200);

    // check that visiting a page sends the cookie
    cy.visit("http://local.cypress.test:5000/cookies");
  });

  it("using request cookies with parent domain doesn't work", () => {
    Cypress.Cookies.debug();

    // set cookie
    cy.request("http://local.cypress.test:5000/domain-cookie");

    // check that cy.request sends the cookie
    cy.request("POST", "http://local.cypress.test:5000/cookies")
      .its("status")
      .should("equal", 200);

    // check that visiting a page sends the cookie
    cy.visit("http://local.cypress.test:5000/cookies");
  });
});
