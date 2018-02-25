import Paper from 'material-ui/Paper'
import PropTypes from 'prop-types'
import React from 'react'
import Typography from 'material-ui/Typography'
import injectSheet from 'react-jss'

/* eslint-disable no-magic-numbers */
const sheet = ({ palette, spacing: { unit } }) => ({
  tile: {
    background: palette.background.paper,
    flex: 1,
    margin: 1 * unit,
    padding: 1.75 * unit,
    height: '100%',
  },
})
/* eslint-enable no-magic-numbers */

const Tile = ({ children, classes, title }) => (
  <Paper className={classes.tile}>
    <Typography variant="display1">{title}</Typography>
    {children}
  </Paper>
)

Tile.propTypes = {
  children: PropTypes.element.isRequired,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default injectSheet(sheet)(Tile)
