describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  }) 
  it("There is products on the page", () => {
    cy.get(".products article").should("be.visible");
  }); 
  it("There is 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  });
})