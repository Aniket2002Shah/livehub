import './New.scss'
import { useRef } from 'react';
import { NewReleases } from '@mui/icons-material'
import { Star } from '@mui/icons-material';
import { AttachMoney } from '@mui/icons-material';

function New(){

    
const sliderRef  = useRef(null)
const scrollAmount   = 250

    const Item =()=>{
        return(
            <div className="newItem">
                <img src="./images/watch.jpg" alt="item" className="itemImg" />
                <div className="content">
                    <div className="rating">
                        <Star style={{fontSize:"15px"}}/>
                        <span className="rate">4.5</span>
                    </div>
                    <div className="cost">
                        <span className="price">$1.4k</span>
                    </div>
                </div>
                <div className="offer">OFFER<NewReleases style={{fontSize:"13px",color:"red", marginLeft:"5px",textAlign:"center"}}/></div>
            </div>
        );
    }


    return(
    <div className="new">
        <div className="newWrapper">

            <div className="itemList">
              <span className='prev' onClick={()=>{
                const container = sliderRef.current
                container.scrollLeft -= scrollAmount
              }}>&#10094;</span>
              <div className="listContainerBox">
                <div className="listContainer" ref={sliderRef}>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
               </div>
              </div>
              <span className='next' onClick={()=> {
                const container = sliderRef.current
                container.scrollLeft+=scrollAmount
              }}>&#10095;</span>
            </div>
        </div>
    </div>
    );
}

export default New