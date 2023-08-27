import React from 'react'
import { useNavigate } from 'react-router-dom';


function About() {

 

 

  const navigate = useNavigate();

  const handleButtonClick = () => {
  
    navigate("/");
  };
  return (
    <div>
      <h1>This is the about page</h1>
      <button onClick={handleButtonClick}>
      Go to Homepage
    </button>

  

    </div>
  )
}

export default About