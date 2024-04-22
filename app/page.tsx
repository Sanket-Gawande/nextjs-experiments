"use client"
import { Component, useEffect, useMemo } from 'react';
import './globals.css';
import Timer from './_a/Timer';
import { io } from 'socket.io-client';

let sample = "abcdef012356789"
function getRandomColor() {
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += sample[Math.round(Math.random() * 14)]
  }
  return color
}

class App extends Component {

  state: Readonly<{ color: string, size: string, price: number }> = {
    color: "#009577",
    size: "12AAA",
    price: 127
  }
  changeColor(color: string) {
    this.setState({ color: getRandomColor() });

  }
  changeSize() {
    this.setState({ size: "3xl" })
  }
  increasePrice() {
    this.setState({ price: this.state.price + 2 })
  }
  render() {

    return (
      <div style={{ padding: "1rem" }}>
        <h2>Stopwatch with Class Component</h2>
        <pre style={{ padding: '1rem 0' }}>
          {JSON.stringify(this.state, null, 4)}
        </pre>
        <main>
          <p style={{
            background: this.state.color,
            color: "white",
            padding: "1rem"
          }}>My color is {this.state.color}
          </p>
          <p>{this.state.size}</p>
          <aside style={{
            display: 'flex',
            gap: ".5rem",
            margin: '1rem 0'
          }}>
            <button onClick={() => this.changeColor("pink")}>Change Color</button>
            <button onClick={() => this.changeSize()}>Change Size</button>
            <button onClick={() => this.increasePrice()}>Increment</button>
          </aside>
          <Timer />
          <Socket />
        </main>
      </div>
    )
  }
}

export default App;

export function Socket() {
  const socket = useMemo(
    () => io('http://localhost:5000', { autoConnect: false }),
    [],
  );

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, [socket]);
  return <p>Socket  io component</p>
}