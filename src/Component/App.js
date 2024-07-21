import GameBoard from "./GameBoard";
import '../Game.css';
import Title from "./Title";

function App(){
    return(
        <div className="App-comp">
            <Title/>
            <GameBoard/>
        </div>
    )
}
export default App;