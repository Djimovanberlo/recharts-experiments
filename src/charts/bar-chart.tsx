import React from 'react'

import { BarChart, ReferenceLine, XAxis, YAxis, Bar } from 'recharts'
import { barData } from './data'

const BarGraph: React.FC = () => {
  const valueArray = barData.map(value => {
    return value.uv
  })
  const sum = valueArray.reduce((a, b) => a + b, 0)
  const avg = sum / valueArray.length

  return (
    <BarChart width={730} height={250} data={barData}>
      <XAxis tick={false} />
      <YAxis />
      <ReferenceLine y={avg} strokeWidth={2} isFront={true} />
      <Bar dataKey='uv' fill='#00BFB9' radius={[25, 25, 0, 0]} />
    </BarChart>
  )
}

export default BarGraph
