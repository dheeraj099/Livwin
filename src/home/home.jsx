import React from 'react'
import './home.css'
import circle from '../assets/ellipse-1.svg'
import logo from '../assets/livwin-bi-logo-1.png'
import logoformobile from '../assets/liwin-bi-logo-1-for-mobile.png'
import polygon from '../assets/polygon-1.svg'
import logoSmall from '../assets/livwin-bi-logo@2x.png'
import header from '../SpHeader/SpHeader'
import Spheader from '../SpHeader/SpHeader'
const home = () => {
    return (
        <div className="container-center-horizontal">

            <div className="desktop-1 screen">

                <div className="flex-col">

                    <div className="overlap-group1">
                        <div className='logoDivForMobile'>
                    <img className='Liwin-bi-logo-1-for-mobile' src={logoformobile} />
                    </div>
                        <h1 className="title ">

                            World of Business <br /> Excellence and Growth

                        </h1>

                        <p className="at-iv-win-we-specia">

                            We specialize in building an engaging user experience for startups and businesses, through strategic <br /> blend of user-centered design, differentiating business solutions and innovative thinking.

                        </p>

                        <div className="step-into-the valign-text-middle inter-bold-white-48px">

                        </div>

                        <Spheader />

                        <img className="livwin-bi-logo-1" src={logo} />


                    </div>

                    <div className="flex-row">
                        <div className="overlap-group4">

                            <div className="what-drives-us valign-text-middle inter-bold-white-48px">

                                {/* What drives us */}

                            </div>

                            <div className="overlap-group6">

                                <div className="knowmore valign-text-middle">

                                    {/* knowmore */}
                                </div>

                                <p className="we-are-committed-to valign-text-middle"> We transform businesses for sustainable Success. </p>

                            </div>

                        </div>

                        <div className="flex-col-1 inter-semi-bold-cultured-pearl-20px">


                            <p className="at-liv-win-we-are-a valign-text-middle">We are a dynamic and strategic business consultancy, dedicated to <br />empower organizations and startups to achieve sustainable growth, <br /> operational excellence, and strategic success.

                            </p>
                            <div className="knowmore-1 valign-text-middle">

                                {/* knowmore */}

                            </div>

                            <p className="our-team-of-experts valign-text-middle"> Our team of experts are committed to deliver innovative and tailored <br />

                                solutions that drive business success and transform the way organizations <br /> thrive in today&#39;s competitive landscape. We partner with you in the journey <br />to unlock your business&#39;s full potential.

                            </p>

                        </div>

                    </div>
                    <div className='Home-Circle-Div'>
                        <div className="flex-col-2">

                            <div className="business-consulting ">

                                Business <br />

                                Consulting

                            </div>

                            <div className="overlap-group7">

                                <div className="overlap-group2">



                                    <div className="services-we-provide valign-text-middle inter-bold-white-40px"> LivWin

                                        {/* <br /> Services */}

                                    </div>





                                    <div className="ta-hr-services">

                                        Human Resources

                                    </div>

                                    <div className="support-services">

                                        Support Services

                                    </div>

                                    <div className="creative-and-branding-services valign-text-middle inter-semi-bold-tussock-36px">

                                        Creative and <br />

                                        Branding

                                    </div>

                                    <div className="digital-services valign-text-middle">

                                        Digital <br />

                                        Solutions </div>

                                    <img className="ellipse-1" src={circle} alt="Ellipse 1" />

                                    <div className="ellipse-7"></div>
                                    <div className="ellipse-8"></div>

                                    <div className="ellipse-10"></div>

                                    <div className="ellipse-9"></div>

                                    <div className="ellipse-13"></div>

                                    <div className="ellipse-11"></div>

                                    <div className="ellipse-12"></div>

                                </div>

                                <div className="business-development-services valign-text-middle">

                                    Business <br />


                                    Development/Growth

                                </div>

                                <div className="education-and-career-services inter-semi-bold-tussock-36px">

                                    Education and <br /> Career Guidence

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="how-we-different ">

                        How are we <br />

                        Different ?

                    </div>




                </div>

                <div className="flex-row-1">

                    <p className="at-liv-win-we-believ valign-text-middle">
                        <span>

                            <span className="inter-semi-bold-cultured-pearl-20px">We believe in the</span>

                            <span className="gold-20px"> power of customization</span>

                            <span className="inter-semi-bold-cultured-pearl-20px"> .Unlike other agencies that assign the same team to every client, we

                                understand that

                            </span>

                            <span className="gold-20px"> each business is unique and requires a tailored approach</span>

                            <span className="inter-semi-bold-cultured-pearl-20px">

                                .<br />

                            </span>

                            <span className="gold-20px">We carefully select</span> <span className="inter-semi-bold-cultured-pearl-20px"> professionals </span>

                            <span clasallame="span7">with the right expertise</span> <span className="inter-semi-bold-cultured-pearl-20px">

                                0

                                and skills to ensure a perfect match. This approch allows us to create a dedicated team, fully aligned with your vision to deliver exceptional results and maximize the value we bring to your organization <br />

                            </span>

                            {/* <span className="gold-20px">With Livin, you can be

                                confident</span>

                            <span className="inter-semi-bold-cultured-pearl-20px"> ("") that you&#39:11 receive a team that is specifically designed to meet your

                                business requirements and propel you towards

                                success.

                            </span>  */}
                        </span>

                    </p>

                    <div className="overlap-group3"> <div className="rectangle-14"></div>

                        <div className="ellipse-29"></div> <div className="ellipse-30"></div>

                        <div className="ellipse-31"></div>

                        <div className="ellipse-32"></div>

                    </div>

                    <div className="overlap-group5">


                        <img className="polygon-1" src={polygon} alt="Polygon 1" />

                        <div className="ellipse-33"></div>

                        <div className="ellipse-34"></div>

                        <div className="ellipse-37"></div>

                        <div className="ellipse-38"></div>

                        <div className="ellipse-39"></div>

                        <div className="ellipse-35"> </div>

                        <div className="ellipse-36"></div>

                    </div>



                </div>

            </div>

        </div>

    )
}

export default home