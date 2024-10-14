export default function calculateWinner(squares) {
    const winLines = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ]
    for(let i=0; i<winLines.length; i++){
        const [a,b,c] = winLines[i];
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
            return [squares[a],[a,b,c]];
        }
    }
    return null;
}