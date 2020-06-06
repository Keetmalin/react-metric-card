import React from 'react'
import { Grid } from '@material-ui/core'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import MetricCard from 'react-metric-card'
import 'react-metric-card/dist/index.css'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import { WiDaySunny, WiDaySunnyOvercast } from 'weather-icons-react'

const App = () => {
  const trend = {
    slope: 1,
    description: 'This is the description',
    value: 56
  }

  const trend2 = {
    slope: -1,
    description: 'Compared to last smoke test',
    value: '34 mins'
  }

  const codeSample1 = `<MetricCard
  value={'89.04%'}
  trend={{
    slope: 1,
    description: 'Compared to last week',
    value: '0.5%'
  }}
  title='SERVICE SUCCESS RATE PERCENTAGE'
  fetching={false}
  error={null}
/>`

  const codeSample2 = `<MetricCard
title='SERVICE SUCCESS RATE PERCENTAGE'
fetching={true}
/>`

const codeSample3 = `<MetricCard
  value={'89.04%'}
  trend={{
    slope: 1,
    description: 'Compared to last week',
    value: '0.5%'
  }}
  title='SERVICE SUCCESS RATE PERCENTAGE'
  fetching={false}
  error={null}
/>`

const codeSample4 = `<MetricCard
value={'89.04%'}
trend={{
  slope: 1,
  description: 'Compared to last week',
  value: '0.5%'
}}
title='CHANGE TITLE FONT SIZE'
titleFontSize='20px'
fetching={false}
error={null}
/>`

const codeSample5 = `<MetricCard
value={'89.04%'}
trend={{
  slope: 1,
  description: 'Compared to last week',
  value: '0.5%'
}}
title='CHANGE TITLE FONT SIZE'
titleFontSize='20px'
fetching={false}
error={null}
/>`

const codeSample6 = `<MetricCard
value={'89.04%'}
trend={{
  slope: 1,
  description: 'Compared to last week',
  value: '0.5%'
}}
title='CHANGE TITLE FONT FAMILY'
titleFontFamily='sansserif'
fetching={false}
error={null}
/>`

const codeSample7 = `<MetricCard
value={'89.04%'}
trend={{
  slope: 1,
  description: 'Compared to last week',
  value: '0.5%'
}}
title='CHANGE VALUE COLOR'
valueColor='#00ffff'
fetching={false}
error={null}
/>`

const codeSample8 = `<MetricCard
value={'89.04%'}
trend={{
  slope: 1,
  description: 'Compared to last week',
  value: '0.5%'
}}
title='CHANGE VALUE FONT SIZE'
valueFontSize='30px'
fetching={false}
error={null}
/>`

const codeSample9 = `<MetricCard
value={'89.04%'}
trend={{
  slope: 1,
  description: 'Compared to last week',
  value: '0.5%'
}}
title='CHANGE VALUE FONT FAMILY'
valueFontFamily='sansserif'
fetching={false}
error={null}
/>`

const codeSample10 = `<MetricCard
title='CHANGE VALUE COLOR'
spinnerColor='#00ffff'
fetching={true}
/>`

const codeSample11 = `<MetricCard
title='CHANGE VALUE FONT SIZE'
spinnerSize={55}
fetching={true}
/>`

const codeSample12 = `<MetricCard
title='CHANGE VALUE FONT FAMILY'
spinnerThickness={10}
fetching={true}
/>`


  return (
    <div className='App'>
      <h1>Live demonstrations of react-metric-component</h1>
      <a href='https://www.npmjs.com/package/react-metric-component'>
        see NPM library for this react component
      </a>{' '}
      <br />
      <a href='https://github.com/Keetmalin/react-metric-card'>
        see GitHub repository for this react component
      </a>

      <br /><br /><br />

      <Grid container spacing={2}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MetricCard
            value={'12%'}
            trend={{
              slope: 1,
              description: 'This is the description',
              value: '56%'
            }}
            title='TIME CONSUMPTION BY SMOKE TEST'
            fetching={false}
            error={null}
            fetchFunction={() => {}}
            spinnerColor='inherit'
            icon={<WiDaySunnyOvercast />}
            // valueFontSize={'20px'}
            // titleFontFamily={'serif'}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MetricCard
            value={'233 mins'}
            trend={trend2}
            title='TIME CONSUMPTION BY SMOKE TEST'
            fetching={false}
            error={null}
            fetchFunction={() => {}}
            spinnerColor='inherit'
            icon={<AccessAlarmIcon />}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MetricCard
            value={'12%'}
            trend={trend}
            title='TIME CONSUMPTION BY SMOKE TEST'
            fetching={true}
            error={'null'}
            fetchFunction={() => {}}
            spinnerColor='#ff0000'
            // spinnerSize={100}
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MetricCard
            value={'12%'}
            trend={trend}
            title='TIME CONSUMPTION BY SMOKE TEST'
            fetching={false}
            errorMessage={'An Error Occurred when fetching data'}
            fetchFunction={() => {}}
            spinnerColor='inherit'
            // errorIcon={<WiDaySunnyOvercast />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          <MetricCard
            value={'12%'}
            trend={{
              slope: 1,
              description: 'This is the description',
              value: '56%'
            }}
            title='TIME CONSUMPTION BY SMOKE TEST'
            fetching={false}
            error={null}
            fetchFunction={() => {}}
            spinnerColor='inherit'
            icon={<WiDaySunnyOvercast />}
            // valueFontSize={'20px'}
            // titleFontFamily={'serif'}
          />
        </Grid>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          <MetricCard
            value={'233 mins'}
            trend={trend2}
            title='TIME CONSUMPTION BY SMOKE TEST'
            fetching={false}
            error={null}
            fetchFunction={() => {}}
            spinnerColor='inherit'
            icon={<AccessAlarmIcon />}
          />
        </Grid>
      </Grid>
      <h2>
        Simple Usage with Title, Value and Trend object. (All others settings
        are default)
      </h2>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <MetricCard
          value={'89.04%'}
          trend={{
            slope: 1,
            description: 'Compared to last week',
            value: '0.5%'
          }}
          title='SERVICE SUCCESS RATE PERCENTAGE'
          fetching={false}
          error={null}
        />
      </Grid>
      <Grid item lg={6} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample1}
        </SyntaxHighlighter>
      </Grid>
      <hr />
      <h2>
        Simple Usage with fetching set to true (All others settings are default)
      </h2>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
        <MetricCard title='SERVICE SUCCESS RATE PERCENTAGE' fetching={true} />
      </Grid>
      <Grid item lg={6} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample2}
        </SyntaxHighlighter>
      </Grid>
      <hr />
      <h2>
        Simple Usage with Error Message (All others settings are default)
      </h2>
      <Grid item lg={3} sm={6} xl={3} xs={12}>
      <MetricCard
  title='SERVICE SUCCESS RATE PERCENTAGE'
  fetching={false}
  errorMessage='An Erro Occured while fetching the metric data'
