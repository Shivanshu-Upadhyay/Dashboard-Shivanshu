import React, { useEffect } from 'react';
import SignIn from './signin';
import { Dialog } from "@material-ui/core";

import './vendor/animate.css/animate.min.css';
import './vendor/aos/aos.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap-icons/bootstrap-icons.css';
import './vendor/boxicons/css/boxicons.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './vendor/glightbox/css/glightbox.min.css';
import './vendor/swiper/swiper-bundle.min.css';
// import './index.js';
import './style.css';

import { $ } from 'jquery';

function HomePage(props) {

    const [openSignIn, setOpenSignIn] = React.useState(false);

    const handleClose = () => {
        setOpenSignIn(false)
    }

    useEffect(() => {
        const script1 = document.createElement("script");

        script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
        script1.async = true;

        document.body.appendChild(script1);

        const script2 = document.createElement("script");

        script2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js";
        script2.async = true;

        document.body.appendChild(script2);

        const script3 = document.createElement("script");

        script3.src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
        script3.async = true;

        document.body.appendChild(script3);


        const script4 = document.createElement("script");

        script4.src = "vendor/aos/aos.js";
        script4.async = true;

        document.body.appendChild(script4);


        const script5 = document.createElement("script");

        script5.src = "vendor/bootstrap/js/bootstrap.bundle.min.js";
        script5.async = true;

        document.body.appendChild(script5);


        const script6 = document.createElement("script");

        script6.src = "vendor/glightbox/js/glightbox.min.js";
        script6.async = true;

        document.body.appendChild(script6);


        const script7 = document.createElement("script");

        script7.src = "vendor/php-email-form/validate.js";
        script7.async = true;

        document.body.appendChild(script7);


        const script8 = document.createElement("script");

        script8.src = "vendor/purecounter/purecounter.js";
        script8.async = true;

        document.body.appendChild(script8);



        const script9 = document.createElement("script");

        script9.src = "vendor/swiper/swiper-bundle.min.js";
        script9.async = true;

        document.body.appendChild(script9);




        const script10 = document.createElement("script");

        script10.src = "index.js";
        script10.async = true;

        document.body.appendChild(script10);


        // $(".readmore-btn").on('click', function () {

        //     $(this).parent().toggleClass("showContent");

        //     var replaceText = $(this).parent().hasClass('showContent') ? "Read Less" : "Read More";
        //     $(this).text(replaceText);

        // });


    }, []);


    // (function () {
    //     var options = {
    //         whatsapp: "+918285054507", // WhatsApp number
    //         call_to_action: "Message us", // Call to action
    //         position: "right", // Position may be 'right' or 'left'
    //     };
    //     var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    //     var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    //     s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    //     var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    // })();


    return (
        <div>
            <div id="topbar" class="d-flex align-items-center fixed-top">
                <div class="container d-flex align-items-center justify-content-center justify-content-md-between">

                </div>
            </div>

            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <a href="#hero" class="logo me-auto"> <span class="text-info" > <h4 data-aos="zoom-in"><img src="ProjectImg/main logo.jpg" class="img-fluid" alt="" ></img> Physiomatica</h4></span>  <span class="text-info"></span></a>


                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>

                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#featured-services">Features</a></li>
                            <li><a class="nav-link scrollto" href="#benefits">Benefits</a></li>
                            <li><a class="nav-link scrollto" href="#plans">plans</a></li>
                            <li><a class="nav-link scrollto" href="#Digital">Digital Marketing</a></li>
                            <li><a class="nav-link scrollto" href="#contact-form">Contact</a></li>


                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <a onClick={() => { setOpenSignIn(true) }} class="appointment-btn scrollto" data-toggle="modal" data-target="#myModal"><span class=" d-md-inline">Sign In</span></a>

                </div>
            </header>


            <section id="hero">
                <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

                    <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">

                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/46AyvIKUtBA?start=8" title="YouTube video player"
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>

                        </div>

                    </div>
                </div>
            </section>

            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>About Us</h2>

                    </div>

                    <div class="row mb-5">
                        <div class="col-lg-6 order-lg-0" data-aos="flip-left">
                            <img src="ProjectImg/About Us--Vision Goal1.jpg" class="img-fluid" alt="" style={{ height: "100%" }} />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content order-lg-1" data-aos="fade-left">
                            <h3>GOALS</h3>

                            <ul>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> To encourage physiotherapists with technological automation in delivering highly standardized and efficient therapy to
                                    their patients.</li>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> To digitize and automate physiotherapists with the most recent advancements in healthcare delivery in physiotherapy
                                    practice.
                                </li>

                            </ul>

                            <h3>VISION</h3>

                            <ul>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> To become physio’s most liked, most trusted and most advanced SAAS Health IT service provider</li>

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> To ensure the highest standards of data security regulations and guidelines.</li>
                            </ul>

                        </div>
                    </div>

                    <div class="row">

                        <div class="col-lg-6 order-lg-1" data-aos="flip-right">
                            <img src="ProjectImg/About Us--- Mission & Core values.jpg" class="img-fluid" alt="" style={{ height: "100%", width: "100%;" }} />
                        </div>


                        <div class="col-lg-6 pt-4 pt-lg-0 content order-lg-0" data-aos="fade-right">
                            <h3>MISSION</h3>

                            <ul>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }} ></i> To provide Physio’s with highly secured intuitive and futurist tech based automated clinic management services.
                                </li>

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Meet the changing needs of our clients.</li>
                            </ul>

                            <h3>CORE VALUES</h3>

                            <ul>
                                <li><i class="bi bi-check-circle" style={{ color: 'red', fontWeight: 'bolder' }}></i> Focus on new and innovative Health Technologies.</li>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Practice high ethical standards.
                                </li>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Respect and protect the client’s privacy and promise to their patients.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section id="featured-services" class="featured-services">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Features</h2>
                        <p> <b> Physiomatica improves patients' experience and clinical outcomes.</b></p>
                    </div>

                    <div class="row">
                        <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div class="icon text-center" ><i> <img src="projectImg/Icon-Tele physio portal.png" alt="" width="50px" height="50px"></img></i></div>

                                <h4 class="text-center"> <p style={{ color: "#1a1aff" }}>Tele Physio Portal</p></h4>

                                <h4 class="title text-center"> INTUITIVE</h4>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Fear no cross infection at your waiting rooms or to yourself
                                </p>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Medical & social distancing with care
                                </p>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Doesn`t require any IT skills
                                </p>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Anywhere, anytime system access from any Internet-enabled device
                                </p>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Free, unlimited customer service and support
                                </p>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Upgradable, scalable at a pocket - friendly subscription cost
                                </p>


                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div class="icon text-center"><img src="projectImg/Icon-Clinic Automation.svg" alt="" width="50px" height="50px" ></img></div>

                                <h4 class="text-center">
                                    <p style={{ color: "#1a1aff" }}>Clinic Process</p>
                                </h4>

                                <h4 class="title text-center"> AUTOMATED</h4>

                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Automate your clinical procedures while you do what you like the most - caring the patients

                                </p>

                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Streamlined documentation with carry-forward functionality, easy note-type switching
                                </p>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Cut errors and save time with digital patient intake.
                                </p>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Patient information automatically and securely flows into the EMR
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div class="icon text-center"><img src="projectImg/Icon-Documentation.png" alt="" width="50px" height="50px"></img></div>
                                <h4>
                                    <p style={{ color: '#1a1aff', textAlign: "center" }}>Documentation</p>
                                </h4>
                                <h4 class="title text-center">THERAPY </h4>

                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Renders all the possible assessments & encourages the evidence based practice

                                </p>

                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: '#1a1aff' }}></i> Start to end documentation every aspect of various therapies


                                </p>

                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Document faster—and at the point of care—with a user-friendly layout that follows the therapist workflow.
                                </p>

                            </div>
                        </div>
                    </div>

                    <div class="row mt-lg-5">
                        <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div class="icon text-center"><img src="projectImg/Icon-Financial & accounting.png" alt="" width="50px" height="50px"></img></div>
                                <h4>
                                    <p style={{ color: '#1a1aff', textAlign: "center" }}>Financials & Accounting</p>
                                </h4>
                                <h4 class="title text-center">INTEGRATED</h4>

                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Multi-currency payment gateway for cross borders
                                </p>

                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Tele Physio integrated accounting system
                                </p>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Income & expense day book updation in real time
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div class="icon text-center"><img src="projectImg/Icon-Accessible Upgradable.png" alt="" width="50px" height="50px"></img></div>
                                <h4>
                                    <p style={{ color: '#1a1aff', textAlign: 'center' }}>Accessible & Upgradable </p>
                                </h4>

                                <h4 class="title text-center">SCALABLE</h4>


                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Accessible anytime from any device from anywhere
                                </p>

                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Upgradable at point of time

                                </p>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Scalable from single user to multiple users & locations anywhere
                                </p>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div class="icon text-center"><img src="projectImg/Security1.jpg" alt="" width="50px" height="50px"></img></div>
                                <h4>
                                    <p style={{ color: '#1a1aff', textAlign: "center" }}>Data Security & Migration</p>
                                </h4>

                                <h4 class="title text-center">SEAMLESS</h4>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> 100% Assured & guaranteed data security
                                </p>

                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Ensures seamless data migration in quickest possible time


                                </p>
                                <p class="description"><i class="bi bi-check-circle-fill" style={{ color: "#1a1aff" }}></i> Your data is exclusively your asset , stored and accessed only by you
                                </p>
                            </div>
                        </div>


                    </div>

                </div>
            </section>


            <section class="about">
                <div class="container" data-aos="fade-up">

                    <div class="row  mb-lg-5">
                        <div class="col-lg-6 order-lg-0" data-aos="fade-right">
                            <img src="ProjectImg/Appointment Management.jpg" data-aos="zoom-in" class="img-fluid" alt="" style={{ width: '100%', height: '100%' }} ></img>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content order-lg-1" id="Appointment Management" data-aos="fade-left">
                            <h3 data-aos="zoom-in">Appointment Management</h3>

                            <ul data-aos="zoom-in">
                                <br></br>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica replaces manual schedule books or practice scheduling software that is not integrated with your clinic’s
                                    patients records and assessments.</li>
                                <br></br>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica helps you to schedule appointments, documentation and patient records work together to coordinate your team
                                    and fill up leakages.

                                </li>
                                <br></br>

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> SMS Appointment Reminder of physiomatica helps users to send reminder messages to their patients on confirmation of the
                                    scheduled appointments.

                                </li>
                            </ul>

                        </div>
                    </div>

                    <br></br>

                    <div class="row mb-lg-5">

                        <div class="col-lg-6 order-lg-1" data-aos="fade-left">
                            <img src="ProjectImg/video consultation.jpg" data-aos="zoom-in" class="img-fluid" alt="" style={{ width: '100%', height: '100%' }}></img>
                        </div>

                        <div class="col-lg-6 pt-4 pt-lg-0 content order-lg-0" data-aos="fade-right" id="Video Consultation">
                            <h3 data-aos="zoom-in">Video Consultation</h3>
                            <br></br>
                            <ul data-aos="zoom-in">
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Video Consultation Made Easy

                                </li>
                                <br></br>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica has a seamless integrated video consultation feature for face-face online consultation with your patients</li>
                                <br></br>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> It's super easy to conduct an online video consultation and you can very easily guide & supervise your patient doing the
                                    prescribed exercises</li>

                            </ul>

                        </div>

                    </div>

                </div>

                <br></br>
                <div class="container mt-lg-3" data-aos="fade-up">

                    <div class="row mb-lg-5">

                        <div class="col-lg-6 order-lg-0" data-aos="fade-right">
                            <img src="ProjectImg/Clinic Management1.jpg" data-aos="zoom-in" class="img-fluid" alt="" style={{ width: '100%', height: '100%' }}></img>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content order-lg-1" data-aos="fade-left" id="Clinic Task Management">
                            <h3 data-aos="zoom-in">Clinic Task Management</h3>
                            <br></br>
                            <ul data-aos="zoom-in">

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica gives you a list of daily tasks to accomplish in a grid view.</li>
                                <br></br>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> A set of separate tables are created & updated automatically for daily appointments booked, patients added, income
                                    generated and expense incurred.

                                </li>

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica also analyses, collects and represents the data of total appointments, total patients, total income
                                    generated & total expense incurred in real time in a specified & selected date range picker i.e. clinic register

                                </li>

                            </ul>
                        </div>
                    </div>
                    <br></br>
                    <div class="row mb-lg-5">
                        <div class="col-lg-6 order-lg-1" data-aos="fade-left">
                            <img src="ProjectImg/Clinic Resource Management1.jpeg" data-aos="zoom-in" class="img-fluid" alt=""
                                style={{ width: '100%', height: '100%' }}></img>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content order-lg-0" data-aos="fade-right" id="Clinic Resource Management">
                            <h3 data-aos="zoom-in">Clinic Resource Management</h3>
                            <br></br>
                            <ul data-aos="zoom-in">
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica manages your staff’s activity and productivity, their access to clinical records and business settings.
                                </li>
                                <br></br>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica manages multiple Clinics and grows your practice or Physio business by evaluating and investing your time
                                    and efforts on only what matters i.e. patient care</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>

                <div class="container" data-aos="fade-up">
                    <div class="row mb-lg-5">
                        <div class="col-lg-6 order-lg-0" data-aos="fade-right">
                            <img src="ProjectImg/Accounts Management22.jpg" data-aos="zoom-in" class="img-fluid" alt="" width="100%"
                                height="100%"></img>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content order-lg-1" data-aos="fade-left" id="Accounts Management">
                            <h3 data-aos="zoom-in">Accounts Management</h3>

                            <ul data-aos="zoom-in">
                                <br></br>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica generates online invoices, taxable bills and treatments protocols online.</li>

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica has an integrated payment gateway for digital payment transfers, tracks due dates and offers discounts
                                    also.

                                </li>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica also keeps track of your expenses in a day book while you are focused on your work.


                                </li>

                            </ul>

                        </div>
                    </div>
                    <br></br>

                    <div class="row mb-lg-5">

                        <div class="col-lg-6 order-lg-1" data-aos="fade-left">
                            <img src="ProjectImg/Treatment Protocol.jpg" data-aos="zoom-in" class="img-fluid" alt=""
                                style={{ width: '100%', height: '100%' }}></img>
                        </div>

                        <div class="col-lg-6 pt-4 pt-lg-0 content order-lg-0" data-aos="fade-right" id="Treatment Protocols">
                            <h3 data-aos="zoom-in">Treatment Protocols</h3>
                            <br></br>
                            <ul data-aos="zoom-in">
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica includes categorised programmed treatment protocols available for your patients as per their diagnosis.

                                </li>
                                <br></br>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica also includes the digital exercise program builder which allows physios to quickly search, build, save and
                                    assign the therapeutic exercise to their patients.

                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

                <br></br>

                <div class="container" data-aos="fade-up">

                    <div class="row mb-lg-5">
                        <div class="col-lg-6 order-lg-0" data-aos="fade-right">
                            <img src="ProjectImg/EHR Management.jpg" data-aos="zoom-in" class="img-fluid" alt="" width="100%" height="100%"></img>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content order-lg-1" data-aos="fade-left" id="EHR Management">
                            <h3 data-aos="zoom-in">EHR Management</h3>

                            <ul data-aos="zoom-in">
                                <br></br>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica is automating your documentation as it reduces your efforts to type all the patient data and fill the long
                                    assessment forms with interactive forms and what not.</li>
                                <br></br>
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> EHR management includes assessments, examinations, therapeutic exercises, Body charts, Trigger point charts, progress
                                    notes, additional notes, discharge summaries, case reports and custom treatment protocol development options.


                                </li>

                            </ul>

                        </div>
                    </div>

                    <br></br>

                    <div class="row ">

                        <div class="col-lg-6 order-lg-1" data-aos="fade-left">
                            <img src="ProjectImg/Analytics.jpg" data-aos="zoom-in" class="img-fluid" alt=""
                                style={{ width: '100%', height: '100%' }}></img>
                        </div>

                        <div class="col-lg-6 pt-4 pt-lg-0 content order-lg-0" data-aos="fade-right" id="Analytics & Reports">
                            <h3 data-aos="zoom-in">Analytics & Reports
                            </h3>
                            <br></br>
                            <ul data-aos="zoom-in">
                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica helps you to automate your clinic`s business metrics

                                </li>

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> A real-time business intelligence to improve operational decision-making, so you can plan your financial or operational
                                    efforts accordingly.</li>

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica tracks your businesses growth and analyses which marketing channels or referral sources are the most
                                    effective, which staff or treatment generates higher income and discovers your expenses leak</li>

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> All of this is automated into your clinical workflow, so you don’t have to do anything extra to generate various graphs
                                    & charts</li>

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica also has an integrated data & analytics feature which helps you to generate various reports including
                                    physio`s performance index, financial reports, clinic growth reports, reputation management reports.</li>

                                <li><i class="bi bi-check-circle" style={{ color: "red" }}></i> Physiomatica `s endeavor has been to utilize all the advancements including IOT, AI and blockchain technology in a
                                    phased manner.</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="benefits" class="services services">
                <div class="container bootstrap snippets bootdeys" data-aos="fade-up">

                    <div class="section-title">
                        <h2>BENEFITS</h2>

                    </div>

                    <div class="row ">
                        <div class="col-lg-4 col-md-6 content-card" >
                            <div class="card-big-shadow">
                                <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                                    <div class="content blue">
                                        <div class="icon2"><img src="ProjectImg/Access from anywhere1.jpg" data-aos="zoom-in"
                                            class="img-fluid" alt="" style={{ width: '100%', height: '100%' }}></img></div>

                                        <h5 class="title2">Access Anytime From Anywhere</h5>
                                        <p class="description readP"> <i class="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> With Physiomatica,
                                            you can access and use your account wherever you have an internet connection.
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Great for updating your
                                            client notes and
                                            keeping up-to-date when you’re away from your clinic

                                        </p>
                                        {/* <a href="javascript:void();" class="read-more readmore-btn"><span>Read More</span> <i
                                            class="bi bi-arrow-right"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 content-card">
                            <div class="card-big-shadow">
                                <div class="card card-just-text" data-background="color" data-color="green" data-radius="none">
                                    <div class="content blue">
                                        <div class="icon2"><img src="ProjectImg/highest security1.png" data-aos="zoom-in"
                                            class="img-fluid" alt="" style={{ width: '100%', height: '100%' }}></img></div>
                                        <h5 class="title2">Highest Security</h5>
                                        <p class="description readP"><i class="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> Physiomatica ensures
                                            data security which is a top priority

                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Physiomatica uses the
                                            best security technology
                                            possible.
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Physiomatica validates
                                            your data storage,
                                            backup, or protection.
                                        </p>
                                        {/* <a href="javascript:void();" class="read-more readmore-btn"><span>Read More</span> <i
                                            class="bi bi-arrow-right"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 content-card">
                            <div class="card-big-shadow">
                                <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                                    <div class="content blue">
                                        <div class="icon2"><img src="ProjectImg/Easy to Use1.png" data-aos="zoom-in" class="img-fluid"
                                            alt="" style={{ width: '100%', height: '100%' }}></img></div>
                                        <h5 class="title2">Easiest To Use</h5>
                                        <p class="description readP"> <i class="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> Best UI & UX - user
                                            friendly
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Physiomatica is
                                            intuitive and simple to use so
                                            no need for any IT skills.
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> With a minimalistic set
                                            up , you can get
                                            onboard straight away.
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> For advanced top end
                                            features, implementation &
                                            deployment is done by our IT team remotely.
                                        </p>
                                        {/* <a href="javascript:void();" class="read-more readmore-btn"><span>Read More</span> <i
                                            class="bi bi-arrow-right"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 content-card">
                            <div class="card-big-shadow">
                                <div class="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                                    <div class="content blue">
                                        <div class="icon2"><img src="ProjectImg/Icon-4.jpg" data-aos="zoom-in" class="img-fluid" alt=""
                                            style={{ width: '100%', height: '100%' }}></img></div>
                                        <h5 class="title2">Prompt Customer Service & Support</h5>
                                        <p class="description readP"><i class="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> We are available to
                                            support you at your suitable days & time online / offline
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Physiomatica is cloud
                                            based SAAS which means no
                                            clunky software to install.
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> We have a dedicated a
                                            customer support phone
                                            line as well as email
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> We feel duty bound to
                                            troubleshoot any issues
                                            in the minimum possible time.
                                        </p>
                                        {/* <a href="javascript:void();" class="read-more readmore-btn"><span>Read More</span> <i
                                            class="bi bi-arrow-right"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 content-card">
                            <div class="card-big-shadow">
                                <div class="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                                    <div class="content blue">
                                        <div class="icon2"><img src="ProjectImg/Icon-5.png" data-aos="zoom-in" class="img-fluid" alt=""
                                            style={{ width: "50%", height: "50%" }}></img></div>
                                        <h5 class="title2">No Lengthy Lock-In Contracts</h5>
                                        <p class="description readP"><i class="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> You just need to pay
                                            initially for six months after a free trial period which may be extended as per the
                                            prevailing
                                            policy.
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> We don’t believe in
                                            annual lock-in contracts,
                                            so you are free to upgrade, downgrade or cancel at any time after six
                                            months.

                                        </p>
                                        {/* <a href="javascript:void();" class="read-more readmore-btn"><span>Read More</span> <i
                                            class="bi bi-arrow-right"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 content-card">
                            <div class="card-big-shadow">
                                <div class="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                                    <div class="content blue">
                                        <div class="icon2"><img src="ProjectImg/Refund Policy.png" data-aos="zoom-in" class="img-fluid"
                                            alt="" style={{ width: '100%', height: '100%' }}></img></div>
                                        <h5 class="title2">Refund Policy</h5>
                                        <p class="description readP"> <i class="bi bi-check-circle"
                                            style={{ color: "rgb(149, 13, 240)" }}></i> We have a very
                                            transparent refund policy without a single question asked.
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> In order to return,
                                            raise a request within the
                                            30 calendar days of your purchase.
                                            <br></br>
                                            <i class="bi bi-check-circle" style={{ color: "rgb(149, 13, 240)" }}></i> Upon cancellation, the
                                            refund is materialed
                                            within seven working days.
                                        </p>
                                        {/* <a href="javascript:void();" class="read-more readmore-btn"><span>Read More</span> <i
                                            class="bi bi-arrow-right"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section id="plans" class="pricing">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Pricing</h2>

                    </div>

                    <div class="row">

                        <div class="col-lg-4 col-md-6">
                            <div class="box featured" data-aos="fade-up" data-aos-delay="100">
                                <h3 >Free Plan</h3>

                                <ul>
                                    <li>Clinic Register</li>
                                    <li>Appointment Booking</li>
                                    <li>Clinic Manager</li>
                                    <li>Referral Manager</li>
                                    <li>Account Manager</li>
                                    <li>Notifications</li>
                                    <li>T & C apply</li>

                                </ul>
                                <div class="btn-wrap">
                                    {/* <a href="#d" class="btn-buy">REGISTER / SIGN UP</a> */}
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div class="box featured" data-aos="fade-up" data-aos-delay="200">
                                <h3>Premium Pro</h3>

                                <ul>
                                    <li>All Free Features</li>
                                    <li>Video Consultation</li>
                                    <li>Accounts Manager</li>
                                    <li>Treatment protocols</li>
                                    <li>Exercise Builder</li>
                                    <li>EHR Manager</li>
                                    <li>Enhanced Security</li>

                                </ul>
                                <div class="btn-wrap">
                                    {/* <a href="#d" class="btn-buy">SEND YOUR REQUEST</a> */}
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                            <div class="box featured" data-aos="fade-up" data-aos-delay="400">
                                <h3>Premium Pro+</h3>

                                <ul>
                                    <li>All Premium Pro Features</li>
                                    <li>Analytics & Reports</li>
                                    <li>Get Your Clinic’s Mobile App</li>
                                    <li>Complete Customization</li>
                                    <li>Exclusive Hosting Server</li>
                                    <li>In Campus Login security</li>
                                    <li>Third Party Integration</li>
                                </ul>
                                <div class="btn-wrap">
                                    {/* <a href="#d" class="btn-buy">CONTACT US FOR QUOTE</a> */}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="Digital" class="courses">
                <div class="container" data-aos="fade-up">


                    <div class="row feature-icons" data-aos="fade-up">
                        <div class="row">

                            <div class="col-xl-12 text-center" data-aos="zoom-in-up" data-aos-delay="100">
                                <img src="ProjectImg/Digital Marketing banner.png" class="img-fluid p-4" alt="" data-aos="zoom-in-up" ></img>
                            </div>


                            <div class="section-title">
                                <h2>Digital Marketing</h2>

                            </div>



                            <div class="col-lg-12 pt-4 pt-lg-0 content order-lg-0" data-aos="zoom-in-up">

                                <p>

                                    <i class="bi bi-check-circle" style={{ color: "red" }}></i> Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using
                                    the internet and other forms of digital communication.
                                    <br></br> <br></br>
                                    <i class="bi bi-check-circle" style={{ color: "red" }}></i>  This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a
                                    marketing channel.
                                    <br></br>
                                    <br></br>

                                </p>
                                <h5><b>Digital marketing can be broadly broken into the following main categories.</b></h5>
                                <ul data-aos="zoom-in" >


                                    <li>
                                        Search Engine Optimization
                                    </li>

                                    <li>Pay-per-Click</li>

                                    <li> Social Media Marketing</li>

                                    <li>Content Marketing</li>

                                    <li>Email Marketing</li>

                                    <li>Mobile Marketing</li>

                                    <li>Marketing Analytics.</li>

                                </ul>

                                <p> Digital marketing has become prominent largely because it reaches such a wide audience of people, but it offers a number
                                    of other advantages as well.</p>

                            </div>


                            <div class="col-xl-12 d-flex content mt-3">
                                <div class="row align-self-center gy-4">


                                    <div >
                                        <h3> Benefits</h3>

                                    </div>

                                    <div class="col-md-12 icon-box" data-aos="fade-up">
                                        <i class="ri-line-chart-line"></i>



                                        <div>
                                            <h6><i class="bi bi-check-circle " style={{ color: "red" }}></i> A broad geographic reach</h6>
                                            <h6><i class="bi bi-check-circle" style={{ color: "red" }}></i> Cost efficiency</h6>
                                            <h6><i class="bi bi-check-circle" style={{ color: "red" }}></i> Quantifiable results</h6>
                                            <h6><i class="bi bi-check-circle" style={{ color: "red" }}></i> Easier personalization</h6>
                                            <h6><i class="bi bi-check-circle" style={{ color: "red" }}></i> More connection with customers</h6>
                                            <h6><i class="bi bi-check-circle" style={{ color: "red" }}></i> Easy and convenient conversions</h6>

                                        </div>
                                    </div>

                                    <p data-aos="zoom-in">

                                        Digital marketing should be one of the primary focuses of almost any physio's overall marketing strategy.
                                        <br></br> <br></br>
                                        Never before has there been a way to stay in such consistent contact with your customers, and nothing else offers the
                                        level of personalization that digital data can provide. The more you embrace the possibilities of digital marketing, the
                                        more you'll be able to realize your company's growth potential.
                                    </p>



                                </div>
                            </div>

                        </div>

                    </div>


                    <br></br>
                    <br></br>

                    <div class="row " data-aos="zoom-in" data-aos-delay="100">

                        <div class="section-title">
                            <h2>Physiomatica is Exclusively Physio Centric</h2>

                        </div>


                        <h6 class="text-center mb-4"><em> “ We are the only Health IT company in India serving exclusively the Physios community offering a cloud based Tele
                            Physio web App & Digital Marketing services for their all-round inclusive growth ”</em></h6>


                        <div class="text-center mb-3" ><h3>Scope Of Work</h3></div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch" style={{ height: "450px" }}>

                            <div class="course-item">
                                <img src="ProjectImg/web-dev-2.png" class="img-fluid" alt="..." style={{ height: '50%', width: "100%" }}></img>
                                <div class="course-content" style={{ height: '150px', overflow: "hidden" }}>


                                    <h3><a href="course/website.html" target="_blank">Website Design & Development</a></h3>
                                    <p>We are aware of the public demands and can ensure you a smart functioning website full of features and customizations.
                                        With our profuse experience and expertise to render an effective, ultra-modern website, we ensure that you get the best
                                        website designed for you as per your specific facilities.</p>

                                </div>
                                <div class="p-3 text-center"><a class="btn btn-primary" href="course/website.html" role="button" target="_blank">Read More</a></div>


                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{ height: "450px" }}>
                            <div class="course-item">
                                <img src="ProjectImg/Mobile App Development.png" class="img-fluid" alt="..." style={{ height: '50%', width: "100%" }}></img>
                                <div class="course-content" style={{ height: '150px', overflow: "hidden" }}>


                                    <h3><a href="course/Mobile.html" target="_blank">Mobile App Development</a></h3>
                                    <p>Today Mobile applications have become a necessity in your business and to interact better with your customers,you need
                                        to have a customized app according to your business needs.

                                        An estimated 60% Consumers prefer mobile apps over websites. Needless to say, if you are a consumer-centred business,

                                    </p>

                                </div>
                                <div class="p-3 text-center"><a class="btn btn-primary" href="course/Mobile.html" role="button" target="_blank">Read More</a></div>

                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{ height: "450px" }}>
                            <div class="course-item">
                                <img src="ProjectImg/seo.png" class="img-fluid" alt="..." style={{ height: '50%', width: "100%" }}></img>
                                <div class="course-content" style={{ height: '150px', overflow: "hidden" }}>


                                    <h3><a href="course/Search Engine.html" target="_blank">Search Engine Optimization (SEO)</a></h3>
                                    <p>Google it” is a simple two word phrase that may be the most used phrase in the world. When someone follows this command
                                        a chain of events is set in motion in the virtual space. The chain of events that is set in motion to throw up search
                                        results is at the heart of search engine optimization (SEO).
                                    </p>

                                </div>
                                <div class="p-3 text-center"><a class="btn btn-primary" href="course/Search Engine.html" role="button" target="_blank">Read More</a></div>
                            </div>
                        </div>


                    </div>

                    <br></br>

                    <div class="row " data-aos="zoom-in" data-aos-delay="100">

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch " style={{ height: "450px" }}>
                            <div class="course-item">
                                <img src="ProjectImg/lead-generation-1.jpg" class="img-fluid" alt="..." style={{ height: '50%', width: "100%" }}></img>
                                <div class="course-content" style={{ height: '150px', overflow: "hidden" }}>


                                    <h3><a href="course/Lead Generation.html" target="_blank">Lead Generation</a></h3>
                                    <p>Lead generation is one aspect which can do wonders for every business owner. For any business, it is important to
                                        utilize the time and money in a best possible manner as if they start on doing the market research on their own then
                                        they have to spend a lot of time and efforts and through the means of our company they would be getting a platform to
                                        market their products & services in a better manner.
                                    </p>

                                </div>
                                <div class="p-3 text-center"><a class="btn btn-primary" href="course/Lead Generation.html" role="button" target="_blank">Read More</a></div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{ height: "450px" }}>
                            <div class="course-item">
                                <img src="ProjectImg/social media management.png" class="img-fluid" alt="..."
                                    style={{ height: '50%', width: "100%" }}></img>
                                <div class="course-content" style={{ height: '150px', overflow: "hidden" }}>


                                    <h3><a href="course/Social.html" target="_blank">Social Media Marketing (SMM)</a></h3>
                                    <p>In the two and half decades of its existence, the Internet has evolved into a ubiquitous medium that has impacted the
                                        world in no uncertain measure. It has spawned a variety of businesses all based on Internet technologies. Social media
                                        is one among the greatest gifts of the Internet boom. Social media has become the defining moment of the early part of
                                        the twenty first century.
                                    </p>

                                </div>
                                <div class="p-3 text-center"><a class="btn btn-primary" href="course/Social.html" role="button" target="_blank">Read More</a></div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{ height: "450px" }}>
                            <div class="course-item">
                                <img src="ProjectImg/Professional Content Writing.png" class="img-fluid" alt="..." style={{ height: '50%', width: "100%" }}></img>
                                <div class="course-content" style={{ height: '150px', overflow: "hidden" }}>


                                    <h3><a href="course/Content writing.html" target="_blank">Professional Content writing & Blogging</a></h3>
                                    <p>Digismart Physiomatica is a premier healthcare content writing firm that specializes in web content generation for the
                                        websites of physio fraternity including practitioners, hospitals and educational institutions. We engage in dedicated
                                        and professional healthcare content writing with the aim of enhancing the authenticities of your brand</p>

                                </div>
                                <div class="p-3 text-center"><a class="btn btn-primary" href="course/Content writing.html" role="button" target="_blank">Read More</a></div>
                            </div>
                        </div>

                    </div>

                    <br></br>

                    <div class="row" data-aos="zoom-in" data-aos-delay="100">

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{ height: "450px" }}>
                            <div class="course-item">
                                <img src="ProjectImg/Practice Growth, online reputation.jpg" class="img-fluid" alt="..." style={{ height: '50%', width: "100%" }}></img>
                                <div class="course-content" style={{ height: '150px', overflow: "hidden" }}>


                                    <h3><a href="course/Practice Growth.html" target="_blank">Physio Practice Growth & Reputation Management</a></h3>
                                    <p>Reputation management has always been vital for healthcare professionals. Bedside manner, patient word of mouth, and
                                        reputation among your colleagues all factor into your medical practice’s growth. Building the career, business, and
                                        practice you want has always meant building and maintaining a positive reputation. </p>

                                </div>
                                <div class="p-3 text-center"><a class="btn btn-primary" href="course/Practice Growth.html" role="button" target="_blank">Read More</a></div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{ height: "450px" }}>
                            <div class="course-item">
                                <img src="ProjectImg/email marketing.jpg" class="img-fluid" alt="..."
                                    style={{ height: '50%', width: "100%" }}></img>
                                <div class="course-content" style={{ height: '150px', overflow: "hidden" }}>


                                    <h3><a href="course/Email Marketing.html" target="_blank">Email Marketing</a></h3>
                                    <p>E-mail marketing is one of the most important tools available to clinics to increase their footfalls and thereby gain
                                        opportunities to garner more customers to your service. E-mail is akin to the erstwhile direct mailers that you used to
                                        send to prospects on a mailing list maintained by you. With the advent of the Internet and its associated technologies
                                        direct mailing has given way to E-mail marketing.</p>

                                </div>
                                <div class="p-3 text-center"><a class="btn btn-primary" href="course/Email Marketing.html" role="button" target="_blank">Read More</a></div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{ height: "450px" }}>
                            <div class="course-item">
                                <img src="ProjectImg/Youtube videos & Monetization.jpg" class="img-fluid" alt="..." style={{ height: '50%', width: "100%" }}></img>
                                <div class="course-content" style={{ height: '150px', overflow: "hidden" }}>


                                    <h3><a href="course/YouTube.html" target="_blank">YouTube Videos & Monetization</a></h3>
                                    <p>Videos are the best modes of your presence on social media platforms like YouTube. Digismart Physiomatica has a team of
                                        experienced professionals for video making & editing, graphic designers for making thumbnails & other useful creatives.
                                        We can also help you to monetize your YouTube channel in a professional way by meeting
                                    </p>

                                </div>
                                <div class="p-3 text-center"><a class="btn btn-primary" href="course/YouTube.html" role="button" target="_blank">Read More</a></div>
                            </div>
                        </div>

                    </div>



                </div>
            </section>

            <section id="testimonials" class="testimonials">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>What are Esteem Clients Say</h2>

                    </div>

                    <div class="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                        <div class="swiper-wrapper">

                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                                        Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="ProjectImg/1.jpg" class="testimonial-img" alt=""></img>
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum
                                        eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim
                                        culpa.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="ProjectImg/2.jpg" class="testimonial-img" alt=""></img>
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis
                                        minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="ProjectImg/4.jpg" class="testimonial-img" alt=""></img>
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim
                                        velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum
                                        veniam.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="ProjectImg/5.jpg" class="testimonial-img" alt=""></img>
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>
                            </div>

                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam
                                        enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore
                                        nisi cillum quid.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="ProjectImg/6.jpg" class="testimonial-img" alt=""></img>
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                </div>
                            </div>

                        </div>
                        <div class="swiper-pagination"></div>
                    </div>

                </div>
            </section>

            <section id="contact-form" class="contact">
                <div class="container">

                    <div class="section-title">
                        <h2>Contact</h2>

                    </div>

                </div>

                <div class="container">

                    <div class="row mt-5">

                        <div class="col-lg-6">

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="info-box">
                                        <i class="bx bx-map"></i>
                                        <h3>Our Address</h3>
                                        <p>403 Ground Floor Bhagwan Moharir Marg, New Delhi India</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="info-box mt-4">
                                        <i class="bx bx-envelope"></i>
                                        <h3>Email Us</h3>
                                        <p>info@example.com<br></br>contact@example.com</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="info-box mt-4">
                                        <i class="bx bx-phone-call"></i>
                                        <h3>Call Us</h3>
                                        <p>+1 5589 55488 55<br></br>+1 6678 254445 41</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6">
                            <form class="php-email-form">
                                <div class="row">
                                    <div class="col form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name"
                                            required></input>
                                    </div>
                                    <div class="col form-group ">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email"
                                            required></input>
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"
                                        required></input>
                                </div>
                                <div class="form-group mt-3">
                                    <textarea class="form-control" name="message" rows="5" placeholder="Message"
                                        required></textarea>
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center">
                                    <a href="mailto:dinesharora156@gmail.com" class="appointment-btn scrollto" >
                                        Send Message</a>

                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>

            {openSignIn && (
                <Dialog
                    maxWidth="md"
                    open={openSignIn}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <SignIn />
                </Dialog>
            )}

            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-4 col-md-6 footer-links">
                                <h4>Tele Physio Portal</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#Clinic Task Management">Clinic Statistics</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#Appointment Management">Appointment Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#Video Consultation">Video Consultation</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#Clinic Resource Management">Clinic Resource Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#Treatment Protocols">Treatment Protocol</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#a">Digital Prescription</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#b">Exercise</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#EHR Management">EHR Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#Analytics & Reports">Analytics & Reports</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="Terms.html">Terms Of Service Use</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="Privacy.html">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-6 footer-links">
                                <h4>Digital Marketing</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="./course/website.html">Website Design & Development</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="./course/Search Engine.html">SEO</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="./course/Social.html">Social Media Marketing</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="./course/Email Marketing.html">Email Marketing</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#b">PPC</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="./course/Mobile.html">Mobile App Development</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#b">Video Making & Editing</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="./course/YouTube.html">YouTube Channel Monetization</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#b">Clinic Practice Growth</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#b">Online Reputation </a></li>
                                </ul>
                            </div>



                            <div class="col-lg-4 col-md-6">
                                <div class="footer-info">
                                    <h4 >Follow Us</h4>

                                    <div class="social-links mt-3 ">
                                        <ul class="iconSpace" style={{ listStyleType: "none" }}>
                                            <li> <h6><a href="#d" class="twitter"><i class="bx bxl-twitter"></i></a>- Twitter </h6></li>

                                            <li> <h6><a href="#d" class="facebook"><i class="bx bxl-facebook"></i></a>- Facebook</h6></li>
                                            <li> <h6><a href="#d" class="instagram"><i class="bx bxl-instagram"></i></a>- Instagram</h6></li>
                                            <li><h6><a href="#d" class="youtube"><i class="bx bxl-youtube"></i></a>- Youtube</h6></li>
                                            <li> <h6> <a href="#d" class="linkedin"><i class="bx bxl-linkedin"></i></a>- Linkedin </h6></li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="copyright">
                        <p><strong><span>Available on Google Play</span></strong> <i class="fab fa-google-play fa-2x"></i> <br></br>
                            &copy; Copyright <strong><span>Physiomatica</span></strong>. All Rights Reserved</p>
                    </div>

                </div>
            </footer>

            {/* <div id="preloader"></div> */}



        </div>
    );
}

export default HomePage;