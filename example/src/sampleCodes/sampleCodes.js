export const titleCodes = {
  titleColor: `
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
/>`,
  titleSize: `
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
/>`,
  titleFamily: `
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
/>`
}

export const valueCodes = {
  valueColor: `
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
/>`,
  valueSize: `
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
/>`,
  valueFamily: `
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
/>`
}

export const iconCodes = {
  iconChange: `
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
...
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
    icon={<FlipCameraAndroidIcon /> }
/>`,
  iconColorChange: `
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
/>`,
  iconHeightWidthChange: `
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
/>`,
  iconSquareBorderRadius: `
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
/>`,
  iconRoundedCornerBorderRadius: `
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
    iconBorderRadius='20%'
/>`,
  iconCircleBorderRadius: `
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
    iconBorderRadius='90%'
/>`
}

export const spinnerCodes = {
  spinnerColor: `
<MetricCard
    title='CHANGE VALUE COLOR'
    spinnerColor='#00ffff'
    fetching={true}
/>`,
  spinnerSize: `
<MetricCard
    title='CHANGE VALUE FONT SIZE'
    spinnerSize={55}
    fetching={true}
/>`,
  spinnerThickness: `
<MetricCard
    title='CHANGE VALUE FONT FAMILY'
    spinnerThickness={10}
    fetching={true}
/>`
}

export const trendCodes = {
  increasingTrend: `
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
/>`,
  decreasingTrend: `
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
/>`
}

export const cardBgColorCodes = {
  blueBackground: `
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
/>`,
  greyBackground: `
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
/>`
}

export const cardClickCodes = {
  noFunction: `
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
/>`,
  withFunction: `
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
/>`
}
