import React from 'react'
import '../services/services.css'
import Spheader from '../SpHeader/SpHeader';
import logo from '../assets/livwin-bi-logo-2-1.png'
const services = () => {
    return (
        <div className="ServicesPage-container-center-horizontal">

            <div className="servicesPage SP-screen">
                <div className="SP-overlap-group1">

                    <div className="SP-services-we-provide valign-text-middle inter-bold-white-40px"> Services we Provide

                    </div>

                    <Spheader />

                    <h1 className="discover-how-liv-win valign-text-middle inter-black-cultured-pearl-64px">

                        <span>

                            <span className="span0 inter-black-cultured-pearl-64px">

                                <br /> </span>

                            <span className="span1 inter-black-cultured-pearl-64px"> Discover how Livein can <br /> empower your business to <br /> thrive in today&#39;s

                                competitive landscape.

                            </span>

                        </span>
                    </h1>

                    <img className="livwin-bi-logo-2-1" src={logo} alt="LIVEIN BI LOGO 2 1" />

                </div>

                <p className="services-you-can-choose-from valign-text-middle"> Services you can choose from

                </p>

                <div className="SP-group6">
                    <div className='SP-Rectangle7'></div>

                    <div className="SP-Business-Consulting" >Business Consulting </div>

                    <div className="SP-Focus-area">Focus Areas</div>

                    <div className="SP-Business-Growth" > Business Growth
                        Operations
                        Budgeting-reorganization
                        Strategic Planning for Startups
                        Business Development </div>

                </div>

                <div className="group-container-1">
                    <div className='SP-Rectangle8'></div>
                    <img className="SP-group" src="group-9.png" alt="Group 9" />

                    <img className="SP-group" src="group-10.png" alt="Group 10" />
                    <img className="SP-group" src="group-11.png" alt="Group 11" />

                </div>

                <img className="group-12" src="group-12.png" alt="Group 12" />

            </div>
        </div >
    );
}
export default services