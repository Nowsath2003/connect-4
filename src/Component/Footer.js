import React from 'react'
import { gameState_draw, gameState_playing, gameState_win } from './constants';

const Footer = ({ gameState, onNewGameClick, onSuggestClick, onStartGame }) => {

  const footerButton = () => {

    if (gameState === gameState_draw || gameState === gameState_win) {
      return <button onClick={onNewGameClick}>New Game</button>

    }
    else if (gameState === gameState_playing) {
      return <><button onClick={onNewGameClick}>New Game</button>
        <button onClick={onSuggestClick}>Suggest</button>
      </>
    }
    else if (gameState === gameState_playing && gameState !== gameState_draw) {
      return <button onClick={onSuggestClick}>Suggest</button>
    }
    else {
      return <button onClick={onStartGame}>Start Game</button>
    }
  }


  return (
    <div className='footer'>
      {footerButton()}
    </div>
  )
}

export default Footer;