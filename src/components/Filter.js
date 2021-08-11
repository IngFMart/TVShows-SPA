import React from 'react'
import './Filter.css'

export const Filter = () => {
  return (
    <div id="filter">
      <div>
        <input type="text" placeholder="Type to filter..."></input>
      </div>
      <div>
        <button type="button">View Favorites</button>
      </div>
    </div>
  )
}
