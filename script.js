

document.addEventListener('DOMContentLoaded', function() {

  // Use buttons to toggle between views
  document.querySelector('#home').addEventListener('click', () => load_main());
  document.querySelector('#game-suguroku').addEventListener('click', () => start_game());
  document.querySelector('#do-not-press').addEventListener('click', () => bad());
  
  // By default, load the home page
  load_main();
});


function load_main() {

  document.querySelector('#home-page').style.display = 'block';
  document.querySelector('#game-page').style.display = 'none';
  document.querySelector('#bad-page').style.display = 'none';
}

function start_game() {

  document.querySelector('#home-page').style.display = 'none';
  document.querySelector('#game-page').style.display = 'block';
  document.querySelector('#bad-page').style.display = 'none';

  //load sprites
  document.querySelectorAll('.player-count').forEach(button => {
    button.addEventListener('click', function() {
      const numPlayers = parseInt(this.getAttribute('data-count'));
      setupPlayers(numPlayers);
    });
  });

  
}

function setupPlayers(num) {
  const gameBoard = document.querySelector('#game-board');

  // Remove any existing player sprites
  document.querySelectorAll('.player').forEach(player => player.remove());

  // Add new player sprites based on the number of players
  for (let i = 1; i <= num; i++) {
    const player = document.createElement('div');
    player.className = 'player';
    player.id = `player${i}`;
    player.style.backgroundColor = getPlayerColor(i); // Optional: different colors for each player
    player.style.top = '10px'; // Initial position, adjust as needed
    player.style.left = '10px'; // Initial position, adjust as needed
    gameBoard.appendChild(player);
  }
}

function getPlayerColor(playerNumber) {
  // Return different colors for different players
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  return colors[playerNumber - 1] || 'black'; // Default to black if too many players
}


function bad() {
  document.querySelector('#home-page').style.display = 'none';
  document.querySelector('#game-page').style.display = 'none';

  document.querySelector('#bad-page').style.display = 'block';

  document.querySelector('h1').style.zIndex = "-1";
  document.querySelector('button').style.zIndex = "-1";
}

                                                           const Qcards = [
                                                             "What food do you like?",
                                                             "What season do you like?",
                                                           ]
                                                            console.log(Qcards);
