import React from 'react'
import './brand.css'
import { google,atlassian,dropbox,slack,shopify } from './import'

const Brand = () => {
  return (
    <div className='brand'>
      <div>
        <img src={google} alt='google'/>
      </div>
      <div>
        <img src={slack} alt='google'/>
      </div>
      <div>
        <img src={atlassian} alt='google'/>
      </div>
      <div>
        <img src={dropbox} alt='google'/>
      </div>
      <div>
        <img src={shopify} alt='google'/>
      </div>
     
    </div>
  )
}

export default Brand
