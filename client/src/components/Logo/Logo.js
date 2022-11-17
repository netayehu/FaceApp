import React from 'react'
import Tilt from 'react-parallax-tilt';
import logo from './logo.png';
import './logo.css'

function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' style={{ height: '100px', width:'100px', backgroundColor: 'silver' }}>
                <div className='Tilt-inner pa3' style={{ paddingTop: '5px'}}>
                    <h1><img src={logo} alt='logo'/></h1>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo