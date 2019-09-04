import React from "react"
import { Link } from "react-router-dom"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

const GET_LAUNCH = gql`
  query Launch($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

const Launch = ({ match }) => {
  const { flight_number } = match.params
  const { isLoading, error, data } = useQuery(GET_LAUNCH, {
    variables: { flight_number: parseInt(flight_number) }
  })
  if (isLoading) return <p>Loading...</p>
  if (!isLoading && data.launch) console.log("Launch", data)
  if (!data.launch) return null
  const {
    mission_name,
    launch_year,
    launch_date_local,
    launch_success
  } = data.launch
  const { rocket_id, rocket_name, rocket_type } = data.launch.rocket
  return (
    <div className="Launch">
          <Link to="/" className="btn btn-secondary">Back</Link>
      {!isLoading && !error && data.launch && (
        <div>
          <h1 className="display-4 my-3">
            Mission:{" "}
            <span className={launch_success ? "text-success" : "text-danger"}>
              {mission_name}
            </span>
          </h1>
          <h4 className="mb-3">Launch Details</h4>
          <ul className="list-group mb-3">
            <li className="list-group-item">Flight Number: {flight_number}</li>
            <li className="list-group-item">Launch Year: {launch_year}</li>
            <li className="list-group-item">
              Launch Successful:{" "}
              <span className={launch_success ? "text-success" : "text-danger"}>
                {launch_success ? "Successeded" : "Failed"}
              </span>
            </li>
          </ul>
          <h4 className="mb-3">Rocket Details</h4>
          <ul className="list-group">
            <li className="list-group-item">Rocket Id: {rocket_id}</li>
            <li className="list-group-item">Rocket Name: {rocket_name}</li>
            <li className="list-group-item">Rocket Type: {rocket_type}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Launch
