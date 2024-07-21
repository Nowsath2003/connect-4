import React, { useState } from "react";
import GameCircle from "./GameCircle";
import '../Game.css';
import Header from "./Header";
import Footer from "./Footer";
import PointsTable from "./PointsTable";
import { isWinner, isDraw } from "./winner";
import { getComputerMove } from "./computerMove";
import { NO_PLAYER,
            Player_1,
            Player_2,
            gameState_win,
            gameState_playing,
            gameState_draw,
            gameState_idle
 } from "./constants";




const GameBoard = () =>{
    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(Player_1);
    const [winPlayer, setWinPlayer] = useState(0);
    const [gameState, setGameState] = useState(gameState_idle);
    const [p1Point, setP1Point] = useState(0);
    const [p2Point, setP2Point] = useState(0);
    const [drawPoint, setDrawPoint] = useState(0);



    const newGame=()=>{
        setGameBoard(Array(16).fill(NO_PLAYER));
        setGameState(gameState_idle);
    }

    const initGame = ()=> {
        setGameBoard(Array(16).fill(NO_PLAYER));
        setCurrentPlayer(Player_1);
        setGameState(gameState_playing)
    }

    const initBoard = ()=>{
        const circles = [];
        for(let i=0;i<16;i++){
            circles.push(renderCircle(i));
        }
        return circles;
    }

    const suggestMove = ()=>{
        circleClicked(getComputerMove(gameBoard));
    }

    const circleClicked =(id)=>{
        if(gameState===gameState_idle){
            return;
        }
        if(gameBoard[id]!==0){
            return;
        }

        if(gameState ===gameState_win){
            return;
        }

        
        
        setGameBoard(prev => {
            return prev.map((circle, pos)=>{
                if(pos === id){
                    return currentPlayer;
                }
                return circle;
            })
        })
        if(isDraw(gameBoard, id, currentPlayer)){
            setGameState(gameState_draw);
            setDrawPoint(drawPoint+1)
        }
        if(isWinner(gameBoard,id,currentPlayer)){
            setWinPlayer(currentPlayer);
            setGameState(gameState_win);
            if(currentPlayer===Player_1){
                setP1Point(p1Point+1);
            }
            else{
                setP2Point(p2Point+1);
            }
        }

        

        setCurrentPlayer(currentPlayer===Player_1?Player_2:Player_1);
    }

    const renderCircle = (id) =>{
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }

    const resetGamePoint = ()=>{
        setGameBoard(Array(16).fill(NO_PLAYER));
        setGameState(gameState_idle);
        setP1Point(0);
        setP2Point(0);
        setDrawPoint(0);
    }
 
    return (
        <>
        <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer}/>
        <div className="gameBoard">
            {initBoard()} 
        </div>
        <PointsTable resetPoint={resetGamePoint} p1Point={p1Point} p2Point={p2Point} drawPoint={drawPoint}/>
        <Footer gameState={gameState} onNewGameClick={newGame} onSuggestClick={suggestMove} onStartGame={initGame}/>
        </>
    )
}

export default GameBoard;