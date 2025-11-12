
import React from 'react'
import './services.css'
import { Link, Outlet } from 'react-router-dom'

const Services = () => {
    return (
        <div className='services-container'>
            <h2 className='services-title'>Our Services</h2>
            <p className='services-subtitle'>Choose one of our services Below</p>
            {/* web-dev  */}
            <div className='service-links'>
                <Link to='web-dev'
                    className='service-link web'>
                    Web Development
                </Link>
                
                {/* App Dev  */}
                <Link to='app-dev' className='service-link app'>
                    app development
                </Link>

            </div>
            {/* nested routing  */}
            <Outlet/>
        </div>
    )
}

export default Services