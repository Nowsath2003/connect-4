import React from 'react'
import { gameState_draw, gameState_idle, gameState_playing, gameState_win } from './constants';

const Header = (props) => {
    const header_text = () => {
        switch (props.gameState) {
            case gameState_idle:
                return <div className='header-text'>let's play!!</div>
                
            case gameState_win:
                return <div className='header-text'>Player {props.winPlayer} wins</div>


            case gameState_playing:
                return <div className='header-text'>Player {props.currentPlayer} turn</div>

            case gameState_draw:
                return <div className='header-text'>Match Draw</div>

            default:

        }
    }
    return (
        <div className='header'>
            {header_text()}
        </div>
    )
}

export default Header;