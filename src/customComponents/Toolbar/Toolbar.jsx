import './Toolbar.scss'
 

import {ReactComponent as Logo} from '../../logo.svg'
import {ReactComponent as Home} from '../../resources/icons/home.svg'
import {ReactComponent as DiscountAndOffer} from '../../resources/icons/disc&offer.svg'
import { Work as Job, Poll} from '@mui/icons-material'
import { Place as Map} from '@mui/icons-material'
import {ReactComponent as Filter} from '../../resources/icons/filter.svg'
import {ReactComponent as Notifications} from '../../resources/icons/notification.svg'
import {ReactComponent as Dropdown} from '../../resources/icons/dropdown.svg'
import {ReactComponent as PostIcon} from '../../resources/icons/post.svg'
import {ReactComponent as LiveStream} from '../../resources/icons/liveStream.svg'
import {ReactComponent as Advertisement} from '../../resources/icons/Advertisement.svg'
import { Article } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import { Event } from '@mui/icons-material'
import { Star as Rating } from '@mui/icons-material'
import { ReactComponent as Store} from '../../resources/icons/marketplace.svg'
import { Chat as Messages } from '@mui/icons-material'
import { AddCircle as CreatePost } from '@mui/icons-material'
import badboy from '../../persons/1x/Badboy.png'
import { Avatar, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import Notification from '../../customComponents/Notification/Notification'


function Toolbar({buisnessAcc}) {

  const navigate = useNavigate()
  const [value,setValue] = useState(0)
  const [isNotification,setIsNotification] = useState(false)
  const [isAddPost,setIsAddPost] = useState(false)

  const addPostList=["Create a Post","Go Live","Create a Event Post","Create a Job Post","Create a Story","Create Poll","Create AD(Advertisement)"]

  const handleTabClick=(newValue)=>{
    console.log(newValue)
   switch(newValue){
    case 0: navigate('/')
    break;
    case 1: navigate('/market')
    break;
    case 2: navigate('/market')
    break;
    case 3: navigate('/jobs')
    break;
    case 4: navigate('/events')
    break;
    case 5: navigate('/topRated')
    break;
   }
    setValue(newValue)  
  }

  const HomeIcon =({fill,value})=>{
    return(
      <div className='home' style={{height:value===0?"17px":"25px",marginBottom:"5px"}}>
      <Home className='homeIcon' style={{fontSize:"20px",height:"100%"}} fill={fill}/>
    </div>
    )
  }

  const DiscAndOffer=({fill,value})=>{
    return(
         <div className="discAndOffer" style={{height:value===2?"17px":"25px",marginBottom:"5px"}}>
            <DiscountAndOffer className="discAndOffer" style={{fontSize:"20px",height:"100%"}} fill={fill}/>
         </div>
    )
  }


  const MarketPlaceClicked=({fill,value})=>{
    return(
         <div className="discAndOffer" style={{height:value===1?"17px":"25px",marginBottom:"5px"}}>
            <Store className="discAndOffer" style={{fontSize:"20px",height:"100%"}} fill={fill}/>
         </div>
    )
  }


  const AddPostIcons=(value)=>{
    switch(value){
      case 0: return <PostIcon style={{width:"22px",height:"20px",marginLeft:"3px"}}/>
      case 1: return <LiveStream style={{width:"26px",height:"26px",marginLeft:"1px"}}/>
      case 2: return <Event style={{width:"26px",height:"26px",padding:"0px",margin:"0px"}}/>
      case 3: return <Job style={{width:"25px",height:"25px",marginLeft:"2px"}}/>
      case 4: return (
      <div className="createStoryBorder" style={{borderLeft:"2px dashed black",borderRight:"2px solid black",borderTop:"2px dashed black",borderBottom:"2px solid black",width:"24px",height:"25px",borderRadius:"50%",textAlign:"center",padding:"2px 2px 2px 2px",boxSizing:"border-box",marginLeft:"3px"}}>
        <img src={badboy} alt="profile" className="profilePicUser" style={{width:"18px",height:"18px",borderRadius:"50%"}} />
      </div>
      )
      case 5: return <Poll style={{width:"27px",height:"26px"}}/>
      case 6: return <Advertisement style={{width:"22px",height:"23px",marginLeft:"3px"}}/>
    }
  }

  const AddPostComponent=({value})=>{
    return(
      <div className="addPostComponent" style={{display:"flex",gap:"5px",fontFamily:'Segoe UI'}}>
        <span>{AddPostIcons(value)}</span>
        <span className="addPostTitle">{addPostList[value]}</span>
      </div>
    )
  }


    return (
    <div className="toolbar">
        <div className="toolbarLeft">
            <Link to='/' style={{textDecoration:"none",display:"flex",alignItems:"baseline",gap:"5px"}}>
              <Logo className='logo'/>
              <span>Livehub</span>
            </Link>
            <div className='search'>
                <Search className='searchIcon'/>
                <input type='text' placeholder='Search here...'/>
            </div>
        </div>

        <div className="toolbarCentreWrapper">
           <Tabs  value={value} onChange={(e,newValue)=>{handleTabClick(newValue)}} className="toolbarCentre" variant='scrollable' scrollButtons={false} indicatorColor='#B538B5'>
                <Tab href='/' style={{marginLeft:"8px"}} icon={<HomeIcon fill={value===0?"#c43fc4":"#6b6b6b"} value={value} /> }  label={value===0 && <span className='tabLabel'>Home</span>}/>
                <Tab style={{marginLeft:"8px"}} icon={<MarketPlaceClicked fill={value===1?"#c43fc4":"#6b6b6b"} className='marketPlace item' value={value} /> } label={value===1 && <span className='tabLabel'>Market</span>}/>
                <Tab style={{marginLeft:"8px"}} icon={<DiscAndOffer fill={value===2?"#c43fc4":"#6b6b6b"} value={value}/>}label={value===2 && <span className='tabLabel'>Disc/Offer</span>}/>
                <Tab style={{marginLeft:"8px"}} icon={<Job style={{color:value===3?"#c43fc4":"#6b6b6b",height:value===3?"19px":"38px",fontSize:"28px"}} className="job item" />} label={value===3 && <span className='tabLabel'>  Job  </span>}/>
                <Tab style={{marginLeft:"8px"}} icon={<Event style={{color:value===4?"#c43fc4":"#6b6b6b",height:value===4?"19px":"30px",fontSize:"28px"}}  className="eventIcon item" />} label={value===4 && <span className='tabLabel'>Event</span>}/>
                <Tab style={{marginLeft:"8px"}} icon={<Rating style={{color:value===5?"#c43fc4":"#6b6b6b",height:value===5?"19px":"30px",fontSize:"28px"}} className="rating item" />} label={value===5 && <span className='tabLabel'>Top Rated</span>}/>
                <Tab style={{marginLeft:"8px"}} icon={<Map style={{color:value===6?"#c43fc4":"#6b6b6b",height:value===6?"19px":"30px",fontSize:"28px"}} className="map item" />} label={value===6 && <span className='tabLabel'>Map</span>}/>
                <Tab style={{marginLeft:"8px"}} icon={<Article  style={{color:value===7?"#c43fc4":"#6b6b6b",height:value===7?"19px":"30px",fontSize:"28px"}} className="article item" />} label={value===7 && <span className='tabLabel'>News</span>}/>
            </Tabs>
        </div>

        <div className="toolbarRight">
            
           <div className="toolbarRightStart">
            <div className="filter">
              <Filter className='filterImg'/>
              <span className="filterText">Filter</span>
              <Dropdown className='dropdown'/>
            </div>
           </div>
           <div className="toolbarRightEnd">
               <CreatePost className="createPost" onClick={()=>{
                 setIsAddPost(!isAddPost)
                 setIsNotification(false)}}/>
               <div className="notification" onClick={()=>{
                setIsNotification(!isNotification)
                setIsAddPost(false)}}>
                <Notifications className='icon' fill='#6b6b6b'/>
               </div>
               <div className="messages">
                <Messages className='icon' style={{color:"#6b6b6b"}}/>
               </div>
               <div className="profilePicture">
                <Link to='/userProfile' style={{textDecoration:"none"}}>
                <img src={badboy} alt='profile'/>
                </Link>
                </div>
                {buisnessAcc && <div className="buisnessAcc">
                  <Link to='/buisnessProfile' style={{textDecoration:"none"}}>
                    <Avatar className='profilePic' src='' sx={{bgcolor:"#172B33",height:"32px",width:"32px",border:"2px solid white",fontSize:"16px"}}>K</Avatar>
                  </Link>
                </div>}
           </div>
           <>
           {isNotification && 
           <div className="notificationListBox">
            <div className="notificationTitleText" >Notification</div>
              <div className="notificationList">
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
              </div>
           </div>}
           </>
           <>
           {
            isAddPost && 
           <div className="addPostBox">
           {addPostList?.map((m,i)=>{
            return(
            <div className="addPostItemBox">
              <AddPostComponent key={i} value={i}/>
            </div>
            )
          }
          )}
           </div>}
           </>
          </div>
        </div>
  );
}

export default Toolbar;