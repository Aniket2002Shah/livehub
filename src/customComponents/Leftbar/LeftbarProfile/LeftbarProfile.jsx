import './LeftbarProfile.scss'
import badboy from '../../../persons/1x/Badboy.png'
import { useState,useRef } from 'react'
import { Link } from 'react-router-dom'
import { Add } from '@mui/icons-material'
import { Buisness } from '../../../dumydata'

function LeftbarProfile() {

const sliderRef  = useRef(null)
const scrollAmount   = 100
const [buisnessList,setBuisnessList] = useState([])

  const BuisnessItem =({name,logo})=>{
    return(
      <div className='buisnessItem'>
        <img src={logo} alt="company Logo" className="logo" />
        <div className="adminNotify">
          <span className="admin">Admin</span>
          <span className="notify">5</span>
        </div>
        <div className="companyName">{name}</div>
      </div>
    );
  }

    return (
      <div className="leftbarProfile">
        <div className="leftbarProfileWrapper">
          <div className="userProfile">
            <img src={badboy} alt="" className="userProfilePic" />
            <div className="user">
              <span className="username">Johan Liebert</span>
              <div className="userInfo">
                <div className="followers">
                  <span className="followersText">Followers</span>
                  <div className="followersNumbers numbers">21.1k</div>
                </div>
                <div className="followings">
                  <span className="followingsText">Followings</span>
                  <div className="followingsNumbers numbers">21k</div>
                </div>
                <div className="work">
                  <span className="workText">Work</span>
                  <div className="workNumbers numbers">Graphic Designer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="buisnessInfo">
            <div className="buisnessContainer">
              <div className="buisnessContainerWrapper">
            <span className="buisnessText">Buisness Account</span>
            <span className="buisnessAccNotify">15</span>
            </div>
            <Add style={{fontSize:"24px",cursor:"pointer"}}/>
            </div>
            <div className="buisnessAccList">
              <span className='prev' onClick={()=>{
                const container = sliderRef.current
                container.scrollLeft -= scrollAmount
              }}>&#10094;</span>
              <div className="listContainerBox">
                <div className="listContainer" ref={sliderRef}>
                  {Buisness?.map((b,i)=>
                  (
                  <Link to={`/buisnessProfile/${b.name}`} style={{textDecoration:"none"}} state={{bid:i}} key={i}>
                    <BuisnessItem name={b.name} logo={b.logo}/>
                  </Link>
                  )
                  )}
               </div>
              </div>
              <span className='next' onClick={()=> {
                const container = sliderRef.current
                container.scrollLeft+=scrollAmount
              }}>&#10095;</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LeftbarProfile;