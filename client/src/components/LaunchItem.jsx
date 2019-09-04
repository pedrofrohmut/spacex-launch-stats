import React from "react"
import { Link } from "react-router-dom"
import Moment from "react-moment"

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) => (
  <div className="card card-body mb-3">
    <div className="row">
      <div className="col-md-9">
        <h4>
          Mission:{" "}
          <span className={launch_success ? "text-success" : "text-danger"}>
            {mission_name}
          </span>
        </h4>
        <p>
          Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
        </p>
      </div>
      <div className="col-md-3">
        <Link to={`/launch/${flight_number}`}>
          <button className="btn btn-secondary">Launch Details</button>
        </Link>
      </div>
    </div>
  </div>
)

export default LaunchItem
