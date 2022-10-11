import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Title from './title'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Title text="可视化简历平台" styles={{ color: 'blue' }}></Title>
          <div> Electron + React !</div>
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
