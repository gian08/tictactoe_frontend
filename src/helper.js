import axios from 'axios'

const findWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let point = 0;
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return (axios.post('http://localhost:5000/api/winner/', {
                player: squares[a],
                points: point + 1,
            }), squares[a]
            )
        }
        else if (!squares.includes(null)) {
            return 'Draw';
        }

    }
    return null;

}

export default findWinner;
