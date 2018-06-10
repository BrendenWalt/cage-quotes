import React from 'react'

const btnImg = "https://pbs.twimg.com/profile_images/535525465176276992/cXZZdSMP.png"

function Generator(props) {
  return (
    <div className="generate-button">
      <button onClick={props.numberSelect}>
        <img className="btn-img" src={btnImg} alt=""/>
      </button>
    </div>
    
  )
}

export default Generator