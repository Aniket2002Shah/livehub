import { useEffect, useRef, useState } from 'react';
import './ImageSliderShow.scss'
import { BASE_URL } from '../../AppConstant';

function ImageSliderShow({images}){

    const delay = 2500;

    const [index,setIndex] = useState(0)
    const timeoutRef = useRef(null)

    const resetTimeout=()=>{
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    }


    useEffect(()=>{
        resetTimeout()
        timeoutRef.current = setTimeout(
         ()=>setIndex((prevIndex)=>prevIndex === images.length-1? 0: prevIndex+1),
        delay);
     return ()=>{resetTimeout() }
    },[index])





    return(
        <div className="slideshow">
            <div className="slideshowSlider" style={{transform:`translate3d(${-index * 100}%,0,0)`}}>
                {images?.map((img,index)=>(
                   <img src={img} alt="companyPicture" className="slide" key={index} />
                ))}
            </div>

            <div className="slideshowDots">
            {images?.map((img,idx)=>(
                <div key={idx} className={`slideshowDot${index === idx ? "active":""}`} onClick={()=>{setIndex(idx)}}/>
                ))}
            </div>
        </div>
    )
}


export default ImageSliderShow