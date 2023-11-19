import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

const Careers = () => {
  const carrers = useLoaderData()

  return (
    <div className="careers">
      {carrers.map((carrer) => (
        <Link to={carrer.id.toString()} key={carrer.id}>
          <p>{carrer.title}</p>
          <p>{carrer.location}</p>
        </Link>
      ))}
    </div>
  )
}

export default Careers

export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  return res.json()
}
