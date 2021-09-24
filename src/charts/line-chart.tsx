import React from 'react'

import { LineChart, ReferenceLine, XAxis, YAxis, Line } from 'recharts'
import { lineData } from './data'

const LineGraph: React.FC = () => {
  const valueArray = lineData.map(value => {
    return value.uv
  })
  const sum = valueArray.reduce((a, b) => a + b, 0)
  const avg = sum / valueArray.length
  return (
    <LineChart width={730} height={250} data={lineData}>
      <XAxis tick={false} />
      <YAxis />
      <ReferenceLine y={avg} isFront={true} />
      <Line type='natural' dataKey='uv' stroke='#FB7558' strokeWidth={3} dot={false} />
    </LineChart>
  )
}

export default LineGraph
