# Youtube link : https://www.youtube.com/watch?v=zFzPHa_WJLw

# Memory Game -React Hooks

The card memory game is a simple game to test the player’s memory. In a deck of paired cards, the player needs to select a matching pair in consecutive turns. The player wins the game when all matching pairs are selected.

## Rules and Logic

- We need a shuffled set of cards.
- There must be a pair of each card in our deck.
- The game must flip the cards clicked by the player.
- Maximum of two cards will show at a time.
- The game will handle matched and unmatched cards.
- Unmatched cards are flipped back after a short duration.
- Matched cards are removed from the deck.
- Every time a player selects a pair, the game will increment the current move count
- Once all pairs are found out, players sees a confirmation dialog with the score.
- Game provides a functionality to restart.

### Fisher–Yates shuffle

Please checkout the below link to understand the shuffle function in depth:
https://www.youtube.com/watch?v=tLxBwSL3lPQ&t=422s

### Dependencies

- npm install react-bootstrap bootstrap
- npm install classnames
- npm install @material-ui/core
- npm install react-icons
