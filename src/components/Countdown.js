import React, {Component} from 'react'
import moment from 'moment'
import Controls from './Controls'

export default class Countdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      duration: this.getRemainingTime(),
      paused: false
    }
  }

  componentDidMount() {
    this.resume()
  }

  componentWillUnmount() {
    this.pause()
  }

  getRemainingTime() {
    let now = moment(),
        newYear = moment({year: now.year() + 1}),
        diff = newYear.diff(now)

    return moment.duration(diff)
  }

  handlePausedToggle = () => {
    this.setState((prevState, props) => {
      const paused = !prevState.paused

      if (paused) {
        this.pause()
      } else {
        this.resume()
      }

      return {
        paused
      }
    })
  }

  pause() {
    clearInterval(this.interval)
  }

  resume() {
    this.interval = setInterval(() => {
      this.setState({
        duration: this.getRemainingTime()
      })
    }, 1000)
  }

  render() {
    const { duration, paused } = this.state
    return (
      <section className="hero is-dark is-bold is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              New Year is coming Up!
            </h1>
            <section className="section">
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title">{Math.floor(duration.asDays())}</p>
                    <p className="heading">Days</p>
                </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title">{duration.hours().toString().padStart(2, '0')}</p>
                    <p className="heading">Hours</p>
                </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title">{duration.minutes().toString().padStart(2, '0')}</p>
                    <p className="heading">Minutes</p>
                </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="title">{duration.seconds().toString().padStart(2, '0')}</p>
                    <p className="heading">Seconds</p>
                </div>
                </div>
              </nav>
            </section>
            <Controls paused={paused} onPausedToggle={this.handlePausedToggle}/>
          </div>
        </div>
      </section>
    )
  }
}
