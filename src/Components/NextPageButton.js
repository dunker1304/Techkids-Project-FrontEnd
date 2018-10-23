import React, { Component } from 'react'

export default class NextPageButton extends Component {
  render() {
    return (
      <div className="text-right">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" className="btn  px-2">prev</button>
                <button type="button" className="btn  px-2">1</button>
                <button type="button" className="btn  px-2">2</button>
                <button type="button" className="btn  px-2">3</button>
                <button type="button" className="btn  px-2">4</button>
                <button type="button" className="btn  px-2">5</button>
                <button type="button" className="btn  px-2">6</button>
                <button type="button" className="btn  px-2">7</button>
                <button type="button" className="btn  px-2">8</button>
                <button type="button" className="btn  px-2">next</button>
            </div>
        </div>
      </div>
    )
  }
}
