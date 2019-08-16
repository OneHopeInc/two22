import React from 'react'
import './App.css'
import SimpleTabs from './Components/Tabs'
import PrayerDashboard from './PrayerDashboard'
import PrayerTracker from './PrayerTracker'

function Prayer(props) {
  return (
    <div>
      <SimpleTabs
        dashboard={<PrayerDashboard stats={props.statistics} />}
        tracker={<PrayerTracker user={props.user} />}
      />
    </div>
  )
}

export default Prayer
