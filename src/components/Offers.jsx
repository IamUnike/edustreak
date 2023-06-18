import offerImg from '../assets/offers-img.webp'

const Offers = () => {
    return ( 
        <div className="offers" id='offers'>
            <section>

                <div className="part1">
                    <h4 className="headline"> This Is Why We Are Best From Others </h4>
                    <p> High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image </p>

                    <img src={offerImg} alt="" loading='lazy' />
                </div>


                <div className="part2">
                    <ul className='offer-grid'>
                        
                        <li className='article'> 
                            <span>
                                <i className='fa fa-microphone'></i>
                            </span>

                            <h6> Experienced Mentors </h6>
                            <p> high-definition video is video of higher resolution and quality than standard definition.</p>
                        </li>

                        <li className='article'> 
                            <span>
                                <i className='fa fa-microphone'></i>
                            </span>

                            <h6> Experienced Mentors </h6>
                            <p> high-definition video is video of higher resolution and quality than standard definition. </p>
                        </li>

                        <li className='article'> 
                            <span>
                                <i className='fa fa-microphone'></i>
                            </span>

                            <h6> Experienced Mentors </h6>
                            <p> high-definition video is video of higher resolution and quality than standard definition. </p>
                        </li>

                        <li className='article'> 
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
