import tutor1 from '../assets/ux-tutor.webp'
import map from '../assets/map.webp'

const Connect = () => {
    return ( 
        <div class="blue-bg connect" id='connect'>
            <section>
                <div class="center">
                    
                    <div data-aos='fade-up' data-aos-duration='500'>
                        <h5 class="upper">join our community</h5>
                        <h4 class="headline">Are you  ready to connect with the future talent of the tech world</h4>
                        <p>meet up with other techstars and grow together</p>
                    </div>
                    
                    <div class="connect-image" data-aos='zoom-in' data-aos-duration='700'>
                        <img src={map} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        
                        <div class="item-1">
                            <img src={tutor1} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        </div>
                        
                        <div class="item-2">
                            <img src={tutor1} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        </div>
                        
                        <div class="item-3">
                            <img src={tutor1} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        </div>
                        
                        <div class="item-4">
                            <img src={tutor1} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        </div>
                        
                        <div class="item-5">
                            <img src={tutor1} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        </div>
                        
                        <div class="item-6">
                            <img src={tutor1} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        </div>
                        
                        <div class="item-7">
                            <img src={tutor1} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        </div>
                        
                        <div class="item-8">
                            <img src={tutor1} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        </div>
                        
                        <div class="item-9">
                            <img src={tutor1} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        </div>
                        
                        <div class="item-10">
                            <img src={tutor1} alt="map" loading="lazy" width="983" height="455" decoding="async"  />
                        </div>
                        
                    </div>
                    <br />

                    <button class="primary-btn" data-aos='zoom-in' data-aos-duration='700'>join our community</button></div></section></div>
     );
}
 
export default Connect;
