import react from "react";



function Footer() {



    return (
        <div>
            <>

                <div class="social-wrp wow fadeIn" style={{ visibility: "visible" }}>
                    {/* <!-- <div class="s1 s-cmn01"><a href="javascript:(void)" class="a1"><b>Facebook</b> <i class="fab fa-facebook-f"></i></a></div> --> */}
                    <div class="s5 s-cmn01">
                        <a href="javascript:(void)" class="a3"
                        ><b>Google</b> <i class="fab fa-google"></i
                        ></a>
                    </div>
                    <div class="s2 s-cmn01">
                        <a href="javascript:(void)" class="a2"
                        ><b>Twitter</b> <i class="fab fa-twitter"></i
                        ></a>
                    </div>
                    <div class="s3 s-cmn01">
                        <a href="javascript:(void)" class="a4"
                        ><b>Linkdin</b> <i class="fab fa-linkedin"></i
                        ></a>
                    </div>
                    <div class="s4 s-cmn01">
                        <a href="javascript:(void)" class="a4"
                        ><b>Skype</b> <i class="fab fa-skype"></i
                        ></a>
                    </div>
                </div>

                <footer class="wow fadeIn" style={{ visibility: 'visible' }} data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine">
                    {/* <!-- Wave SVG Animation --> */}
                    <div class="waves">
                        <svg width="100%" height="200px" fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#000" /><stop offset="50%" stop-color="#000" />
                                <stop offset="100%" stop-color="#000" />
                            </linearGradient>
                            <path
                                fill="url(#grad1)"
                                d="M0 67 C 273,183 822,-40 1920.00,106  V 359 H 0  V 6 Z">
                                <animate repeatCount="indefinite" fill="url(#grad1)" attributeName="d" dur="15s" attributeType="XML"
                                    values=" M0 77  C 473,283  822,-40 1920,116 
                      V 359  H 0  V 67 Z; M0 77 C 473,-40 1222,283 1920,136 
                      V 359  H 0 V 67  Z;  M0 77  C 973,260 1722,-53 1920,120 
                      V 359 H 0 V 67 Z; 
                      M0 77 C 473,283 822,-40 1920,116 
                      V 359  H 0  V 67 Z">
                                </animate>
                            </path>
                        </svg>
                    </div>
                    <div class="container">
                        <div class="Footer-content">
                            <div class="Ft_item1 Ft_cmno1" data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-sine">
                                <ul>
                                    <h2 data-aos="zoom-in-up"
                                        data-aos-duration="500"
                                        data-aos-easing="ease-in-sine">
                                        <a href="javascript:(void)">
                                            <img src="image/logo1.png" alt="logo" data-tilt data-tilt-glare data-tilt-max-glare="0.8"></img>
                                        </a>
                                    </h2>
                                    <li>
                                        <a href="javascript:(void)">
                                            <p> 312 Shivalik, Dabholi Road, Surat 395004 </p>
                                            <p><b>Phone : </b>+91706920164</p>
                                            <p><b>Email : </b>devotedhorses@gmail.com</p>
                                        </a>
                                    </li>
                                    <li class="Connected">
                                        <h2>Stay Connected</h2>
                                        <ul class="Connect_unorder">
                                            <li><a href="javascript:(void)" class="a1"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="javascript:(void)" class="a2"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="javascript:(void)" class="a3"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="javascript:(void)" class="a4"><i class="fab fa-skype"></i></a></li>
                                            <li><a href="javascript:(void)" class="a1"><i class="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="Ft_item2 Ft_cmno1" data-aos="fade-up"
                                data-aos-duration="1400"
                                data-aos-easing="ease-in-sine">
                                <h2>Quicks Links</h2>
                                <ul>
                                    <li>
                                        <a href="/About" class="hvr-underline-from-left" >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Contact" class="hvr-underline-from-left">
                                            Contact us
                                        </a>
                                    </li>
                                    {/* <li> */}
                                    {/* <!-- <a href="javascript:void(0)" class="hvr-underline-from-left">
                                    privacy & policy
                                </a>
                                </li>
                             <li>
                                 <a href="javascript:void(0)" class="hvr-underline-from-left">
                                    Terms Condition
                                </a>
                                </li> --> */}
                                </ul>
                            </div>
                            <div class="Ft_item3 Ft_cmno1" data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-easing="ease-in-sine">
                                <h2>Subscribe</h2>
                                <ul>
                                    <li> <p>Get in your inbox the latest update  from Tech DH</p></li>
                                    <li class="E-mail">
                                        <label for="#">
                                            <input type="email" name="email" id="email" placeholder="E-mail" style={{ color: "black" }} autocapitalize="off" />
                                        </label>
                                    </li>
                                    <li class="Submit">
                                        <label for="#">
                                            <input type="submit" value="Subscribe" id="Submit" />
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- copyright---wrp--> */}
                    <div class="Copyright_wrp">
                        <div class="cpy-lft cpy-cmn">
                            <p>Copyright © 2021. DevotedHorses. All rights reserved</p>
                        </div>
                        <div class="cpy-rgt cpy-cm">
                            <p>
                                {/* <!-- <a href="javascript:(void)">
                                privacy & policy
                            </a>
                            <a href="javascript:(void)">
                                legal  terms
                            </a>
                            <a href="javascript:(void)">
                                FAQ's
                            </a>
                            <a href="javascript:(void)">
                                Support
                            </a> --> */}
                            </p>
                        </div>
                    </div>
                </footer>


            </>
        </div>
    )
}

export default Footer;