import React from 'react'
import { Grid } from '@material-ui/core'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import MetricCard from 'react-metric-card'
import 'react-metric-card/dist/index.css'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid'
import { WiDaySunnyOvercast } from 'weather-icons-react'
import {
  iconCodes,
  trendCodes,
  spinnerCodes,
  cardBgColorCodes,
  titleCodes,
  valueCodes,
  cardClickCodes
} from './sampleCodes/sampleCodes'

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

  return (
    <div className='App'>
      <h1>Live demonstrations of react-metric-component</h1>
      <a href='https://www.npmjs.com/package/react-metric-card'>
        see NPM library for this react component
      </a>{' '}
      <br />
      <a href='https://github.com/Keetmalin/react-metric-card'>
        see GitHub repository for this react component
      </a>
      <br />
      <br />
      <br />
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
      <br /> <hr />
      <div>
        <h2>
          Simple Usage with Title, Value and Trend object. (All others settings
          are default)
        </h2>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
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
      </div>
      <br /> <hr />
      <div>
        <h2>
          Simple Usage with fetching set to true (All others settings are
          default)
        </h2>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MetricCard title='SERVICE SUCCESS RATE PERCENTAGE' fetching={true} />
        </Grid>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          <SyntaxHighlighter language='javascript' style={docco}>
            {codeSample2}
          </SyntaxHighlighter>
        </Grid>
      </div>
      <br /> <hr />
      <div>
        <h2>
          Simple Usage with Error Message (All others settings are default)
        </h2>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <MetricCard
            title='SERVICE SUCCESS RATE PERCENTAGE'
            fetching={false}
            errorMessage='An Error Occured while fetching the metric data'
          />
        </Grid>
        <Grid item lg={6} sm={6} xl={3} xs={12}>
          <SyntaxHighlighter language='javascript' style={docco}>
            {codeSample3}
          </SyntaxHighlighter>
        </Grid>
      </div>
      <br /> <hr />
      <div>
        <h2>
          Clickable Card Component with on-click function (All others settings
          are default)
        </h2>
        <Grid container spacing={2}>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <MetricCard
              title='CLICK ME TO SEE ANIMATION ON CARD'
              fetching={false}
              cardClick={true}
              value={'89.04%'}
              trend={{
                slope: 1,
                description: 'Compared to last week',
                value: '0.5%'
              }}
            />
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <MetricCard
              title='CLICK ME TO SEE FUNCTION CALL'
              fetching={false}
              cardClick={true}
              cardClickFunction={() => {
                alert('Card was clicked')
              }}
              value={'89.04%'}
              trend={{
                slope: 1,
                description: 'Compared to last week',
                value: '0.5%'
              }}
            />
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {cardClickCodes.noFunction}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {cardClickCodes.withFunction}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
      </div>
      <br /> <hr />
      <div>
        <h2>Changing the Title Color | Size | Font Family</h2>
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
              {titleCodes.titleColor}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {titleCodes.titleSize}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {titleCodes.titleFamily}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
      </div>
      <br /> <hr />
      <div>
        <h2>Changing the Value Color | Size | Font Family</h2>
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
              {valueCodes.valueColor}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {valueCodes.valueSize}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {valueCodes.valueFamily}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
      </div>
      <br /> <hr />
      <div>
        <h2>Changing the Spinner Color | Size | Thickness</h2>
        <Grid container spacing={2}>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <MetricCard
              title='CHANGING SPINNER COLOR'
              spinnerColor='#00ffff'
              fetching={true}
            />
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <MetricCard
              title='CHANGING SPINNER SIZE'
              spinnerSize={55}
              fetching={true}
            />
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <MetricCard
              title='CHANGING SPINNER THICKNESS'
              spinnerThickness={10}
              fetching={true}
            />
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {spinnerCodes.spinnerColor}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {spinnerCodes.spinnerSize}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {spinnerCodes.spinnerThickness}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
      </div>
      <br /> <hr />
      <div>
        <h2>
          Changing the Icon | its Color and Background Color | Height and Width
          | And Border Radius
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
              title='ICON CHANGE EXAMPLE'
              fetching={false}
              error={null}
              icon={<FlipCameraAndroidIcon />}
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
              title='ICON COLOR AND BG COLOUR CHANGE'
              fetching={false}
              error={null}
              iconColor='blue'
              iconBgColor='yellow'
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
              title='ICON HEIGHT AND WIDTH CHANGE'
              fetching={false}
              error={null}
              iconHeight='50px'
              iconWidth='100px'
            />
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {iconCodes.iconChange}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {iconCodes.iconColorChange}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {iconCodes.iconHeightWidthChange}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <MetricCard
              value={'89.04%'}
              trend={{
                slope: 1,
                description: 'Compared to last week',
                value: '0.5%'
              }}
              title='ICON BORDER RADIUS TO MAKE IS SQUARE'
              fetching={false}
              error={null}
              iconBorderRadius='0%'
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
              title='ICON BORDER RADIUS TO MAKE IS LESS SQUARE'
              fetching={false}
              error={null}
              iconBorderRadius='20%'
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
              title='ICON BORDER RADIUS TO MAKE IS CIRCLE'
              fetching={false}
              error={null}
              iconBorderRadius='90%'
            />
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {iconCodes.iconSquareBorderRadius}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {iconCodes.iconRoundedCornerBorderRadius}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {iconCodes.iconCircleBorderRadius}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
      </div>
      <br /> <hr />
      <div>
        <h2>
          Changing the Trend Object to Show Increase and Decrese conditions
        </h2>

        <Grid container spacing={2}>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <MetricCard
              value={'89.04%'}
              trend={{
                slope: 1,
                description: 'Increased compared to last week',
                value: '5.2%'
              }}
              title='INCREASING TREND DEMO'
              fetching={false}
              error={null}
            />
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <MetricCard
              value={'89.04%'}
              trend={{
                slope: -1,
                description: 'Decreased compared to last week',
                value: '3.4%'
              }}
              title='DECREASING TREND DEMO'
              fetching={false}
              error={null}
            />
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {trendCodes.increasingTrend}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {trendCodes.decreasingTrend}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
      </div>
      <br /> <hr />
      <div>
        <h2>Changing the Background Color of the Metric Card</h2>

        <Grid container spacing={2}>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <MetricCard
              value={'89.04%'}
              trend={{
                slope: 1,
                description: 'Increased compared to last week',
                value: '5.2%'
              }}
              title='INCREASING TREND DEMO'
              fetching={false}
              error={null}
              cardBgColor='blue'
            />
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <MetricCard
              value={'89.04%'}
              trend={{
                slope: -1,
                description: 'Decreased compared to last week',
                value: '3.4%'
              }}
              title='DECREASING TREND DEMO'
              fetching={false}
              error={null}
              cardBgColor='grey'
            />
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {cardBgColorCodes.blueBackground}
            </SyntaxHighlighter>
          </Grid>
          <Grid item lg={6} sm={6} xl={3} xs={12}>
            <SyntaxHighlighter language='javascript' style={docco}>
              {cardBgColorCodes.greyBackground}
            </SyntaxHighlighter>
          </Grid>
        </Grid>
      </div>
      <br /> <hr />
      <br />
    </div>
  )
}

export default App
