import React from 'react'
import './App.css'
import SimpleTabs from './Components/Tabs'
import GospelDashboard from './GospelDashboard'
import GospelTracker from './GospelTracker'

function Gospel(props) {
  return (
    <div>
      <SimpleTabs
        dashboard={<GospelDashboard stats={props.stats} />}
        tracker={<GospelTracker user={props.user} />}
      />
    </div>
  )
}

export default Gospel
