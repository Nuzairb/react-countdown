import React, {Component} from 'react'

export default class Countdown extends Component {
  constructor(props) {
    super(props)

    this.getRemainingTime()

    // this.state = {
    //   interval: this.getRemainingTime()
    // }
  }

  getRemainingTime() {
    let now = new Date,
        newYear = new Date(now.getFullYear() + 1, 0, 1)

    console.log(now, newYear)
  }

  render() {
    return (
      <section className="hero is-info is-bold is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              New Year is coming Up!
            </h1>
            <div className="section">
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Days</p>
                    <p className="title">3,456</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Hours</p>
                    <p className="title">123</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Minutes</p>
                    <p className="title">456K</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Seconds</p>
                    <p className="title">789</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
