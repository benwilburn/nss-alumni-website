import { colors } from 'theme'
import PropTypes from 'prop-types'
import React from 'react'
import injectSheet from 'react-jss'

const sheet = {
  anchor: {
    backgroundColor: colors.accent,
    borderRadius: '.15rem',
    color: colors.white,
    padding: '.5rem .75rem',
    textDecoration: 'none',
  },
}

const LinkButton = ({ children, classes, url }) => (
  <a className={classes.anchor} href={url}>
    {children}
  </a>
)

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
}

export default injectSheet(sheet)(LinkButton)
