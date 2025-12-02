import { useState } from 'react';

type PieceType = 'K' | 'Q' | 'R' | 'B' | 'N' | 'P' | 'k' | 'q' | 'r' | 'b' | 'n' | 'p' | '';

const initialBoard: PieceType[][] = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

const pieceSymbols: Record<string, string> = {
  'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
  'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟'
};

function ChessBoard() {
  const [board] = useState<PieceType[][]>(initialBoard);
  const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(null);

  const handleSquareClick = (row: number, col: number) => {
    if (selectedSquare) {
      setSelectedSquare(null);
    } else if (board[row][col]) {
      setSelectedSquare([row, col]);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-amber-900 p-4 rounded-lg shadow-2xl">
        <div className="grid grid-cols-8 gap-0 border-4 border-amber-950">
          {board.map((row, rowIndex) =>
            row.map((piece, colIndex) => {
              const isLight = (rowIndex + colIndex) % 2 === 0;
              const isSelected = selectedSquare?.[0] === rowIndex && selectedSquare?.[1] === colIndex;

              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                  className={`w-12 h-12 flex items-center justify-center text-3xl transition-all hover:brightness-110 ${
                    isLight ? 'bg-amber-100' : 'bg-amber-800'
                  } ${isSelected ? 'ring-4 ring-yellow-400' : ''}`}
                >
                  {piece && (
                    <span className={piece === piece.toUpperCase() ? 'text-slate-700' : 'text-slate-900'}>
                      {pieceSymbols[piece]}
                    </span>
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
      <p className="text-white mt-4 text-sm">Interactive Chess Demo</p>
    </div>
  );
}

export default ChessBoard;
