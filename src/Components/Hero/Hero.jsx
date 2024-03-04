import React from 'react'
import './Hero.css'
import soc1 from '../Assets/soc1.png'
import soc2 from '../Assets/soc2.png'
import soc3 from '../Assets/soc3.png'
import soc4 from '../Assets/soc4.png'
const Hero = () => {
    return (
        <div className='container'>
            <div className='social'>
                
            <div className='media'>
            <h3> Social Media performance</h3>
            </div>   

                <div className="socimg">
                <div className='cart'><img className='img1' src={soc1} alt=""/>
                  <h6>@ankit_chawala</h6>
                  <hr/>
                  <a href="">Check account</a>

                </div>
                <div className='cart'><img src={soc2} alt=""/>
                @ankit_chawala
                </div>
                <div className='cart'><img src={soc3} alt=""/>
                @ankit_chawala
                </div>
                <div className='cart'><img src={soc4} alt=""/>
                @ankit_chawala
                </div>
                </div>

                <div className="task">MY task</div>



              

            </div>
            
        </div>
    )
}

export default Hero
