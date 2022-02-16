import {useRef, useState} from 'react'
import { BsFillPlayFill ,BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants'

import { images } from "../../constants";
import './Intro.css';

const Intro =() =>{
    const [playVD, setplayVD] = useState(false)
    const vidRef =useRef()

    const handleVideo =() =>{
        setplayVD((prev) => !prev)
        
        if(playVD){
            vidRef.current.pause()
        }else{
            vidRef.current.play()
        }
    }
    return(
        <div className='app__video'>
            <video 
                src={meal}
                ref={vidRef}
                typeof='video/mp4'
                loop
                controls={false}
                muted
            />
            <div className='app__video-overlay flex__center'>
                <div 
                    className='app__video-overlay_circle flex__center'
                    onClick={handleVideo}
                >
                    {playVD 
                        ? <BsPauseFill color='#fff' fontSize={30}/> 
                        : <BsFillPlayFill color='#fff' fontSize={30}/>}
                </div>
            </div>
        </div>
    )
}

export default Intro