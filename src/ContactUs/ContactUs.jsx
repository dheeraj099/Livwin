import React from 'react'
import Spheader from '../SpHeader/SpHeader'
import './contactUs.css'
import contactUsBiLogo from '../assets/conatctUs-bi-logo.png'

const ContactUs = () => {
    return (
        <div className='ContactUsPageMainDiv'>

            <Spheader />
            <div className='ContactUsPageSecondaryDiv'>
                <div className='unlock-your-business-contents-div'>
                    <div className='unlock-your-business-div'>
                        <h1 className='unlock-your-business-title'>Unlock Your <br /> Business Potential <br /> with LivWin</h1>
                    </div>
                    <div >
                        <h1 className='unlock-your-business-desc'>
                            {/* We would love to hear from you! <br /> <br /> */}

                            Get in touch with our dedicated team at LivWin to explore how we <br /> can  help your business thrive.  <br />
                            {/* Whether you have a question, need more information about our  <br />  */}
                            {/* services, or are ready to start a project, our experts are here to  <br /> assist you every step of the way. */}

                        </h1>
                    </div>
                </div>

                <div className='contactUs-Box'>
                    <div className='contactUs-Bi-Logo-Div'>
                        <img className='ContactUs-BiLogo' src={contactUsBiLogo}></img>

                    </div>
                    <div className='Name-Div'>
                        <input className='Name-Title' type='text' placeholder='Name' />
                    </div>

                    <div className='phone-Div'>
                        <input className='phone-Title' type='text' placeholder='Ph.No' />
                    </div>

                    <div className='email-Div'>
                        <input className='email-Title' type='text' placeholder='Email' />
                    </div>

                    <div className='send-message-div'>
                        <button className='send-msg-btn'>Send Message</button>

                    </div>
                </div>
            </div>
        </div>



    )
}

export default ContactUs