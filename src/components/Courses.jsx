import courseImg from '../assets/course-img.webp'
import overlayImg from '../assets/overlay-img.webp'
import crown from '../assets/crown.webp'

const Courses = () => {
    return ( 
        <div className="course-section">
            <section>
                <div className="course-text" data-aos='fade-up' data-aos-duration='500'>
                    <div className='course-header'>
                        <img src={crown} alt="" />
                        <h4 className="headline"> High Quality Video, Audio & Live Classes </h4>
                    </div>
                    
                    <p> High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image </p>

                    <div>
                        <button className="secondary-btn" data-aos='zoom-in' data-aos-duration='500'> View Courses </button>
                    </div>

                    <div className="course-offers">
                        <div data-aos='zoom-in' data-aos-duration='500'>
                            <i className="fa fa-microphone">  </i>
                            <p> audio classes </p>
                        </div>

                        <div data-aos='zoom-in' data-aos-duration='700'>
                            <i className="fa fa-refresh">  </i>
                            <p> live classes </p>
                        </div>

                        <div data-aos='zoom-in' data-aos-duration='900'>
                            <i className="fa fa-microphone">  </i>
                            <p> recorded classes </p>
                        </div>

                        <div data-aos='zoom-in' data-aos-duration='1000'>
                            <i className="fa fa-book">  </i>
                            <p> 50+ notes </p>
                        </div>
                    </div>

                </div>



                <div className="course-img-area" data-aos='zoom-in' data-aos-duration='700'>
                    <div className='course-img' >
                        <img src={courseImg} alt="" />
                    </div>

                    <div className='course-overlay'>
                        <img src={overlayImg} alt="" />
                    </div>  
                </div>

            </section>
        </div>
     );
}
 
export default Courses;