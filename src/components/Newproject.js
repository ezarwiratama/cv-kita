import React from 'react'
import './styling/newproject.css'

const Newproject = () => {
  return (
    <>
      <div div className="project">
        <h1 className="sub-title">Project</h1>
        <div className="box">
          <div className="col-4">
            <div className="icon"><i className=" fas fa-mobile"></i></div>
            <h4>MOBILE APP</h4>
          </div>
          <div className="col-4">
            <div className="icon"><i className=" fas fa-globe"></i></div>
            <h4>WEB DEVELOPMENT</h4>
          </div>
          <div className="col-4">
            <div className="icon"><i className=" fas fa-edit"></i></div>
            <h4>DESIGN</h4>
          </div>
          <div className="col-4">
            <div className="icon"><i className=" fas fa-chart-bar"></i></div>
            <h4>DIGITAL MARKETING</h4>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Newproject