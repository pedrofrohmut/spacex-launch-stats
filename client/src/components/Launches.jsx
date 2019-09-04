import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import LaunchItem from "./LaunchItem"
import MissionKey from "./MissionKey"

const Launches = () => {
  const { isLoading, error, data } = useQuery(gql`
    {
      launches {
        flight_number
        mission_name
        launch_date_local
        launch_success
      }
    }
  `)
  return (
    <>
      <h1 className="my-3 text-muted">Launches</h1>
      <MissionKey />
      {isLoading && <p>Is Loading...</p>}
      {!isLoading && error && <p>An Error occurred to fetch the data</p>}
      {!isLoading && !error && data.launches && data.launches.length > 0 && (
        <>
          {data.launches.map(launch => (
            <LaunchItem key={launch.flight_number} launch={launch} />
          ))}
        </>
      )}
    </>
  )
}

export default Launches
