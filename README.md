# react-metric-card

> A metric card component that provides metric data with icons, spinning loaders and comparisons. A separate representation is available for errors occuring when fetching data for this component.

[![NPM](https://img.shields.io/npm/v/react-metric-card.svg)](https://www.npmjs.com/package/react-metric-card) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install --save react-metric-card
```

## Live Demonstration

For live demos of this component, please visit the below link.

http://keetmalin.github.io/react-metric-card

## What is this Component

![React Metric Card sample usage image](readme_images/react-metric-card-sample.png?raw=true "React Metric Card sample usage image")

This is a basic component that can be used in dashboards for disaplying various types of metrics related to the dashboard data. This is mainly built from components in Material UI, and I have made this component more flexible for anyone to use with different styling and flexibility. 

Constrol the width of this component, by adjusting the width of the container. Sample usage on a dashboard is given below.

![React Metric Card Usage on a Dashboard](readme_images/react-metric-card-on-dashboard-example.png?raw=true "React Metric Card Usage on a Dashboard")

## Usage

A simple usage example is given below

```jsx
import React, { Component } from 'react'

import MetricCard from 'react-metric-card'
import 'react-metric-card/dist/index.css'

class Example extends Component {
  render() {
    return (
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
    );
  }
}
```

## API Documentation

This section exaplains the supported props and how to use each prop to make use of the component in a flexible manner.

To see demonstrations with code for how to use each of the following props, visit the following link.
http://keetmalin.github.io/react-metric-card

### Supported Props

-    `fetching (boolean)`: shows a loader when this is set to true. Fetching prop takes precendence over every other prop.

-    `errorMessage (string)`: this will be displayed as an error message.
-    `errorTooltip (string)`: this is a tooltip that will be displayed over the error message on mouse hover.
-    `value (string)`: This is the primary value that will be displayed in the center of the card
-    `valueColor (string)`: This decides the color of the text. (Eg: 'red', '#ffff00')
-    `valueFontFamily (string)`: This decides the font family of the text. (Eg: serif)
-    `valueFontSize (string)`: This decides the font size of the text. (Eg: 25px)
-    `spinnerColor (string)`: This is a custom color of the spinner. (Eg: 'red', '#ffff00')
-    `spinnerSize (number)`: This is the size of the spinner that accepts a number like '25'
-    `spinnerThickness (number)`: This is the thickness of the spinner that accepts a number like '25'
-    `title (string)`: This is the title shown at the top of the card. This will be displayed always, even when fetching is true or errorMessage is there.
-    `titleColor (string)`: This decides the color of the text. (Eg: 'red', '#ffff00')
-    `titleFontFamily (string)`: This decides the font family of the text. (Eg: serif)
-    `titleFontSize (string)`: This decides the font size of the text. (Eg: 25px)
-    `trend (object)`: This is an object that descibes the trend that is shown at the bottom of the card. This object needs to have the following three properties. (`slope` (Eg: -1 or 1), `description` (Eg: any text) and `value` (Eg: any text))
-    `icon (string)`: You can pass an actual icon component from MaterialUI or any other preferred component (Eg: <IconName />)
-    `iconBgColor (string)`: Icon background color. (Eg: 'red', '#ffff00')
-    `iconColor (string)`: Icon background color. (Eg: 'red', '#ffff00')
-    `iconBorderRadius (string)`: Icon Border radius. (Eg: 50%)
-    `iconHeight (string)`: The height of the icon element (Eg: 50px)
-    `iconWidth (string)`: The width of the icon element (Eg: 50px)
-    `cardBgColor` (String): The prop for setting a background color for the entire card. (Eg: 'red', '#ffff00')
-    `cardClick` (Boolean): This will enable the click functionality on the metric card component
-    `cardClickFunction` (Function): This is the function that will be executed when the card is clicked. For the card to be clickable, the `cardClick` prob should be set to `true`

## License

All contributions are welcome.

MIT © [keetmalin](https://github.com/keetmalin)
