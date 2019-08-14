import React from 'react'
import './App.css'
import SimpleTabs from './Components/Tabs'
import GospelDashboard from './GospelDashboard'
import GospelTracker from './GospelTracker'

function Gospel(props) {
  console.log(props)
  return (
    <div>
      <SimpleTabs dashboard={<GospelDashboard />} tracker={<GospelTracker />} />
    </div>
  )
}

export default Gospel
