import { Component, ReactNode } from "react";

class Timer extends Component {
  constructor(props: {}) {
    super(props)
    this.getData()
  }
  getData() {
    console.log('will fetch some data before component laods')
  }
  state = {
    secs: 0,
    minutes: 0,
    time: 0,
    active: false
  }
  formatTime(time: number): string {
    return `${Math.floor(time / 60)}:${time % 60}`
  }

  start() {
    this.setState({ time: this.state.minutes * 60 + Number(this.state.secs) })
    let intervalID: any;
    intervalID = setInterval(() => {
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 })
      }
      else clearInterval(intervalID)
    }, 1000)
  }
  reset() {
    this.setState({ minutes: 0, secs: 0, time: 0 })
  }
  pauseResume() {
  }

  componentDidMount(): void {
    console.log('component mounted')
  }
  render(): ReactNode {
    return <main style={{ padding: "2rem", background: "#eee", color: "black", border: "2px solid #009875" }}>
      <p>Stopwatch</p>
      <div style={{
        display: "flex",
        gap: ".5rem",
        marginBottom: ".5rem"
      }}>
        <input value={this.state.minutes} onChange={e => this.setState({ minutes: e.target.value })} type="number" placeholder="Enter Minutes" />
        <input value={this.state.secs} onChange={e => this.setState({ secs: e.target.value })} type="number" placeholder="Enter Seconds" />
      </div>
      <div style={{
        display: "flex",
        gap: ".5rem"
      }}>
        <button onClick={() => this.start()}>Start</button>
        <button onClick={() => this.reset()}>Reset</button>
        <button onClick={() => this.pauseResume()}>Pause/Resume</button>
      </div>
      <br />
      <h3>{this.formatTime(this.state.time)}</h3>
    </main>
  }
}

export default Timer