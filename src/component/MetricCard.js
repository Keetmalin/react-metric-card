import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Icon,
  Tooltip,
  CircularProgress,
  ButtonBase
} from '@material-ui/core'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined'
import ErrorIcon from '@material-ui/icons/Error'

const useStyles = makeStyles((theme) => ({
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
    height: '100%',
    width: '100%'
  },
  title: {
    fontWeight: 800,
    color: '#ff0000',
    font: 'Courier New'
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIconSuccess: {
    color: theme.palette.success.main
  },
  differenceIconError: {
    color: theme.palette.error.main
  },
  differenceValueSuccess: {
    color: theme.palette.success.main,
    marginRight: theme.spacing(1)
  },
  differenceValueError: {
    color: theme.palette.error.main,
    marginRight: theme.spacing(1)
  },
  error: {
    color: theme.palette.error.main
  }
}))

/**
 * This function generates the react components required to disaply the trend
 *
 * @param {object} trend This is an object which contains slope, description and value
 * @param {object} classes This contains the CSS classes from the main function
 */
const renderMetricTrend = (trend, classes) => {
  const { slope = 0, description = '' } = trend
  const text = (
    <React.Fragment>
      <Typography
        className={
          slope >= 0
            ? classes.differenceValueSuccess
            : classes.differenceValueError
        }
        variant='body2'
      >
        {trend.value || ''}
      </Typography>
      <Typography className={classes.caption} variant='caption'>
        {description || ''}
      </Typography>
    </React.Fragment>
  )
  return (
    <React.Fragment>
      {slope < 0 ? (
        <ArrowDownwardIcon className={classes.differenceIconError} />
      ) : (
        <ArrowUpwardIcon className={classes.differenceIconSuccess} />
      )}
      {text}
    </React.Fragment>
  )
}

const MetricCard = (props) => {
  const classes = useStyles()

  const {
    fetching,
    errorMessage,
    errorTooltip,
    value,
    spinnerColor,
    spinnerSize,
    spinnerThickness,
    title,
    titleColor,
    titleFontFamily,
    titleFontSize,
    valueColor,
    valueFontFamily,
    valueFontSize,
    trend,
    icon,
    iconBgColor,
    iconColor,
    iconBorderRadius,
    iconHeight,
    iconWidth,
    cardBgColor,
    cardClick,
    cardClickFunction
  } = props

  const customClasses = makeStyles((theme) => ({
    root: {
      backgroundColor: cardBgColor || theme.palette.primary.white,
      height: '100%',
      width: '100%'
    },
    spinner: {
      color: spinnerColor
    },
    title: {
      fontWeight: 800,
      color: titleColor,
      fontFamily: titleFontFamily,
      fontSize: titleFontSize
    },
    value: {
      color: valueColor,
      font: valueFontFamily,
      fontSize: valueFontSize
    },
    icon: {
      backgroundColor: iconBgColor || theme.palette.icon.primary,
      height: iconHeight || 56,
      width: iconWidth || 56,
      borderRadius: iconBorderRadius || '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: iconColor || theme.palette.white
    }
  }))()

  return (
    <Card className={clsx(customClasses.root)}>
      <ButtonBase
        className={classes.cardAction}
        onClick={cardClickFunction}
        disabled={!cardClick}
      >
        <CardContent>
          <Grid container justify='space-between'>
            <Grid item>
              <Typography
                className={customClasses.title}
                gutterBottom
                variant='body2'
              >
                {title}
              </Typography>
              <Typography variant='h3' className={customClasses.value}>
                {fetching ? '' : errorMessage ? '' : value}
              </Typography>
            </Grid>
            <Grid item>
              <Icon className={customClasses.icon}>
                {icon || <InsertChartIcon />}
              </Icon>
            </Grid>
          </Grid>
          <div className={classes.difference}>
            {fetching ? (
              <CircularProgress
                className={customClasses.spinner}
                size={spinnerSize}
                thickness={spinnerThickness}
              />
            ) : errorMessage ? (
              <React.Fragment>
                <Tooltip title={errorTooltip || errorMessage}>
                  <ErrorIcon color='error' />
                </Tooltip>
                <Typography variant='caption'>{errorMessage}</Typography>
              </React.Fragment>
            ) : (
              trend && renderMetricTrend(trend, classes)
            )}
          </div>
        </CardContent>
      </ButtonBase>
    </Card>
  )
}

MetricCard.propTypes = {
  title: PropTypes.string,
  fetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  errorTooltip: PropTypes.string,
  value: PropTypes.string,
  spinnerColor: PropTypes.string,
  spinnerSize: PropTypes.number,
  spinnerThickness: PropTypes.number,
  titleColor: PropTypes.string,
  titleFontFamily: PropTypes.string,
  titleFontSize: PropTypes.string,
  valueColor: PropTypes.string,
  valueFontFamily: PropTypes.string,
  valueFontSize: PropTypes.string,
  trend: PropTypes.object,
  icon: PropTypes.object,
  iconBgColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconBorderRadius: PropTypes.string,
  iconHeight: PropTypes.string,
  iconWidth: PropTypes.string,
  cardBgColor: PropTypes.string,
  cardClick: PropTypes.bool,
  cardClickFunction: PropTypes.func
}

export default MetricCard
