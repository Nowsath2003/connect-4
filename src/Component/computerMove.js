export const getRandomComputerMove = (gameBoard) => {
    let validMoves = [];

    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 0) {
            validMoves.push(i);
        }
    }

    let rndMove = Math.floor(Math.random() * validMoves.length);
    return validMoves[rndMove];
}

const getposition = (gameBoard, moveCheck) => {
    for (let check = 0; check < moveCheck.length; check++) {
        for (let i = 0; i < moveCheck[check].max; i += moveCheck[check].step) {
            let series = gameBoard[i + moveCheck[check].indexes[0]].toString() +
                gameBoard[i + moveCheck[check].indexes[1]].toString() +
                gameBoard[i + moveCheck[check].indexes[2]].toString() +
                gameBoard[i + moveCheck[check].indexes[3]].toString();

            switch (series) {
                case "1110":
                case "2220":
                    return i + moveCheck[check].indexes[3];

                case "1101":
                case "2202":
                    return i + moveCheck[check].indexes[2];
                
                case "1011":
                case "2022":
                    return i + moveCheck[check].indexes[1];

                case "0111":
                case "0222":
                    return i + moveCheck[check].indexes[0];

                default:
            }
        }
    }
    return -1;
};

export const getComputerMove = (gameBoard) => {
    let moveCheck = [
        {
            indexes: [0, 4, 8, 12],
            max: 4,
            step: 1
        },
        {
            indexes: [0, 1, 2, 3],
            max: 16,
            step: 4
        },
        {
            indexes: [0, 5, 10, 15],
            max: 16,
            step: 16
        },
        {
            indexes: [3, 6, 9, 12],
            max: 16,
            step: 16
        }
    ];

    let position = getposition(gameBoard,moveCheck);
    if(position>-1){
        return position;
    }
    return getRandomComputerMove(gameBoard); 
};