import React from 'react'
import { Outlet } from 'react-router-dom'

const CareersLayouts = () => {
  return (
    <div>
      <div className="careers-layout">
        <h2>Careers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          quisquam.
        </p>
        <Outlet />
      </div>
    </div>
  )
}

export default CareersLayouts
