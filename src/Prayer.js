import React from 'react'
import './App.css'
import SimpleTabs from './Components/Tabs'
import PrayerDashboard from './PrayerDashboard'
import PrayerTracker from './PrayerTracker'

function Prayer() {
  return (
    <div>
      <SimpleTabs dashboard={<PrayerDashboard />} tracker={<PrayerTracker />} />
    </div>
  )
}

export default Prayer
