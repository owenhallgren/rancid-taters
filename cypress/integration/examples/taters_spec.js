// describe('Feedback Loop', () => {
//   it('Should confirm that true is equal to true', () => {
//     expect(true).to.equal(true)
//   });
// });

describe('home page', () => {
  it('Should it should have a header', () => {
    cy.visit('http://localhost:3000')
    .get('h1').contains('Rotten Taters 🥔')
  })

  it('Should display movies', () => {
    cy.visit('http://localhost:3000')
    .get('.movie-card').first()
    .get('h3').contains('Money Plane')
    .get('img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
    .get('p').first().contains('Average Rating: 6.1 🥔 \'s')
    .get('p').contains('Release Date: 2020-09-29')
  })
})




