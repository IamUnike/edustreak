import { useState } from "react";

const Navbar = () => {
    const [navClick, setNavClick] = useState(false)


    return ( 
        <nav className="nav">
            <section className="header">
                
                {/* header logo */}
                <div className="logo" >
                    <h3 data-aos='fade-down' data-aos-duration='500'> Edu<span>Streak </span> </h3>
                </div>

                {/* navigation menu */}
                <div className="nav-menu">
                    <ul data-aos='fade-down' data-aos-duration='700'>
                        <li className="active"><a href="#"> Home </a></li>
                        <li><a href="#faq">About Us </a></li>
                        <li><a href="#courses"> Courses </a> </li>
                        <li><a href="#offers"> Offers </a> </li>
                        <li><a href="#connect"> Community </a> </li>
                    </ul>

                    <button className="primary-btn"> Enroll Now </button>
                </div>

                {/* mobile navigation menu */}
                <div className="mobile-nav" onClick={() => setNavClick(!navClick) } data-aos='fade-down' data-aos-duration='700'>
                    {!navClick ? <i className="fa fa-bars"> </i> : <i className="fa fa-close"> </i>}
                </div>

            </section>

            {navClick && 
                <div className="mobile-nav-view">
                    <ul>
                        <li className="active"><a href="#"> Home </a></li>
                        <li><a href="#faq">About Us </a></li>
                        <li><a href="#courses"> Courses </a> </li>
                        <li><a href="#offers"> Offers </a> </li>
                        <li><a href="#connect"> Community </a> </li> 
                    </ul>
                </div>}
                
        </nav>
     );
}
 
export default Navbar;