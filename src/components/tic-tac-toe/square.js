import './square.css';

export default function Square({value,onSquareClick, hasWon}){
    return (
            <button 
                className="square"                
                onClick={onSquareClick}
                style={{backgroundColor: hasWon ? 'antiquewhite': 'white', color: hasWon ? 'chocolate': 'black'}}
            >{value}</button>
    )
}