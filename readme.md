# Tic Tac Toe Game

A simple Tic Tac Toe game built with React.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://tictactoe-ester.netlify.app/">
    <img src="public/game-logo.png" alt="Logo" height="80">
  </a>
  <h1 align="center">Tic-Tac-Toe</h1>

  <p align="center">
    <a href="https://tictactoe-ester.netlify.app/">View Demo</a>
  </p>
</div>

## Features

- Play as X or O against another player
- Switch between players after each turn
- Display the current player's name and symbol
- Show the game board and update it after each turn
- Check for winning combinations and declare a winner
- Handle draws when all squares are filled and no player has won
- Allow players to change their names
- Restart the game from the beginning

## Components

- **App.js**: The main application component that renders the game container, players, game board, and log.
- **Player.js**: A component that represents a player, displaying their name and symbol.
- **GameBoard.js**: A component that renders the Tic Tac Toe game board and handles square selections.
- **Log.js**: A component that displays the game's turn history.
- **GameOver.js**: A component that displays the game over message and restart button.

## Utilities

- **deriveActivePlayer.js**: A utility function that determines the current active player based on the game turns.
- **deriveGameBoard.js**: A utility function that derives the current game board state from the game turns.
- **deriveWinner.js**: A utility function that checks for winning combinations and returns the winner.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/EsterMn3/TicTacToe-Reactjs.git

   ```

2. Install dependencies using npm
   npm install

3. Start the development server using npm
   ``npm start

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like
