
import './AboutUs.css'
import {images} from '../../constants'
const AboutUs = () =>(
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
        <div className='app__aboutus-overlay flex__center'>
                <img src={images.G} alt="G letter"/>
        </div>

        <div className='app__aboutus-content flex__center'>
            <div className='app__aboutus-content_about'>
                <h1 className='headtext__cormorant'>About Us</h1>
                <img src={images.spoon} alt="about spoon"/>
                <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                <button type="button" className='custom__button'>Know More</button>
            </div>
            <div className='app__aboutus-content_knife flex-center'>
                <img src={images.knife} alt="about_Knife"/>
            </div>

            <div className='app__aboutus-content_history'>
                <h1 className='headtext__cormorant'>Our History</h1>
                <img src={images.spoon} alt="about spoon"/>
                <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
                <button type="button" className='custom__button'>Know More</button>
            </div>
        </div>
    </div>
    
)

export default AboutUs