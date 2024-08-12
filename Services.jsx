import React from 'react'
import './Services.css'
import themepattern from '../../assets/theme_pattern.svg'
import servicesdata from '../../assets/services_data'
import arrowi from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div  id='services' className='services'>
    <div className='services-title'>
     <h1>My services</h1>
     <img scr={themepattern} alt =''/>
    </div>

    <div className='services-container'>
    
    {servicesdata.map((service,index)=>{


        return <div key={index} className='services-format'>
        <h3>{service.s_no}</h3>
        <h2>{service.s_name}</h2>
        <p>{service.s_desc}</p>

        <div className='services-readmore'>

        <p>Read more</p>
        <img src={arrowi} alt=''/>


        </div>

        </div>
    })}
    
    </div>
      
    </div>
  )
}

export default Services
