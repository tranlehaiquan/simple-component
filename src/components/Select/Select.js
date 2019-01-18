import React, { Component } from 'react'

export default class Select extends Component {
  render() {
    return (
      <select className="sp-select">
        <option value="1">Value 1</option>
        <option value="2">Value 2</option>
        <option value="3">Value 3</option>
        <option value="4">Value 4</option>
        <option value="5">Value 5</option>
      </select>
    )
  }
}
