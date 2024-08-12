import React from 'react'
import './mywork.css'
import  themepattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
      <h1>My latest work</h1>
      <img src={themepattern}  alt=''/>
       
      </div>
      <div className='myworkcontainer'>
      {mywork_data.map((work ,index)=>{

     return <img key={index} src={work.w_img}  alt=''/>


      })}

      
      </div>
      
    </div>
  )
}

export default mywork
