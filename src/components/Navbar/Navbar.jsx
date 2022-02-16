import {useState} from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import { MdOutlineRestaurantMenu} from 'react-icons/md'

import images from '../../constants/images'
import './Navbar.css'

const links =[
    'Home','About','Menu','Awards', 'Contact'
]

const Navbar = () =>{
    const [toggleMenu, setToggleMenu] = useState(false)

    return(
        <nav className ="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.gericht} alt="app logo"/>
            </div>
            {links.map((link,index) =>(
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href={`#${link}`} key={index}>{link}</a></li>
            </ul>
            ))}
            
            <div className="app__navbar-login">
                <a href="#login" className="p__opensans">LogIn / Register </a>
                <div />
                <a href="/" className="p__opensans">Book Table</a>   
            </div>
            <div className="app__navbar-smallcreen">
                <GiHamburgerMenu color = "#fff" fontSize={27} onClick ={ () =>{setToggleMenu(true)}} />
                {toggleMenu &&(
                    <div className="app__navbar-smallscreen_overlay flex__center silde-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>{setToggleMenu(false)}}/>
                            {links.map((link,index) =>(
                            <ul className="app__navbar_smallscreen-links">
                                <li className="p__opensans"><a href={`#${link}`} key={index}>{link}</a></li>
                        </ul>
                        ))}
                    </div>
                )}
            </div>

        </nav>
        )
}
export default Navbar;