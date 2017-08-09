import React from 'react'
import Tile from 'components/Tile'
import Header from 'components/Header'
import Donate from 'components/Donate'
import injectSheet from 'react-jss'

const sheet = {
  app: {
    'text-align': 'left',
    'margin': '0 2.5rem',
  },

}

const App = ({ classes }) => (
  <div className={classes.app}>
    <Header />
    <Tile>
      <Donate/>
    </Tile>
  </div>
)

export default injectSheet(sheet)(App)
