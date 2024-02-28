import React from 'react';
//import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
//import 'swiper/css';

const Home = () => {
    return ( 
        <div> 
            <div className="wrapper-video">
            <div className='overlay-bg'> layer </div>
            <div className='video-container'></div>
            <iframe className='hero-video' width="560" height="315" src="https://www.youtube.com/embed/FSbPdl_LntU?si=XlcZTHLn5i9O5ezO&amp;controls=0&amp;start=102&amp;autoplay=1&amp;mute=1&amp;playsinline=1&amp;loop=1&amp;showinfo=0" title='Home video'></iframe>
            </div>
            <div className='hero-text'>
                 <h1>Home Espiral Raiz</h1>
            </div>
            <div>
            </div>
              </div>

     );
}
 
export default Home;