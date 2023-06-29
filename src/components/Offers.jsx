import offerImg from '../assets/offers-img.webp'

const Offers = () => {
    return ( 
        <div className="offers" id='offers'>
            <section>

                <div className="part1">
                    <h4 className="headline" data-aos='fade-up' data-aos-duration='500'> This Is Why We Are Best From Others </h4>
                    <p data-aos='fade-up' data-aos-duration='700'> High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image </p>

                    <img src={offerImg} alt="" loading='lazy' data-aos='zoom-in' data-aos-duration='700' />
                </div>


                <div className="part2">
                    <ul className='offer-grid'>
                        
                        <li className='article' data-aos='zoom-in' data-aos-duration='500'> 
                            <span>
                                <i className='fa fa-microphone'></i>
                            </span>

                            <h6> Experienced Mentors </h6>
                            <p> high-definition video is video of higher resolution and quality than standard definition.</p>
                        </li>

                        <li className='article' data-aos='zoom-in' data-aos-duration='700'> 
                            <span>
                                <i className='fa fa-microphone'></i>
                            </span>

                            <h6> Experienced Mentors </h6>
                            <p> high-definition video is video of higher resolution and quality than standard definition. </p>
                        </li>

                        <li className='article' data-aos='zoom-in' data-aos-duration='900'> 
                            <span>
                                <i className='fa fa-microphone'></i>
                            </span>

                            <h6> Experienced Mentors </h6>
                            <p> high-definition video is video of higher resolution and quality than standard definition. </p>
                        </li>

                        <li className='article' data-aos='zoom-in' data-aos-duration='1000'> 
                            <span>
                                <i className='fa fa-microphone'></i>
                            </span>

                            <h6> Experienced Mentors </h6>
                            <p> high-definition video is video of higher resolution and quality than standard definition. </p>
                        </li>
                        
                    </ul>
                </div>

            </section>
        </div>
     );
}
 
export default Offers;
