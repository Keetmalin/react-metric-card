import React from 'react'
import { Grid } from '@material-ui/core'

import MetricCard from 'react-metric-card'
import 'react-metric-card/dist/index.css'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { WiDaySunny, WiDaySunnyOvercast } from 'weather-icons-react';

const App = () => {
  const trend = {
    slope: 1,
    description: 'This is the description',
    value: 56
  }

  const trend2 = {
    slope: -1,
    description: 'This is the description',
    value: 56
  }

  return (
    <div className='App'>
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MetricCard
            value={'12%'}
            trend={trend}
            title='ERROR RATE BASED - CREDIT SCORE'
            fetching={false}
            error={null}
            fetchFunction={() => {}}
            spinnerColor='inherit'
            icon={<AccessAlarmIcon />}
            // valueFontSize={'20px'}
            // titleFontSize={'20px'}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MetricCard
            value={'12%'}
            trend={trend2}
            title='ERROR RATE BASED - CREDIT SCORE'
            fetching={false}
            error={null}
            fetchFunction={() => {}}
            spinnerColor='inherit'
            icon={<WiDaySunnyOvercast />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MetricCard
            value={'12%'}
            trend={trend}
            title='ERROR RATE BASED - CREDIT SCORE'
            fetching={true}
            error={'null'}
            fetchFunction={() => {}}
            spinnerColor='#ff0000'
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MetricCard
            value={'12%'}
            trend={trend}
            title='ERROR RATE BASED - CREDIT SCORE'
            fetching={false}
            error={'An Error Occurred when fetching data'}
            fetchFunction={() => {}}
            spinnerColor='inherit'
            // errorIcon={<WiDaySunnyOvercast />}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
