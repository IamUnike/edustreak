import ux from '../assets/ux.webp'
import uxTutor from '../assets/ux-tutor.webp'

const Popular = () => {
    return ( 
        <div className="popular" id='courses'>
            <section>
                <div className="center">
                    <h4 className="headline"> Browse our popular courses </h4>

                    <p> high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image </p>
                </div>
                <br />

                <div className="center">
                    <div className="button-container">
                        <button className="primary-btn"> All Categories </button>
                        <button> Design </button>
                        <button> Development </button>
                        <button> Marketing </button>
                    </div>
                </div>

                <div className="popular-container">
                    <article className="card">
                        <div>
                            <img src={ux} alt="" loading='lazy' />
                        </div>

                        <div>
                            <div className="space-between">
                                <span class="tag">design</span>
                                <span class="flex">
                                    <p>4.7k <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></p>
                                    <p>(17.k)</p>
                                </span>
                            </div>

                            <h4 class="tophead">introduction to user research in ux design</h4> 

                            <div class="space-between">
                                <div class="flex">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg></span>
                                    <p>23hrs 50mins</p>
                                </div>

                                <div class="flex">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg></span>
                                    <p>15 lessons</p>
                                </div>
                            </div>
                            
                            <div class="space-between">
                                <div class="flex">
                                    <span>
                                        <img src={uxTutor} alt="introduction to user research in ux design" loading="lazy" style={{width:"40px", height:"40px"}} decoding="async" />
                                    </span>
                                    
                                    <h6 className="tutor">leonard victor</h6>
                                </div>

                                <div>
                                    <h5 className="price blue">$15.00</h5>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="card">
                        <div>
                            <img src={ux} alt="" loading='lazy' />
                        </div>

                        <div>
                            <div className="space-between">
                                <span class="tag">design</span>
                                <span class="flex">
                                    <p>4.7k <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></p>
                                    <p>(17.k)</p>
                                </span>
                            </div>

                            <h4 class="tophead">introduction to user research in ux design</h4> 

                            <div class="space-between">
                                <div class="flex">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg></span>
                                    <p>23hrs 50mins</p>
                                </div>

                                <div class="flex">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg></span>
                                    <p>15 lessons</p>
                                </div>
                            </div>
                            
                            <div class="space-between">
                                <div class="flex">
                                    <span>
                                        <img src={uxTutor} alt="introduction to user research in ux design" loading="lazy" style={{width:"40px", height:"40px"}} decoding="async" />
                                    </span>
                                    
                                    <h6 className="tutor">leonard victor</h6>
                                </div>

                                <div>
                                    <h5 className="price blue">$15.00</h5>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="card">
                        <div>
                            <img src={ux} alt="" loading='lazy' />
                        </div>

                        <div>
                            <div className="space-between">
                                <span class="tag">design</span>
                                <span class="flex">
                                    <p>4.7k <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></p>
                                    <p>(17.k)</p>
                                </span>
                            </div>

                            <h4 class="tophead">introduction to user research in ux design</h4> 

                            <div class="space-between">
                                <div class="flex">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg></span>
                                    <p>23hrs 50mins</p>
                                </div>

                                <div class="flex">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg></span>
                                    <p>15 lessons</p>
                                </div>
                            </div>
                            
                            <div class="space-between">
                                <div class="flex">
                                    <span>
                                        <img src={uxTutor} alt="introduction to user research in ux design" loading="lazy" style={{width:"40px", height:"40px"}} decoding="async" />
                                    </span>
                                    
                                    <h6 className="tutor">leonard victor</h6>
                                </div>

                                <div>
                                    <h5 className="price blue">$15.00</h5>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="card">
                        <div>
                            <img src={ux} alt="" loading='lazy' />
                        </div>

                        <div>
                            <div className="space-between">
                                <span class="tag">design</span>
                                <span class="flex">
                                    <p>4.7k <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"> <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></p>
                                    <p>(17.k)</p>
                                </span>
                            </div>

                            <h4 class="tophead">introduction to user research in ux design</h4> 

                            <div class="space-between">
                                <div class="flex">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg></span>
                                    <p>23hrs 50mins</p>
                                </div>

                                <div class="flex">
                                    <span>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path></svg></span>
                                    <p>15 lessons</p>
                                </div>
                            </div>
                            
                            <div class="space-between">
                                <div class="flex">
                                    <span>
                                        <img src={uxTutor} alt="introduction to user research in ux design" loading="lazy" style={{width:"40px", height:"40px"}} decoding="async" />
                                    </span>
                                    
                                    <h6 className="tutor">leonard victor</h6>
                                </div>

                                <div>
                                    <h5 className="price blue">$15.00</h5>
                                </div>
                            </div>
                        </div>
                    </article>
                    
                </div>

                <div class="center">
                    <br /><br />
                    <button class="secondary-btn">explore all courses</button>
                </div>

            </section>
        </div>
     );
}
 
export default Popular;