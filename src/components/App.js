import React from 'react'
import { Filter } from './Filter'
import { List } from './List';
import './App.css'

export const App = () => {
  return (
    <div>
      <h1>My TV Shows</h1>
      <Filter />
      <List />
    </div>
  )
}
