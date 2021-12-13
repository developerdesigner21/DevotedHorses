import react from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Home() {
    return (
        <div>
            <section class="banner_wrapper wow fadeIn" style={{ visibility: "visible" }} >
                <div class="container">
                    {/* <!-- particle-start-here --> */}
                    <div class="particles">
                        <div class="particle"><img src="image/img15.png" alt="" /> </div>
                        <div class="particle"><img src="image/img13.png" alt="" /> </div>
                        <div class="particle"><img src="image/img13.png" alt="" /> </div>
                        <div class="particle"><img src="image/img12.png" alt="" /> </div>
                        <div class="particle"><img src="image/img8.png" alt="" /> </div>
                        <div class="particle"><img src="image/img15.png" alt="" /> </div>
                        <div class="particle"><img src="image/img6.png" alt="" /> </div>
                        <div class="particle"><img src="image/img13.png" alt="" /> </div>
                        <div class="particle"><img src="image/img13.png" alt="" /> </div>
                        <div class="particle"><img src="image/img12.png" alt="" /> </div>
                        <div class="particle"><img src="image/img8.png" alt="" /> </div>
                        <div class="particle"><img src="image/img12.png" alt="" /> </div>
                        <div class="particle"><img src="image/img8.png" alt="" /> </div>
                        <div class="particle"><img src="image/img15.png" alt="" /> </div>
                        <div class="particle"><img src="image/img10.png" alt="" /> </div>
                        <div class="particle"><img src="image/img13.png" alt="" /> </div>
                        <div class="particle"><img src="image/img10.png" alt="" /> </div>
                        <div class="particle"><img src="image/img8.png" alt="" /> </div>
                        <div class="particle"><img src="image/img12.png" alt="" /> </div>
                        <div class="particle"><img src="image/img10.png" alt="" /> </div>
                        <div class="particle"><img src="image/img9.png" alt="" /> </div>
                        <div class="particle"><img src="image/img6.png" alt="" /> </div>
                        <div class="particle"><img src="image/img9.png" alt="" /> </div>
                        <div class="particle"><img src="image/img13.png" alt="" /> </div>
                        <div class="particle"><img src="image/img6.png" alt="" /> </div>
                    </div>
                    <div class="Bubles-wrapper">
                        <ul class="bg-bubbles">
                            {/* <!-- <li class="blb01"><img src="image/img1.png" alt=""></li>
                          <li class="blb01"><img src="image/img2.png" alt=""></li>
                          <li class="blb01"><img src="image/img3.png" alt=""></li>
                          <li class="blb01"><img src="image/img4.png" alt=""></li>
                          <li class="blb01"><img src="image/img5.png" alt=""></li> --> */}
                            <li class="blb01"><img src="image/img6.png" alt="" /></li>
                            {/* <!-- <li class="blb01"><img src="image/img7.png" alt=""></li> --> */}
                            <li class="blb01"><img src="image/img8.png" alt="" /></li>
                            <li class="blb01"><img title="html" src="image/img6.png" alt="" /></li>
                            <li class="blb01"><img src="image/img9.png" alt="" /></li>
                            <li class="blb01"><img src="image/img10.png" alt="" /></li>
                            <li class="blb01"><img src="image/img11.png" alt="" /></li>
                            <li class="blb01"><img src="image/img12.png" alt="" /></li>
                            <li class="blb01"><img src="image/img13.png" alt="" /></li>
                            {/* <!-- <li class="blb01"><img src="image/img14.png" alt=""></li> --> */}
                            <li class="blb01"><img src="image/img15.png" alt="" /></li>
                        </ul>
                    </div>

                    {/* <!-- particle---end--here --> */}
                    <div class="Banner_content">
                        <div class="Bnr_left bnr-cmn">
                            <div class="hero_text" style={{ marginTop: "9%" }}>
                                {/* <!--<h1>Blue Web Solutions</h1>-     is-full-width--> */}
                                <h1 class="heading-txt clip-text "
                                    data-aos="zoom-in"
                                    data-aos-duration="500"
                                    data-aos-easing="ease-in-sine">
                                    <span>We Offer</span>
                                    <span class="text_word_wrapper">
                                        {/* <!-- <b class="visible-txt">SEO / SMO</b> --> */}
                                        <b class="visible-txt">App Development</b>
                                        <b class="hidden-txt">Web Development</b>
                                        <b class="hidden-txt">UI/UX Design</b>
                                        <b class="hidden-txt">Digital Marketing</b>
                                        {/* <!-- <b class="hidden-txt">Brand & Identity</b>
                                              <b class="hidden-txt">Content Marketing</b>
                                              <b class="hidden-txt">SEO / SMO</b> --> */}
                                    </span>
                                </h1>
                                {/* </div> <!-- cd-intro -->     */}
                                <p data-aos="zoom-in"
                                    data-aos-duration="1400"
                                    data-aos-easing="ease-in-sine">We provide custom software development and IT outsourcing services across multiple technologies including Java, PHP, JavaScript and many more. With the right partner and the right technologies, you can embrace the future   with confidence.
                                </p>
                                {/* <!-- <a href="#" class="GT_btn hvr-bounce-to-left"
                                        data-aos="zoom-in"
                                             data-aos-duration="1500"
                                        data-aos-easing="ease-in-sine">Book An Appointment </a> --> */}
                            </div>
                            {/* <!-- <div class="Bnr_right bnr-cmn">
                           <span class="spn1">   <img src="image/appdev1.png" alt=""></span>
                          </div> --> */}
                        </div>
                        {/* <!-- contact---form --> */}
                        <div class="contact-form wow fadeIn" style={{ visibility: "visible" }} id="contact-form">
                            {/* <!-- id="mydivheader" --> */}
                            <div class="child-wrp">
                                <div class="head-box">
                                    {/* <!-- <img src="image/logo1.png" alt=""> --> */}
                                    <h2>Get Appointment</h2>
                                </div>
                                <a href="#" onclick={() => { document.getElementById('contact-form').style.right = '-200%' }} class="Close3" title="close">X</a>
                                <form action="#" >
                                    <div class="d1 name1">
                                        <label for="#">
                                            <input type="text" name="name1" id="name1" placeholder="Name" />
                                        </label>
                                    </div>
                                    <div class="d1 Email2">
                                        <label for="#">
                                            <input type="Email" name="Eamil2" id="Email2" placeholder="E-mail" />
                                        </label>
                                    </div>
                                    <div class="d1 number">
                                        <label for="#">
                                            <input type="number" name="number1" id="number1" placeholder="Number" />
                                        </label>
                                    </div>
                                    <div class="d1 select">
                                        <label>
                                            <select name="Service" id="service">
                                                <option value="one1">Web development</option>
                                                <option value="two2">App development</option>
                                                <option value="three3">UI & UX</option>
                                                <option value="Four4">Digital Marketing</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div class="d1 Submit2">
                                        <label for="#">
                                            <input type="Submit" name="Sub" id="submit2" value="Schedule A Consultation Call" />
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- end--here----Contact--Form --> */}
                    </div>
                </div>
            </section>
            {/* <!--services --> */}

            <section class="Our-Service_wrapper wow fadeIn" style={{ visibility: "visible" }}>
                {/* <div class="top_icon_wrp">
                    <a href="#Scroll_bottm" class="top_icon1" title="Click for bottom">
                        <span class="bullet"></span>
                    </a>
                </div> */}
                <div class="container">
                    <div class="Srv-heading">
                        <h2 data-aos="zoom-in"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine">Our <span>Services</span> </h2>
                        <p data-aos="fade-up"
                            data-aos-duration="1400"
                            data-aos-easing="ease-in-sine">We provide extensive fruitful services of Web Development, Ux/UI Development, Application Development, and <br />Digital Marketing to enhance business profits. <br />We are happy to help you!
                        </p>
                    </div>
                    <div class="Service_content">
                        <div class="a1 Srv_cmn" data-tilt data-tilt-reverse="true" data-aos="fade-right"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine">
                            <figure>
                                <span class="spn1"> <img src="image/appdev11.gif" alt="img" /></span>
                            </figure>
                            <figcaption>
                                <h2>
                                    App Development
                                </h2>
                                {/* <!-- <p>Our significant knowledge of mobile application development technologies & frameworks,…</p> --> */}
                                <a href="/AppDevelopment">Learn more<i class="fas fa-chevron-right"></i></a>
                            </figcaption>
                        </div>
                        <div class="a2 Srv_cmn" data-tilt data-tilt-reverse="true" data-aos="fade-down"
                            data-aos-duration="1350"
                            data-aos-easing="ease-in-sine">
                            <figure>
                                <span class="spn1">   <img src="image/web_developing.gif" alt="img" /></span>
                            </figure>
                            <figcaption>
                                <h2>
                                    Web Development
                                </h2>
                                {/* <!-- <p>Our significant knowledge of mobile application development technologies & frameworks,…</p> --> */}
                                <a href="/WebDevelopment">Learn more<i class="fas fa-chevron-right"></i></a>
                            </figcaption>
                        </div>
                        <div class="a3 Srv_cmn" id="Scroll_bottm" data-tilt data-tilt-reverse="true" data-aos="fade-left"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine">
                            <figure>
                                <span class="spn1">   <img src="image/ui.gif" alt="img" /></span>
                            </figure>
                            <figcaption>
                                <h2>
                                    UI/UX Design
                                </h2>
                                {/* <!-- <p>Our significant knowledge of mobile application development technologies & frameworks,…</p> --> */}
                                <a href="/UiDevelopment">Learn more<i class="fas fa-chevron-right"></i></a>
                            </figcaption>
                        </div>
                        {/* <!-- <div class="a4 Srv_cmn" data-tilt data-tilt-reverse="true" data-aos="fade-right"
                                    data-aos-duration="500"
                                    data-aos-easing="ease-in-sine">
                                    <figure>
                                        <span class="spn1">   <img src="image/brand1.gif" alt="img"></span>
                                    </figure>
                                    <figcaption>
                                        <h2>
                                            Brand & Identity
                                        </h2>
                                        <p>Our significant knowledge of mobile application development technologies & frameworks,…</p>
                                        <a href="brand.html">Learn more<i class="fas fa-chevron-right"></i></a>
                                    </figcaption>
                                </div>
                                <div class="a5 Srv_cmn" data-tilt data-tilt-reverse="true" data-aos="fade-up"
                                    data-aos-duration="1350"
                                    data-aos-easing="ease-in-sine">
                                    <figure>
                                        <span class="spn1">   <img src="image/SEO.gif" alt="img"></span>
                                    </figure>
                                    <figcaption>
                                        <h2>
                                            SEO
                                        </h2>
                                        <p>Our significant knowledge of mobile application development technologies & frameworks,…</p>
                                        <a href="seo.html">Learn more<i class="fas fa-chevron-right"></i></a>
                                    </figcaption>
                                </div> -->
                                <!-- <div class="a6 Srv_cmn" data-tilt data-tilt-reverse="true" data-aos="fade-left"
                                    data-aos-duration="500"
                                    data-aos-easing="ease-in-sine">
                                    <figure>
                                        <span class="spn1">   <img src="image/content.gif" alt="img"></span>
                                    </figure>
                                    <figcaption>
                                        <h2>
                                            Content Marketing
                                        </h2>
                                        <p>Our significant knowledge of mobile application development technologies & frameworks,…</p>
                                        <a href="content.html">Learn more<i class="fas fa-chevron-right"></i></a>
                                    </figcaption>
                                </div> --> */}
                        <div class="a6 Srv_cmn" data-tilt data-tilt-reverse="true" data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine">
                            <figure>
                                <span class="spn1">   <img src="image/Digital.gif" alt="img" /></span>
                            </figure>
                            <figcaption>
                                <h2>
                                    Digital Marketing
                                </h2>
                                {/* <!-- <p>Our significant knowledge of mobile application development technologies & frameworks,…</p> --> */}
                                <a href="/Digital">Learn more<i class="fas fa-chevron-right"></i></a>
                            </figcaption>
                        </div>
                    </div>
                </div>

            </section>


            <section class="Achivement_wapper wow fadeIn" style={{ visibility: "visible" }}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine">
                <div class="Achiv_wave">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L120,202.7C240,213,480,235,720,224C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                </div>
                <div class="container">
                    <div class="Achievement_content">
                        <ul class="Achieve_unord">
                            <li class="Achievement_cnt01" data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-sine">
                                <figure>
                                    {/* <!-- <img src="" alt="img"> --> */}
                                    <b> <i class="fas fa-user-alt"></i></b>
                                    <span class="spin1">
                                        {/* <!-- <i class="fas fa-user-alt"></i> --> */}
                                    </span>
                                </figure>
                                <figcaption>
                                    <h3 class="count">3</h3><span>+</span>
                                    <p>Telented Experts</p>
                                </figcaption>
                            </li>
                            <li class="Achievement_cnt02" data-aos="zoom-in"
                                data-aos-duration="1400"
                                data-aos-easing="ease-in-sine">
                                <figure>
                                    {/* <!-- <img src="" alt="img"> --> */}
                                    <b> <i class="fas fa-laptop-code"></i></b>
                                    <span class="spin1">
                                        {/* <!-- <i class="fas fa-laptop-code"></i> --> */}
                                    </span>
                                </figure>
                                <figcaption>
                                    <h3 class="count">5</h3><span>+</span>
                                    <p>Happy clients</p>
                                </figcaption>
                            </li>
                            <li class="Achievement_cnt03" data-aos="zoom-in"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-sine">
                                <figure>
                                    {/* <img src="" alt="img"> */}
                                    <b> <i class="fas fa-rocket"></i></b>
                                    <span class="spin1">
                                    </span>
                                </figure>
                                <figcaption>
                                    <h3 class="count">4</h3><span>+</span>
                                    <p>website launched</p>
                                </figcaption>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            <section class="About_wrapper wow fadeIn" style={{ visibility: "visible" }}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine">
                <div class="container">
                    <div class="About_content">
                        <div class="Abt_left Abt_cmn01" data-aos="zoom-in-up"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine">
                            <figure>
                                <img src="image/about2.gif" alt="img" />
                            </figure>
                        </div>
                        <div class="Abt_right Abt_cmn01">
                            <h2 data-aos="fade-left"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-sine">We are IT & Digital Marketing Company</h2>
                            <p data-aos="fade-left"
                                data-aos-duration="1400"
                                data-aos-easing="ease-in-sine">Tech DH is one of the best Information Technology and Digital Marketing Company in India, offering its extensive result-driven services to its global clients with the motive to enhance their business revenue. We help the business to transfer their offline business in to online and also to step-up on the online business mode with a strong appearance. We always work to offer our clients the out-of-box IT and Digital services that will provide them business advantages. Our expert professionals have great experience that leads our way to cater every need of our clients. We put all of our efforts dedicatedly to serve our clients with cutting-edge solutions so that they can compete in this ever-changing industry.</p>
                            <a data-aos="fade-left"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-sine" href="about.html" class="hvr-bounce-to-right">
                                learn more <i class="fas fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- porfolio--k --> */}
            <section class="Portfolio-wrapper wow fadeIn" id="Portfolio" style={{ visibility: "visible" }} >
                <div class="container">
                    <div class="port-heading">
                        <h2 data-aos="zoom-in"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine">Click Recent Work</h2>
                        <p data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine">We have completed projects in different Sectors like Financial Services Industry, Real Estate Industry, and Tertiary Industries.
                        </p>
                    </div>
                    <div class="Port_content">
                        <ul class="Port_tab">
                            {/* <!-- <li data-aos="zoom-in" -->
                                <!-- data-aos-duration="500" -->
                            <!-- data-aos-easing="ease-in-sine" class="List01 List_active"><a href="javascript:void(0)" onclick="openList('List1')">Web design</a></li> -->
                            <!-- <li data-aos="zoom-in" -->
                            <!-- data-aos-duration="1350" -->
                            <!-- data-aos-easing="ease-in-sine" class="List01"><a href="javascript:void(0)"  onclick="openList('List2')">Web development</a></li> -->
                            <!-- <li  data-aos="zoom-in" -->
                            <!-- data-aos-duration="1400" -->
                            <!-- data-aos-easing="ease-in-sine"class="List01"><a href="javascript:void(0)"  onclick="openList('List3')">mobile App</a></li> --> */}
                        </ul>
                        {/* <!-- firs01 -->
                    <!-- <div class="port_tab-content port01" id="List1"> -->
                         <!-- <ul> -->
                             <!-- <li  data-aos="fade-right" -->
                                 <!-- data-aos-duration="500" -->
                             <!-- data-aos-easing="ease-in-sine" class="port_li_Wrp port_cmn"> -->
                                 <!-- <div class="port-web"> -->
                                     <!-- <figure> -->
                                         <!-- <img src="image/port01.gif" alt="img"> -->
                                     <!-- </figure> -->
                                     <!-- <figcaption> -->
                                         <!-- <p>PATTERSONSFURNITURE.CA</p> -->
                                         <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                                     <!-- </figcaption> -->
                                 <!-- </div> -->
                             <!-- </li> -->
                             <!-- <li  data-aos="fade-right" -->
                             <!-- data-aos-duration="1400" -->
                             <!-- data-aos-easing="ease-in-sine" class="port_li_Wrp2 port_cmn"> -->
                                 <!-- <div class="port-web"> -->
                                    <!-- <figure> -->
                                        <!-- <img src="image/port3.gif" alt="img"> -->
                                    <!-- </figure> -->
                                    <!-- <figcaption> -->
                                        <!-- <p>PATTERSONSFURNITURE.CA</p> -->
                                        <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                                    <!-- </figcaption> -->
                            <!-- </div> -->
                           <!-- </li> -->
                             <!-- <li  data-aos="fade-left" -->
                             <!-- data-aos-duration="1400" -->
                             <!-- data-aos-easing="ease-in-sine" class="port_li_Wrp3 port_cmn"> -->
                                 <!-- <div class="port-web"> -->
                                    <!-- <figure> -->
                                        <!-- <img src="image/port4.gif" alt="img"> -->
                                    <!-- </figure> -->
                                    <!-- <figcaption> -->
                                        <!-- <p>PATTERSONSFURNITURE.CA</p> -->
                                        <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                                    <!-- </figcaption> -->
                             <!-- </div> -->
                          <!-- </li> -->
                          <!-- <li  data-aos="fade-right" -->
                              <!-- data-aos-duration="500" -->
                          <!-- data-aos-easing="ease-in-sine" class="port_li_Wrp4 port_cmn"> -->
                            <!-- <div class="port-web"> -->
                               <!-- <figure> -->
                                   <!-- <img src="image/port3.gif" alt="img"> -->
                               <!-- </figure> -->
                               <!-- <figcaption> -->
                                   <!-- <p>PATTERSONSFURNITURE.CA</p> -->
                                   <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                               <!-- </figcaption> -->
                        <!-- </div> -->
                         <!-- </li> -->
                         <!-- </ul> -->
                    <!-- </div> -->
                     <!-- firs02 -->
                     <!-- <div class="port_tab-content port02" id="List2" style="display:none"  data-aos="fade-up" -->
                         <!-- data-aos-duration="500" -->
                     <!-- data-aos-easing="ease-in-sine"> -->
                        <!-- <ul> -->
                            <!-- <li class="port_li_Wrp port_cmn"  data-aos="zoom-in" -->
                                <!-- data-aos-duration="500" -->
                            <!-- data-aos-easing="ease-in-sine"> -->
                                <!-- <div class="port-web"> -->
                                    <!-- <figure> -->
                                        <!-- <img src="image/port3.gif" alt="img"> -->
                                    <!-- </figure> -->
                                    <!-- <figcaption> -->
                                        <!-- <p>Loremreis.CA</p> -->
                                        <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                                    <!-- </figcaption> -->
                                <!-- </div> -->
                            <!-- </li> -->
                            <!-- <li class="port_li_Wrp2 port_cmn"> -->
                                <!-- <div class="port-web"> -->
                                   <!-- <figure> -->
                                       <!-- <img src="image/port01.gif" alt="img"> -->
                                   <!-- </figure> -->
                                   <!-- <figcaption> -->
                                       <!-- <p>PATTERSONSFURNITURE.CA</p> -->
                                       <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                                   <!-- </figcaption> -->
                           <!-- </div> -->
                       <!-- </li> -->
                            <!-- <li class="port_li_Wrp3 port_cmn"> -->
                                <!-- <div class="port-web"> -->
                                   <!-- <figure> -->
                                       <!-- <img src="image/port4.gif" alt="img"> -->
                                   <!-- </figure> -->
                                   <!-- <figcaption> -->
                                       <!-- <p>loremfsoeomLErs.CA</p> -->
                                       <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                                   <!-- </figcaption> -->
                            <!-- </div> -->
                         <!-- </li> -->
                         <!-- <li class="port_li_Wrp4 port_cmn"> -->
                           <!-- <div class="port-web"> -->
                              <!-- <figure> -->
                                  <!-- <img src="image/port5.gif" alt="img"> -->
                              <!-- </figure> -->
                              <!-- <figcaption> -->
                                  <!-- <p>Lorem,ipsum..CA</p> -->
                                  <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                              <!-- </figcaption> -->
                       <!-- </div> -->
                    <!-- </li> -->
                        <!-- </ul> -->
                   <!-- </div> -->
                    <!-- firs03 -->
                    <!-- <div class="port_tab-content port02" id="List3" style="display:none"  data-aos="fade-up" -->
                        <!-- data-aos-duration="500" -->
                    <!-- data-aos-easing="ease-in-sine"> -->
                        <!-- <ul> -->
                            <!-- <li class="port_li_Wrp port_cmn"> -->
                                <!-- <div class="port-web"> -->
                                    <!-- <figure> -->
                                        <!-- <img src="image/port6.gif" alt="img"> -->
                                    <!-- </figure> -->
                                    <!-- <figcaption> -->
                                        <!-- <p>Loremreis.CA</p> -->
                                        <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                                    <!-- </figcaption> -->
                                <!-- </div> -->
                            <!-- </li> -->
                            <!-- <li class="port_li_Wrp2 port_cmn"> -->
                                <!-- <div class="port-web"> -->
                                   <!-- <figure> -->
                                       <!-- <img src="image/port4.gif" alt="img"> -->
                                   <!-- </figure> -->
                                   <!-- <figcaption> -->
                                       <!-- <p>PATTERSONSFURNITURE.CA33</p> -->
                                       <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                                   <!-- </figcaption> -->
                           <!-- </div> -->
                       <!-- </li> -->
                            <!-- <li class="port_li_Wrp3 port_cmn"> -->
                                <!-- <div class="port-web"> -->
                                   <!-- <figure> -->
                                       <!-- <img src="image/port3.gif" alt="img"> -->
                                   <!-- </figure> -->
                                   <!-- <figcaption> -->
                                       <!-- <p>loremfsoeomLErs.CA3</p> -->
                                       <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                                   <!-- </figcaption> -->
                            <!-- </div> -->
                         <!-- </li> -->
                         <!-- <li class="port_li_Wrp4 port_cmn"> -->
                           <!-- <div class="port-web"> -->
                              <!-- <figure> -->
                                  <!-- <img src="image/port4.gif" alt="img"> -->
                              <!-- </figure> -->
                              <!-- <figcaption> -->
                                  <!-- <p>Lorem,ipsum..CA</p> -->
                                  <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                              <!-- </figcaption> -->
                       <!-- </div> -->
                    <!-- </li> -->
                    <!-- <li class="port_li_Wrp5 port_cmn"> -->
                        <!-- <div class="port-web"> -->
                           <!-- <figure> -->
                               <!-- <img src="image/port5.gif" alt="img"> -->
                           <!-- </figure> -->
                           <!-- <figcaption> -->
                               <!-- <p>Lorem,ipsum..CA5</p> -->
                               <!-- <a href="javascript:void(0)" class="hvr-bounce-to-right">Launch Website<i class="fas fa-angle-right"></i></a> -->
                           <!-- </figcaption> -->
                    <!-- </div> -->
                 <!-- </li> -->
                        <!-- </ul> -->
                   <!-- </div> -->
               </div> */}
                    </div>
                </div>
            </section>

            <section
                class="Testimonial_wrapper wow fadeIn"
                style={{ visibility: "visible" }}
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <div class="container">
                    <div class="testimonial-heading">
                        <h2
                            data-aos="zoom-in"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-sine"
                        >
                            Testimonials
                        </h2>
                    </div>
                    <div class="Testimonial_content">
                        <div class="testimonial_child slider1">
                            <OwlCarousel className='owl-theme' loop margin={10} items={1} autoplay={true} >
                                <div
                                    class="testimonial-subchild wow fadeIn"
                                    style={{ visibility: "visible" }}
                                >
                                    <div
                                        class="test_lft"
                                        data-aos="fade-right"
                                        data-aos-duration="500"
                                        data-aos-easing="ease-in-sine"
                                    >
                                        <figure>
                                            <img src="image/Ashish S..png" alt="img" />
                                            <h4>Ashish S.</h4>
                                        </figure>
                                    </div>
                                    <div
                                        class="test_right"
                                        data-aos="fade-left"
                                        data-aos-duration="500"
                                        data-aos-easing="ease-in-sine"
                                    >
                                        <p>Done great work completed the task <br /> on time</p>
                                    </div>
                                </div>
                                <div
                                    class="testimonial-subchild wow fadeIn"
                                    style={{ visibility: "visible" }}
                                >
                                    <div class="test_lft">
                                        <figure>
                                            <img src="image/Smokyweb.png" alt="img" />
                                            <h4>Smokyweb</h4>
                                        </figure>
                                    </div>
                                    <div class="test_right">
                                        <p>You excel at serving our customers. Good Experience!</p>
                                    </div>
                                </div>
                                {/* <!-- <div class="testimonial-subchild wow fadeIn" style="visibility: visible;">
                                <div class="test_lft">
                                    <figure>
                                        <img src="image/alina.png" alt="img"/>
                                            <h4>Alena jackson</h4>
                                    </figure>
                                </div>
                                <div class="test_right">
                                    <p>Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.</p>
                                </div>
                            </div> --> */}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div
                class="right-sticky"
                id="right-sticky wow fadeIn"
                style={{ visibility: "visible" }}
            >
                <a href="#">Get in touch</a>
            </div> */}

            {/* <!-- social---icon --> */}
            {/* <!-- end---here --> */}
            {/* <!-- chat-bot --> */}
            {/* <div class="chat_img" id="chat_img">
                <img src="image/chat-image.svg" alt="img" />
                <span
                    id="close02"
                    class="close02"
                    role="button"
                    onclick={() => { document.getElementById('chat_img').style.display = 'none' }}
                    title="Close chat"
                >X</span
                >
            </div>
            <div class="chatbox-open">
                <img src="image/fevicon.png" alt="image" />
            </div> */}
            {/* <section
                class="chatbox-popup wow fadeIn"
                style={{ visibility: "visible" }}
                id="chatbox-popup"
            >
                <div class="chatbox-popup__header">
                    <aside style="flex: 3">
                        <i
                            class="fa fa-user-circle fa-4x chatbox-popup__avatar"
                            aria-hidden="true"
                        ></i>
                    </aside>
                    <aside style="flex: 8" class="Agent-name">
                        <h2>Max Austin</h2>
                        <b>Agent (Online)</b> <sup><p></p></sup>
                    </aside>
                    <aside style="flex: 1">
                        <button class="chatbox-maximize" title="minimize">
                            <i class="fa fa-window-minimize" aria-hidden="true"></i>
                        </button>
                    </aside>
                </div>
                <div class="chatbox-popup__main">
                    We make it simple for<br />
                    bussiness and people to talk to each<br />
                    other. Ask us anything.
                </div>
                <div class="chatbox-popup__footer">
                    <aside style="flex: 10">
                        <textarea
                            type="text"
                            placeholder="Type your message here..."
                            autofocus
                        ></textarea>
                    </aside>
                    <aside
                        class="aside-wrp"
                        style={flex: 2; color: #888; text-align: center}
                    >
                    <span> <i class="fas fa-paperclip" title="upload"></i></span>
                    <span
                    ><i class="fa fa-paper-plane" title="send" aria-hidden="true"></i
                    ></span>
                </aside>
        </div>
            </section > */}


        </div >
    )
}

export default Home;