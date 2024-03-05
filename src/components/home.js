import React from 'react';
//import FrasesSlide from './Frases-slide';
//import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
//import 'swiper/css';
import transition from '../transition';
import Frasesslide from './FrasesSlide';
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
        <main className='main-section home'>
           * <div className="wrapper-video">
            <div className='overlay-bg'> layer </div>
            <div className='video-container'></div>
            <iframe className='hero-video' width="560" height="315" src="https://www.youtube.com/embed/FSbPdl_LntU?si=XlcZTHLn5i9O5ezO&amp;controls=0&amp;start=102&amp;autoplay=1&amp;mute=1&amp;playsinline=1&amp;loop=1&amp;showinfo=0&amp;playlist=FSbPdl_LntU" title='Home video'></iframe>
            </div> 
            <div className='hero-text'>
                 <Frasesslide />
              <Link className="button button-primary" to="/exploranos">
                  Explóranos
              </Link>
               </div>
            <div>
            </div> 
              </main>

     );
}
 
export default transition(Home);