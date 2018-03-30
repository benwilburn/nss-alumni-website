import { aboutPageNavigated } from 'data/navigation'
import { connect } from 'react-redux'
import BoardListing from 'containers/BoardListingFromState'
import MissionStatement from 'components/MissionStatement'
import PropTypes from 'utils/propTypes'
import React, { Component } from 'react'
import Typography from 'material-ui/Typography'
import injectSheet from 'react-jss'

/* eslint-disable no-magic-numbers */
const styles = ({ palette, spacing }) => ({
  statement: {
    padding: spacing.unit * 2,
  },
  meetBar: {
    background: palette.primary.main,
    color: palette.getContrastText(palette.primary.main),
    textAlign: 'center',
    padding: spacing.unit,
  },
})
/* eslint-enable no-magic-numbers */

class AboutPage extends Component {
  componentWillMount() {
    this.props.dispatch(aboutPageNavigated())
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <MissionStatement className={classes.statement} />
        <Typography className={classes.meetBar} variant="title">
          MEET THE BOARD
        </Typography>
        <BoardListing />
      </div>
    )
  }
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const AboutPageStyled = injectSheet(styles)(AboutPage)
export default connect()(AboutPageStyled)