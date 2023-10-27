import React from 'react'
import Spheader from '../SpHeader/SpHeader'
import '../AboutUs/aboutUs.css'
import logo from '../assets/AboutUs-Logo.png'
const AboutUs = () => {
    return (
        <>
       
            <Spheader style={{ backgroundColor: 'black', zIndex: '9999', position: 'relative' }} />
            <div className='AboutUs-MainDiv' >
                <div className='AboutUs-Rectangle5'>
                    <img className='aboutUsLogo' src={logo}></img>

                    <div className='AboutUs-title'>
                        <p className='What-makes-LivWin-your'>
                            LivWin, your perfect business partner.
                        </p>

                    </div>
                    <p className='We-Bring-a-Winning'>
                       A winning combination of <br /> expertise, innovation & <br />dedication to every project
                    </p>
                </div>
                <div className='AboutUs-Rectangle6'>
                    <div className='About-Liwin_mainDiv'>
                        <p className='About-Liwin'> About Us</p>
                        <div className='About-Liwin-description'>
                            <p className='AboutDescription'>LivWin is a visionary strategic consultancy and creative agency, dedicated to transforming  <br/> businesses and driving success through innovative solutions. With a passion for excellence  <br/> and a deep understanding of industry dynamics, we empower startups and  organizations  <br/>to thrive in today's ever-changing landscape.
                            </p>
                        </div>
                    </div>
                    <div className='About-Liwin_mainDiv-second-part'>
                        {/* <div className='Our-Approch-Div'>
                            <p className='title-Our-Approch'>About US</p>
                            <div className='Our-approch-description' >
                                <p className='ApprochDescription'>LivWin is a visionary strategic consultancy and creative <br /> agency, dedicated to transforming businesses and driving <br /> success through innovative solutions. With a passion for<br />excellence and a deep understanding of industry <br />dynamics, we empower startups and organizations to <br />thrive in today's ever-changing landscape.</p>
                            </div>
                        </div> */}
                        {/* <div className='Our-Enterprise-Div'>
                            <p className='title-Our-Enterprise'>Our Expertise</p>
                            <div className='Our-Enterprise-description'>
                                <p className='EnterpriseDescription'>With a multidisciplinary team of experts, we offer a <br /> comprehensive range of services, including business <br />consulting, event management, branding, digital strategy,<br /> and more. From envisioning strategies to executing <br />seamless experiences, we pride ourselves on delivering <br />exceptional results that exceed expectations.</p>
                            </div>
                        </div> */}
                    </div>
                </div>


                <div className='AboutUs-Rectangle7'>
                    <div className='aboutUs-footer-main-div'>
                        <div className='Why-choose-livwin-main-Div'>
                            <p className='WhyChooseLivWin-Title'>Win<br/> With <br/> <p className='WhyChooseLivWin-Title-2nd-part'>LivWin</p> </p>
                        </div>
                        <div className='WhyChooseLivWin-Discriptin-main-div'>
                            <p className='WhyChooseLivWin-Discription-brief'>
                                Choosing LivWin means to partner with a dedicated team that is committed to your success. <br/> We bring a wealth of experience, a fresh perspective & a relentless drive to help you <br/> achieve your business objectives.<br/> <br/> LivWin will be your trusted partner for transformative growth.<br/> <br/>

                                {/* Join us on the journey to unlock your business's full potential. <br/> <br/> */}

                                Welcome to LivWin, where success is achieved through collaboration, creativity & <br/> unwavering commitment to excellence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs