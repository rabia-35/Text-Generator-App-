import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

   
function Footer() {
  return (
    <div className='sticky'>
        <a href='https://github.com/rabia-35/text-generator'>
        <FontAwesomeIcon icon={faGithub} className="fa-3x me-5" />
        </a>  
        <h6> Created by Rabia ÖLKER</h6>
    </div>
  )
}

export default Footer