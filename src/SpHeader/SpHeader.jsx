import React from 'react'
import logo from '../assets/livwin-bi-logo-1.png'
import polygon from '../assets/polygon-1.svg'
import logoSmall from '../assets/livwin-bi-logo@2x.png'
import HamburgerMenu from '../assets/menu.png'

import '../SpHeader/splheader.css'




const Spheader = () => {

    function toggleMenu() {
        const menuContents = document.getElementById('menuContents');
        if (menuContents.classList.contains('hidden')) {
            menuContents.classList.remove('hidden');
        } else {
            menuContents.classList.add('hidden');
        }
    }


    return (
        <><div className="x">

            <div className="place">

                <button className='SpHeaderHome' onClick={() => window.location.href = '/'}> Home</button>
            </div>

            <div className="services">
                <button className='SpHeaderServices' onClick={() => window.location.href = '/services'}> Services</button>
            </div>


            <div className="about-us valign-text-middle inter-black-white-16px">
                <button className='SpHeaderAbout' onClick={() => window.location.href = '/AboutUs'}>  About Us</button>
            </div>

            <img className="livwin-bi-logo" src={logoSmall} alt="LIVWIN BI LOGO" />

            <div className="overlap-group">

                <div className="contact-us ">

                    <button className='SpHeaderAbout' onClick={() => window.location.href = '/ContactUS'}>  Contact Us</button>


                </div>

                <div className="rectangle-3">

                </div>

            </div>

        </div>
            <div className='HeadersfoMobileDevices'>
                <img className='LogoSmallForMobile' src={logoSmall} alt="LIVWIN BI LOGO" />
                <div className='HamburgerMenu'>
                    <img src={HamburgerMenu} alt="Hamburger Menu" className="HamburgerIcon" onClick={toggleMenu} />
                    <div id="menuContents" className="hidden">
                        <div className='HamburgerContents'>
                            <button className='SpHeaderHome' onClick={() => window.location.href = '/'}> Home</button>
                            <button className='SpHeaderServices' onClick={() => window.location.href = '/services'}> Services</button>
                            <button className='SpHeaderAbout' onClick={() => window.location.href = '/AboutUs'}> About Us</button>
                            <button className='SpHeaderAbout' onClick={() => window.location.href = '/ContactUS'}> Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Spheader