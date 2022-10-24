import React from 'react'
import './HomeSectionStyles.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './ServicesCardsStyles.css'
import ServicesCards from './ServicesCards'
import Services1 from '../../assets/mental-illness.png'
import Services2 from '../../assets/substance-use.png'
import Services3 from '../../assets/addiction-treatment.png'
import Services4 from '../../assets/employment-assistance.png'
import Team from '../team/Team';
import '../team/TeamStyles.css'

import WhatWeDo from '../../assets/what-we-do.jpg'
import '../insurance/InsuranceLogosStyles.css'


import MolinaHealthCare from '../../assets/molina-healthcare.png'
import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import MHN from '../../assets/mhn.png'
import United from '../../assets/united-healthcare.png'


import Team1 from '../../assets/team-image-1.jpg'
import Team2 from '../../assets/team-image-2.jpg'
import Team3 from '../../assets/team-image-3.jpg'
import Team4 from '../../assets/team-image-4.jpg'
import Team5 from '../../assets/team-image-5.jpg'
import Team6 from '../../assets/team-image-6.jpg'

import Therapy from '../../assets/therapy.jpg'
import Staff from '../../assets/staff.jpg'
import Clinic from '../../assets/clinic.jpg'
import Work from '../../assets/employment-assistance2.jpg'

