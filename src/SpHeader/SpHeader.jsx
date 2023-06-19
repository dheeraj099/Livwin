import React from 'react'
import logo from '../assets/livwin-bi-logo-1.png'
import polygon from '../assets/polygon-1.svg'
import logoSmall from '../assets/livwin-bi-logo@2x.png'
import '../SpHeader/splheader.css'

const Spheader = () => {
    return (
        <div className="x">

            <div className="place">

            <button onClick={() => window.location.href = '/'}> Home</button>
                </div>

            <div className="services">
                <button onClick={() => window.location.href = '/services'}> Services</button>
            </div>


            <div className="about-us valign-text-middle inter-black-white-16px"> About Us

            </div>

            <img className="livwin-bi-logo" src={logoSmall} alt="LIVWIN BI LOGO" />

            <div className="overlap-group">

                <div className="contact-us ">

                    Contact Us </div>

                <div className="rectangle-3">

                </div>

            </div>

        </div>
    )
}

export default Spheader