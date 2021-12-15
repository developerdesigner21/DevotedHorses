import react, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
function Header() {
    const [active, setActive] = useState(window.innerWidth > 992 ? true : false);



    // const navigate = useNavigate();
    // const handleClick = () => navigate("/about");
    return (
        <>
            <header id="navbar" style={{ position: "fixed", padding: 0 }}>
                <div class="container">
                    <nav>
                        <div class="logo your-element" data-tilt data-tilt-reverse="true" >
                            {/* <!-- data-tilt data-tilt-glare data-tilt-max-glare="0.8" --> */}
                            <a href="#">
                                <img src="image/logo1.png" alt="logo" data-tilt data-tilt-glare data-tilt-max-glare="0.8" />
                            </a>
                        </div>
                        <div class="Nav_item myHeader" style={{ display: active ? "block" : "none" }}>
                            <ul class="menu">
                                <li ><a href="/" class="hvr-underline-from-center"> Home</a></li>
                                <li class="srv01 active"><a href="#" class="hvr-underline-from-center"> Services <i class="fas fa-angle-down"></i></a>
                                    <div class="service-wrp submenu wow fadeIn" style={{ visibility: "visible" }}>
                                        <a href="/AppDevelopment">App Development</a >
                                        <a href="/WebDevelopment">Web  Development</a >
                                        <a href="/UiDevelopment">UI/UX Design</a >
                                        <a href="/Digital">Digital Marketing</a >
                                        {/* <!-- <a href="content.html">Content Marketing</a > -->
                                    <!-- <a href="seo.html">SEO / SMO</a > --> */}
                                    </div>
                                </li>
                                <li><a href="/About" class="hvr-underline-from-center">About Us</a></li>
                                <li><a href="/Contact" class="hvr-underline-from-center"> Contact us</a></li>
                                {/* <!-- hvr-underline-from-left --> */}
                                <li class="Get_btn"><a href="Tel:7069201684" class="hvr-shutter-out-horizontal">+ 91 7069201684</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className={"main-bar " + (active ? 'activefile' : '')} onClick={() => { setActive(!active) }}>
                        <div class="a"></div>
                        <div class="b"></div>
                        <div class="c"></div>
                    </div>
                </div>
                <div class="progress-bar" id="myBar"></div>
            </header>
        </>

    )
}

export default Header;