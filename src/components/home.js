
import Frasesslide from './FrasesSlide';
import ObrasGrid from './obras-grid';
import Servicios from './servicios';
import Acerca from './Acerca';
import ContactUs from './ContactUs';
import Bullerengue from './bullerengue';
const Home = () => {
    return ( <>
        <main className='home'>
           <div className="wrapper-video">
            <div className='overlay-bg'> layer </div>
            <div className='herovideo-container'></div>
            <iframe className='hero-video' width="560" height="315" src="https://www.youtube.com/embed/FSbPdl_LntU?si=XlcZTHLn5i9O5ezO&amp;controls=0&amp;start=102&amp;autoplay=1&amp;mute=1&amp;playsinline=1&amp;loop=1&amp;showinfo=0&amp;playlist=FSbPdl_LntU" title='Home video'></iframe>
            </div> 
            <div className='hero-text'>
                 <Frasesslide />
               </div>  
              <Bullerengue />   
               <ObrasGrid/>
                <Servicios />
                <Acerca/>
                <ContactUs />
              </main>
            
              </>
     );
}
 
export default Home;