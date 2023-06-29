import vscode from '../assets/vscode.webp'
import figma from '../assets/figma.webp'
import greenIcon from '../assets/green-icon.webp'
import lightIcon from '../assets/light-icon.webp'
import triangleIcon from '../assets/triangle-icon.webp'
import wordpress from '../assets/wordpress.webp'
import line from '../assets/line.webp'


const Main = () => {
    return ( 
        <main className="main"> 
            <section className="main-section">
                <div className="grid-container">
                    
                    <div className="main-text">
                        <h4 className='headline' data-aos='fade-up' data-aos-duration='500'> Grow Your Skills To Advance Your Career Path </h4>
                        <p data-aos='fade-up' data-aos-duration='700'> Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World </p>
                        
                        <div className="button-container" data-aos='zoom-in' data-aos-duration='700'>
                            <button className="secondary-btn"> Get Started Now </button>
                            <button className="primary-btn"> Enroll now </button>

                            <div className='line'>
                                <img src={line} alt="" loading='lazy' />
                            </div>
                        </div>
                    </div>

                    <div className="main-img" data-aos='zoom-in' data-aos-duration='500'>
                        <div className="vscode" >
                            <img src={vscode} alt="" loading="lazy" />
                        </div>

                        <div className="wordpress">
                            <img src={wordpress} alt="" loading="lazy" />
                        </div>

                        <div className="figma">
                            <img src={figma} alt="" loading="lazy" />
                        </div>

                        <div className="light-icon">
                            <img src={lightIcon} alt="" loading="lazy" />
                        </div>

                        <div className="green-icon">
                            <img src={greenIcon} alt="" loading="lazy" />
                        </div>

                        <div className="triangle-icon">
                            <img src={triangleIcon} alt="" loading="lazy" />
                        </div>
                    </div>

                </div>
            </section>
        </main>
     );
}
 
export default Main;