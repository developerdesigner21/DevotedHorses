function About() {
    return (
        <div class="app-development About-us_Wrapper wow fadeIn" style={{ marginTop: "5.2%" }}>
            <section class="banner_wrapper wow fadeIn" style={{ visibility: "visible" }}>
                {/* <!-- id="module" --> */}
                <div id="element2"></div>
                <div class="container">
                    <div class="Banner_content">
                        <div class="Bnr_left bnr-cmn">
                            <div class="hero_text">
                                <h1 data-aos="zoom-in" data-aos-duration="500">About Us</h1>
                            </div>
                            {/* <!-- cd-intro --> */}
                            <p data-aos="fade-up" data-aos-duration="1400">
                                We provide Service of Web Development, Ux/UI Development,
                                Application Development and Digital Marketing with the intention
                                to enhance your business profits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- App content -->
            <!-- end---here --> */}

            <section
                class="
          Our-Service_wrapper
          UIContent_Wrp
          AppConten_wrp
          Android_wrp
          wow
          fadeIn
        "
                style={{ visibility: "visible" }}
            >
                <div class="container">
                    {/* <!-- <div class="Srv-heading">
                        <h2>Android app development Lorem, ipsum.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  adipisicing elit.<br> Placeat, illo?
                            dolor sit amet consectetur adipisicing <br> elit. Placeat, illo?
                            </p>
                        </div> --> */}
                    <div class="App_cnt Android_app1 UxDesign">
                        <div
                            class="left_app1 left-cmn01"
                            data-tilt
                            data-tilt-glare
                            data-tilt-max-glare="0.8"
                        >
                            <figure data-aos="fade-right" data-aos-duration="1600">
                                <img src="image/aboutus.gif" alt="img" />
                            </figure>
                        </div>
                        <div class="right_app1 left-cmn01">
                            <h2 data-aos="fade-left" data-aos-duration="1400">
                                TechDH Overview
                            </h2>
                            <p data-aos="fade-left" data-aos-duration="1600">
                                TechDH is a web application development company, with offices in
                                Surat, Gujarat, India. The company is focused on custom software
                                development outsourcing across multiple technologies including
                                Java, PHP, JavaScript and many more. We help the business to
                                transfer their offline business in to online and to step-up on
                                the online business mode with a strong appearance. We always
                                work to offer our clients the out-of-box IT and Digital services
                                that will provide them business advantages.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div
                class="right-sticky"
                id="right-sticky wow fadeIn"
                style={{ visibility: "visible" }}
            >
                <a href="#">Get in touch</a>
            </div>

            <div
                class="contact-form wow fadeIn"
                style={{ visibility: "visible" }}
                id="contact-form"
            >
                <div class="child-wrp" id="mydivheader">
                    <div class="head-box">
                        {/* <!-- <img src="image/logo1.png" alt=""> --> */}
                    </div>
                    <a
                        href="#"
                        onclick="document.getElementById('contact-form').style.right='-200%'"
                        class="Close3"
                        title="close"
                    >X</a
                    >
                    <form action="#">
                        <div class="d1 name1">
                            <label for="#">
                                <input type="text" name="name1" id="name1" placeholder="Name" />
                            </label>
                        </div>
                        <div class="d1 number">
                            <label for="#">
                                <input
                                    type="number"
                                    name="number1"
                                    id="number1"
                                    placeholder="Number"
                                />
                            </label>
                        </div>
                        <div class="d1 Email2">
                            <label for="#">
                                <input
                                    type="Email"
                                    name="Eamil2"
                                    id="Email2"
                                    placeholder="E-mail"
                                />
                            </label>
                        </div>
                        <div class="d1 Submit2">
                            <label for="#">
                                <input
                                    type="Submit"
                                    name="Sub"
                                    id="submit2"
                                    placeholder="Submit"
                                />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default About;