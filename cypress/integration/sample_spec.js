
before(() => {
  cy.visit('http://localhost:8080');
});

describe('when the user interacts with the page', () => {
  it('should add an object to the data layer when it gets clicked', () => {
    cy.get('[data-ga-action]').first().click();
    expect(cy.window().dataLayer.length).to.equal(1);
  });

  it('should add an event to the dataLayer on scroll', () => {
    cy.get('[data-ga-scroll-tracking]').scrollIntoView();
    expect(cy.window().dataLayer.length).to.equal(1);
  });
});
