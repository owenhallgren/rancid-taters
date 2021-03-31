describe('home page', () => {


  beforeEach(() => {
    cy
    .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {fixture: 'mock-trailer-data.json'})
    .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {fixture: 'mock-details-data.json'})
    .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'mock-movies-data.json'})
    .visit('http://localhost:3000')
  })

  it('Should it should have a header', () => {
    cy
    .get('h1').contains('Rotten Taters 🥔')
  })

  it('Should display movies', () => {
    cy
    .get('.movie-card').first()
    .get('h3').contains('Money Plane')
    .get('img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
    .get('p').first().contains('Average Rating: 6.1 🥔 \'s')
    .get('p').contains('Release Date: 2020-09-29')
  })

  it('Should display movie details', () => {
    cy
    .get('.movie-card').first().click()
    .get('.movie-details')
    .get('.back-drop').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg')
    .get('.poster').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')
    .get('p').contains('6.1 🥔 \'s')
    .get('h2').contains('Money Plane')
    .get('.genre').contains('Action')
    .get('p').contains('82 minutes')
    .get('p').contains('2020-09-29')
    .get('.overview').contains('A professional thief with $40 million in debt and his family\'s life on the line must commit one final heist - rob a futuristic airborne casino filled with the world\'s most dangerous criminals.')
  })

  it('should go back to home page on back button click', () => {
    cy
    .get('.movie-card').first().click()
    .get('.go-back-button').click()
    .get('.movie-card').first()
    .get('h3').contains('Money Plane')
  })
})




