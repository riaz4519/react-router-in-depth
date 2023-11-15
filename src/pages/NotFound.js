import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat sequi
        dolor odit nam praesentium alias odio, amet voluptates quas natus vero.
        Eligendi doloremque atque praesentium alias sed magni quas sint?
      </p>
      <p>
        Go to the <Link to="/">Home Page</Link>
      </p>
    </div>
  )
}

export default NotFound
