import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

import Component from './component/MetricCard'

export const MetricCard = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  )
}

export default MetricCard
