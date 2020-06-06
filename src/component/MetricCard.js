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
  CircularProgress
} from '@material-ui/core'

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined'
import ErrorIcon from '@material-ui/icons/Error'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
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
    error,
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
    iconWidth
  } = props

  const customClasses = makeStyles((theme) => ({
    spinner: {
      color: spinnerColor
    },
    title: {
      fontWeight: 800,
      color: titleColor,
      font: titleFontFamily,
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
    <Card className={clsx(classes.root)}>
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
              {fetching ? '' : error ? '' : value}
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
              // color={spinnerColor}
              size={spinnerSize}
              thickness={spinnerThickness}
            />
          ) : error ? (
            <React.Fragment>
              <Tooltip title={errorTooltip || error}>
                <ErrorIcon color='error' />
              </Tooltip>
              <Typography variant='caption'>{error}</Typography>
            </React.Fragment>
          ) : (
            renderMetricTrend(trend, classes)
          )}
        </div>
      </CardContent>
    </Card>
  )
}

MetricCard.propTypes = {
  className: PropTypes.string
}

export default MetricCard
