import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Paper} from '@material-ui/core'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    //marginRight: theme.spacing.unit * 2,
    //marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      //marginLeft: 0,
    }
  }
})

class PopularActions extends Component {
  componentWillReact() {
    console.log("PopularActions will rerender")
  }

  render() {
    const {classes, actionStore} = this.props

    return (
      <React.Fragment>
        {actionStore.isLoaded &&
          <React.Fragment>
            {actionStore.popularActions.map((action, i) => (
              <Paper key={i} className={classes.paper}>Item {i}</Paper>
            ))}
          </React.Fragment>}
      </React.Fragment>
    )
  }
}

export default inject('actionStore', 'acctStore')(withStyles(styles)(observer(PopularActions)))