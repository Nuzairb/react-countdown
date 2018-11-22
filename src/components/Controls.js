import React from 'react'

const Controls = (props) =>
  <div className="field is-grouped is-grouped-centered">
    <p className="control">
      <a className="button is-danger is-outlined is-rounded">
        Pause
      </a>
    </p>
    <p className="control">
      <a className="button is-success is-outlined is-rounded">
        Resume
      </a>
    </p>
  </div>

export default Controls
