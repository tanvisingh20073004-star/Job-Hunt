import React from 'react'

const card = (props) => {
  return (
    <div className="Card">
      <div id="navbar1">
        <img src={props.logo}>
        </img>
        <button id="Save" onClick={(e)=>{
          if(e.target.innerText==="Save")
          {alert("Job Saved");
            e.target.innerText="Saved";
          }
          else{
            alert("Job unsaved");
            e.target.innerText="Save";
          }
          
        }}>Save</button>
      </div>
      <div id="navbar2">
        <h1>{props.company}</h1>
        <h3><i>
          {props.role}</i></h3>
          <hr></hr>
      </div>
      <div id="navbar3">
        <b><i>
          Salary-{props.pay}</i></b>
          
          <button id="Apply" onClick={(e)=>{
            
              alert("Job applied Successfully");
              e.target.innerText="Applied";
            
           
          }}>Apply now</button>
    </div>
    <p id="location">Location-{props.location}</p>
    </div>
  )
}

export default card