const HomeSection = () => {
    return (
        <>
            <div className='home-section'>
                <div className='container'>
                    <div className='content'>
                        <h1>OUR SERVICES</h1>
                        <p>At Natural Rest House, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
                    </div>
                </div>
            </div>

            {/* --------------------------------------> CARDS */}

            <div className='main'>
                <Fade bottom>
                    <ServicesCards
                        Image={Services1}
                        CardName="Mental Health Services​"
                        Description="Clients suffer from both mental health disorders and addiction. Therefore, we provide treatment for co-occurring disorders, addressing both conditions simultaneously."
                    />

                    <ServicesCards
                        Image={Services2}
                        CardName="Substance Use"
                        Description="We treat a multitude of substance use disorders. Whether the client is suffering from an alcohol addiction, prescription drug addiction, we can help."
                    />
                </Fade>

                <Fade bottom>
                    <ServicesCards
                        Image={Services3}
                        CardName="Addiction Treatment"
                        Description="We offer programs that's tailored to the needs of the client. With the help of our individualized treatment programs, clients can find the healing and support they need."
                    />


                    <ServicesCards
                        Image={Services4}
                        CardName="Employment Assistance"
                        Description="There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services. Jobs Assistance is available."
                    />
                </Fade>

            </div>


            {/* --------------------------------------> SECTION 3 */}


            <div className='section-three'>
                <h1>The Best Detox and Residential Treatment Center
                    in Los Angeles California</h1>
            </div>


            {/* ---------------------------------------> WHAT WE DO */}


            <div className='service-3'>
                <div className='service-3-description'>
                    <Fade left>

                        <h1>What We Do</h1>
                             <br />
                            <p>At Natural Rest House Treatment Center, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP). You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.                    </p><br />
                       
                       <p>
                            Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                        </p><br />

                        <p>
                            You may have lost your way but here you won’t get lost in the crowd. Nartural Rest House is an inviting, home-like environment where compassionate clinicians and staff members work collaboratively with you to address your unique needs. Rooted in the 12-step philosophy and a trauma-informed, evidence-based approach, we’ll show you how to manage and live with addiction, co-occurring disorders and other underlying issues, like anxiety or depression. Surrounded by a supportive recovery community, you’ll heal internally and, in turn, heal your relationships. Find your footing here and get ready for the next phase of your life.
                        </p>
                    </Fade>

                </div>
                <div className='service-3-image'>
                    <img src={WhatWeDo} alt="" />
                </div>
            </div>

            {/* ---------------------------------------> INSURANCE LOGOS */}

            <div className='InsuranceSection'>
                <div className="container">
                    <div className="content">

                        <Fade top>
                            <div className='flex-left'>
                                <h1><span>WE WORK WITH MAJOR INSURANCE</span></h1>
                                <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                            </div>
                        </Fade>

                        <div className='flex-right'>

                            <Fade top>
                                <div className='insurance-thumbnail'>
                                    <img src={Aetna} alt="Aetna Logo" loading="lazy" />
                                </div>
                            </Fade>


                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                    <img src={Beacon} alt="Beacon Logo" loading="lazy" />
                                </div>
                            </Fade>

                            <Fade top>
                                <div className='insurance-thumbnail'>
                                    <img src={Bluecross} alt="Bluecross Logo" loading="lazy" />
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                    <img src={Cigna} alt="Cigna Logo" loading="lazy" />
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                    <img src={MolinaHealthCare} alt="Cigna Logo" loading="lazy" />
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                    <img src={MHN} alt="Cigna Logo" loading="lazy" />
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                    <img src={United} alt="Cigna Logo" loading="lazy" />
                                </div>
                            </Fade>

                        </div>

                        {/* <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} > */}
                        <Link to='/insurance'>
                            <button>Learn More</button>
                        </Link>
                        {/* </LinkRoll> */}

                    </div>
                </div>
            </div>

            {/* --------------------------------------> WHY CHOOSE US */}


            <div className='mission-section'>
            <div className="container">
                <div className="content">
                    <h1>WHY CHOOSE NATURAL REST HOUSE</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi officiis unde perferendis voluptas laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga quisquam illo. Obcaecati, voluptatum.</p>


                            <div className='flex-right'>

                            <Fade top>
                    <div className='thumbnail'>
                        <div><img src= { Therapy } alt="Aetna Logo" loading="lazy" />                    
                        <p>Therapy and support groups for either addiction or mental health disorders</p>
                        </div>
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='thumbnail'>
                        <img src= { Staff } alt="Beacon Logo" loading="lazy" /> 
                        <p>Compassionate staff that is dedicated to your success</p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='thumbnail'>
                        <img src= { Clinic } alt="Bluecross Logo" loading="lazy" />   
                        <p>Evidence-based practices that give you the best chance of recovery</p>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='thumbnail'>
                        <img src= { Work } alt="Cigna Logo" loading="lazy" /> 
                        <p>There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services.</p>  
                    </div>
                    </Fade>                            
                    
                    </div>
                </div>
            </div>
        </div>



            {/* ---------------------------------------> VIEW OUR TESTIMONIALS SECTION */}


            <div className='TestimonialsHero'>
            <div className="testimonials-container">
                <div className="content">
                    <h1>Hear What Our Clients Say</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi officiis unde perferendis voluptas laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga quisquam illo. Obcaecati, voluptatum.</p>
                    <div>
                        {/* <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} > */}
                        <Link to="/contact">
                        <button className='TestimonialsHero-btn'>View Testimonials</button>
                        </Link>
                        {/* </LinkRoll> */}

                    </div>
                </div>
            </div>
        </div>




            {/* ---------------------------------------> TEAMS */}
            
            <div className='team-header'>
            <h1>Meet our Team</h1>
            </div>

            <div className='main'>
        <Team 
            Image = { Team1 }
            CardName="John Doe"
            Description="Clinical Manager"        
        />

        <Team 
            Image = { Team2 }
            CardName="Jane Doe"
            Description="Case Manager"        
        />
        
        <Team 
            Image = { Team3 }
            CardName="Joey Doe"
            Description="Behavioral Therapist"        
        />

        <Team 
            Image = { Team4 }
            CardName="Ross Doe"
            Description="Behavioral Therapist"        
        />

        <Team 
            Image = { Team5 }
            CardName="Rachel Doe"
            Description="Behavioral Therapist"        
        />

        <Team 
            Image = { Team6 }
            CardName="Monica Doe"
            Description="Behavioral Therapist"        
        />

    </div>


        </>




    )
}

export default HomeSection
