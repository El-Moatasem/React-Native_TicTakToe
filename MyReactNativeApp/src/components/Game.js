import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Styles are defined using StyleSheet.create
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 15,
    marginBottom: 16,
    width: 80,
    height: 40,
    backgroundColor: '#8acaca',
    color: 'white',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

function Square({ value, onClick }) {
  return (
    <TouchableOpacity style={styles.square} onPress={onClick}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (winner || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>{status}</Text>
      <TouchableOpacity style={styles.button} onPress={resetBoard}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
      <View style={styles.board}>
        <View style={styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
    </View>
  );
}

function Game() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Board />
    </View>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
