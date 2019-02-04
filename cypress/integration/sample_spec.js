
before(() => {
  cy.visit('http://localhost:8080');
});

describe('when the user interacts with the page', () => {
  it('should add an object to the data layer when the container is clicked', () => {
    cy.get('[data-ga-action]').first().click();

    cy.window().then((win) => {
      expect(win.dataLayer.length).to.equal(1);
    });
  });

  it('should add an object to the data layer when then button is clicked', () => {
    cy.get('button[data-ga-action]').first().click();

    cy.window().then((win) => {
      expect(win.dataLayer.length).to.equal(2);
    });
  });

  it('should add an event to the dataLayer on scroll', () => {
    cy.get('[data-ga-scroll-tracking]').first().scrollIntoView();

    cy.window().then((win) => {
      expect(win.dataLayer.length).to.equal(2);
    });
  });
});
