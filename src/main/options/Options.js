import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InfoIcon from '@material-ui/icons/Info'


class Options extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    localeValue: PropTypes.string.isRequired,
    categoryValue: PropTypes.string.isRequired,
    delimitersValue: PropTypes.string.isRequired,
    onDelimitersChange: PropTypes.func.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    onLocaleChange: PropTypes.func.isRequired,
  }

  render() {
    const { classes, onDelimitersChange, delimitersValue } = this.props;

    const theme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: {
          light: '#ff5a36',
          main: '#ff0000',
          dark: '#c20000',
          contrastText: '#fff',
        },
      },
    })

    const localeDetails = (
      <ExpansionPanelDetails>
        <Typography>
          (TODO)
        </Typography>
      </ExpansionPanelDetails>
    )

    const categoryDetails = (
      <ExpansionPanelDetails>
        <Typography>
          (TODO)
        </Typography>
      </ExpansionPanelDetails>
    )

    const infoButton = (
      <InputAdornment position="end">
        <IconButton aria-label="Info about regular expressions"
          href='https://regexr.com/3t6pc'
          target='_blank'
        >
          <InfoIcon />
        </IconButton>
      </InputAdornment>
    )

    const delimitersDetails = (
      <ExpansionPanelDetails>
        <MuiThemeProvider theme={theme}>
          <TextField className={classes.textField}
            label="RegExp"
            onChange={(e) => onDelimitersChange(e.target.value)}
            value={delimitersValue}
            InputProps={{ endAdornment: infoButton, }} />
        </MuiThemeProvider>
      </ExpansionPanelDetails>
    )

    return (
      <div className={classes.root}>
        <ExpansionPanel disabled>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Language</Typography>
            <Typography className={classes.secondaryHeading}>
              (TODO) Change to get the best results for your search
            </Typography>
          </ExpansionPanelSummary>
          {localeDetails}
        </ExpansionPanel>
        <ExpansionPanel disabled>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Category</Typography>
            <Typography className={classes.secondaryHeading}>
              (TODO) For more accurate results (leave blank for a mixed search)
            </Typography>
          </ExpansionPanelSummary>
          {categoryDetails}
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Delimiters</Typography>
            <Typography className={classes.secondaryHeading}>
              Breaking characters for the introduced plain-text (regular expression)
            </Typography>
          </ExpansionPanelSummary>
          {delimitersDetails}
        </ExpansionPanel>
      </div>
    )
  }

  onTextFieldChange(e) {
    this.setState({ raw: e.target.value })
  }

  onSearch(raw) {
    this.props.onSearch({ rawText: raw })
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  textField: {
    width: '100%',
  },
})

export default withStyles(styles)(Options);
