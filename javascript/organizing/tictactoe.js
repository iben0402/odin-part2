const Player = (name, marker) => {
    return { name, marker };
  };
  
  const Gameboard = (() => {
    const board = new Array(9).fill('');
  
    const getBoard = () => board;
  
    const isSpotTaken = (index) => board[index] !== '';
  
    const placeMarker = (index, marker) => {
      if (!isSpotTaken(index)) {
        board[index] = marker;
        return true;
      }
      return false;
    };
  
    const resetBoard = () => {
      for (let i = 0; i < board.length; i++) {
        board[i] = '';
      }
    };
  
    return { getBoard, placeMarker, resetBoard };
  })();
  
  const Game = (() => {
    let currentPlayer;
    let players = [];
    let gameOver = false;
  
    const display = document.querySelector('.container');
    const restartButton = document.createElement('button');
  
    const createPlayers = () => {
      const player1 = Player('Player 1', 'X');
      const player2 = Player('Player 2', 'O');
      players.push(player1, player2);
      currentPlayer = player1;
    };
  
    const switchPlayer = () => {
      currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };
  
    const checkForWin = (marker) => {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]           // diagonals
      ];
  
      return winPatterns.some(pattern =>
        pattern.every(index => Gameboard.getBoard()[index] === marker)
      );
    };
  
    const checkForTie = () => {
      return Gameboard.getBoard().every(marker => marker !== '');
    };
  
    const endGame = (message) => {
      gameOver = true;
      display.textContent = message;
      display.appendChild(restartButton);
    };
  
    const renderBoard = () => {
      display.innerHTML = '';
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        display.appendChild(cell);
      }
    };

    const updateCurrentPlayerInfo = () => {
        const currentPlayerInfo = document.getElementById('current-player-info');
        currentPlayerInfo.textContent = `Now plays: ${currentPlayer.marker}`;
    };
  
    const handleClick = (e) => {
      const index = parseInt(e.target.dataset.index);
      if (!isNaN(index) && !gameOver) {
        if (Gameboard.placeMarker(index, currentPlayer.marker)) {
          e.target.textContent = currentPlayer.marker;
  
          if (checkForWin(currentPlayer.marker)) {
            endGame(`${currentPlayer.name} wins!`);
          } else if (checkForTie()) {
            endGame("It's a tie!");
          } else {
            switchPlayer();
          } if (!gameOver) {
            updateCurrentPlayerInfo();
          }
        }
      }
    };
  
    const init = () => {
      createPlayers();
      renderBoard();
      display.addEventListener('click', handleClick);
      restartButton.textContent = 'Restart';
      restartButton.addEventListener('click', resetGame);
    };
  
    const resetGame = () => {
      Gameboard.resetBoard();
      display.innerHTML = '';
      display.appendChild(restartButton);
      restartButton.remove();
      gameOver = false;
      renderBoard();
      updateCurrentPlayerInfo();
    };
  
    return { init };
  })();
  
  document.addEventListener('DOMContentLoaded', Game.init);
  