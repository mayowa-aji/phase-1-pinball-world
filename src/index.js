
//Declare variables globally
const gameList = document.querySelector('.game-list')
const gameDetails = document.querySelector('#game-details')
const detailImage = document.querySelector('#detail-image')
const detailTitle = document.querySelector('#detail-title')
const highScoreForm = document.querySelector('#high-score-form')
const detailHighScore = document.querySelector('#detail-high-score')
const scoreInput = document.querySelector('#score-input')

//Create a fetch request
fetch('http://localhost:3000/games')
  .then(response => response.json())
  .then(data => {
    renderAllGames(data)
    renderGameDetails(data[0])
  })

      //allows you to render just one game
    // renderGame(gameObj[0]))


// Create a function that loops through the game - This should the game object as an argument
function renderAllGames(gamesList) {
  gamesList.forEach(gameObj => renderGame(gameObj));

}


//create an instance of the game
// When the page loads, show the `image`, `name`, and `high_score` properties of the the **first** game in the array returned from your fetch.

function renderGame(gameObj) {
  const combinedGameName = document.createElement('h5')
  combinedGameName.textContent = `${gameObj.name}(${gameObj.manufacturer_name})`
  gameList.append(combinedGameName)

  combinedGameName.addEventListener('click', () => {
    renderGameDetails(gameObj)
  })

}
function renderGameDetails(gameObj) {
    detailImage.src = gameObj.image;
    detailTitle.textContent = gameObj.name;
    detailHighScore.textContent = gameObj.high_score;
  }

function submitHighScore() {
  highScoreForm.addEventListener('submit', (event) => {
    event.preventDefault();
    detailHighScore.textContent = scoreInput.value
  })
}

submitHighScore()
