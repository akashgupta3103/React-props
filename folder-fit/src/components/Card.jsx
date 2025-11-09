import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="job-card">
  <div className="job-header">
    <h2 className="company-name">{props.company}</h2>
    <span className="experience">{props.exp}</span>
  </div>

  <h3 className="job-title">{props.jobt}</h3>

  <div className="job-details">
    <p><strong>Posted By:</strong> {props.postedby}</p>
    <p><strong>Salary:</strong> {props.salary}</p>
  </div>

  <button className="apply-btn">Apply Now</button>
</div>

    </>
  )
}

export default Card