/>
      </Grid>
      <Grid item lg={6} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample3}
        </SyntaxHighlighter>
      </Grid>
      <hr />

      <h2>
        Changing the Title Color | Size | Font Family
      </h2>

      <Grid container spacing={2}>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
      <MetricCard
          value={'89.04%'}
          trend={{
            slope: 1,
            description: 'Compared to last week',
            value: '0.5%'
          }}
          title='CHANGE TITLE COLOR'
          titleColor='#00ffff'
          fetching={false}
          error={null}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
      <MetricCard
          value={'89.04%'}
          trend={{
            slope: 1,
            description: 'Compared to last week',
            value: '0.5%'
          }}
          title='CHANGE TITLE FONT SIZE'
          titleFontSize='20px'
          fetching={false}
          error={null}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
      <MetricCard
          value={'89.04%'}
          trend={{
            slope: 1,
            description: 'Compared to last week',
            value: '0.5%'
          }}
          title='CHANGE TITLE FONT FAMILY'
          titleFontFamily='sansserif'
          fetching={false}
          error={null}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample4}
        </SyntaxHighlighter>
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample5}
        </SyntaxHighlighter>
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample6}
        </SyntaxHighlighter>
      </Grid>
      </Grid>
      

      <hr />

      <h2>
        Changing the Value Color | Size | Font Family
      </h2>

      <Grid container spacing={2}>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
      <MetricCard
          value={'89.04%'}
          trend={{
            slope: 1,
            description: 'Compared to last week',
            value: '0.5%'
          }}
          title='CHANGE VALUE COLOR'
          valueColor='#00ffff'
          fetching={false}
          error={null}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
      <MetricCard
          value={'89.04%'}
          trend={{
            slope: 1,
            description: 'Compared to last week',
            value: '0.5%'
          }}
          title='CHANGE VALUE FONT SIZE'
          valueFontSize='30px'
          fetching={false}
          error={null}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
      <MetricCard
          value={'89.04%'}
          trend={{
            slope: 1,
            description: 'Compared to last week',
            value: '0.5%'
          }}
          title='CHANGE VALUE FONT FAMILY'
          valueFontFamily='sansserif'
          fetching={false}
          error={null}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample7}
        </SyntaxHighlighter>
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample8}
        </SyntaxHighlighter>
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample9}
        </SyntaxHighlighter>
      </Grid>
      </Grid>

      <hr />


      <h2>
        Changing the Spinner Color | Size | Thickness
      </h2>

      <Grid container spacing={2}>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
      <MetricCard
          title='CHANGE VALUE COLOR'
          spinnerColor='#00ffff'
          fetching={true}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
      <MetricCard
          title='CHANGE VALUE FONT SIZE'
          spinnerSize={55}
          fetching={true}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
      <MetricCard
          title='CHANGE VALUE FONT FAMILY'
          spinnerThickness={10}
          fetching={true}
        />
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample10}
        </SyntaxHighlighter>
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample11}
        </SyntaxHighlighter>
      </Grid>
      <Grid item lg={4} sm={6} xl={3} xs={12}>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSample12}
        </SyntaxHighlighter>
      </Grid>
      </Grid>

      <hr />




      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
