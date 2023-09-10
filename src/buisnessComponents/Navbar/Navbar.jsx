import './Navbar.scss'
import { Add, Apps, ChatBubbleOutline, Dashboard, Event, Home, Info, MoreHoriz, NotificationsNone, Work } from '@mui/icons-material'
import {ReactComponent as PostIcon} from '../../resources/icons/post.svg'
import {ReactComponent as Members} from '../../resources/icons/community.svg'
import { deepOrange } from '@mui/material/colors'
import { Avatar } from '@mui/material'
import { Link,useLocation,useParams,useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'


function Navbar(){

    const [navItem,setNavItem] = useState(0)

    const location = useLocation()
    const navigate = useNavigate()
    const ind= location.state.bid


    const companyName = useParams().companyName;


    useEffect(()=>{
        navigate(`/buisnessProfile/${companyName}`,{state:{bid:ind}})
    },[])


    const NavList=()=>{
        return(
            <div className="navList">
                <Link to={`/buisnessProfile/${companyName}`} state={{bid:ind}}  style={{textDecoration:"none",backgroundColor:navItem===0?"blue":"#7B7979",borderRadius:"6px",padding:"1px 4px",cursor:"pointer"}} onClick={()=>setNavItem(0)}>
                 <div className="homeItem">
                    <Home style={{height:"17px"}}/>
                    <span>Home</span>
                 </div>
                </Link>

                <Link to={`/buisnessProfile/${companyName}/store`} state={{bid:ind}} style={{textDecoration:"none",backgroundColor:navItem===1?"blue":"#7B7979",borderRadius:"6px",padding:"1px 4px",cursor:"pointer"}} onClick={()=>setNavItem(1)}>
                 <div className="productServiceItem">
                    <Apps style={{height:"17px"}}/>
                    <span>Store</span>
                 </div>
                </Link>

                <Link to={`/buisnessProfile/${companyName}/post`} state={{bid:ind}} style={{textDecoration:"none",backgroundColor:navItem===2?"blue":"#7B7979",borderRadius:"6px",padding:"1px 4px",cursor:"pointer"}} onClick={()=>setNavItem(2)}>
                 <div className="postItem">
                    <PostIcon style={{height:"12px",fill:"white"}}/>
                    <span>Post</span>
                 </div>
                </Link>

               <Link to={`/buisnessProfile/${companyName}/jobs`}  state={{bid:ind}}  style={{textDecoration:"none",backgroundColor:navItem===3?"blue":"#7B7979",borderRadius:"6px",padding:"1px 4px",cursor:"pointer"}} onClick={()=>setNavItem(3)}>
                 <div className="jobItem">
                    <Work style={{height:"17px"}}/>
                    <span>Job</span>
                 </div>
                </Link>

                <Link to={`/buisnessProfile/${companyName}/events `} state={{bid:ind}}  style={{textDecoration:"none",backgroundColor:navItem===4?"blue":"#7B7979",borderRadius:"6px",padding:"1px 4px",cursor:"pointer"}} onClick={()=>setNavItem(4)}>
                 <div className="eventItem">
                    <Event style={{height:"17px"}}/>
                    <span>Event</span>
                 </div>
                </Link>


                <Link to='' state={{bid:ind}}  style={{textDecoration:"none",backgroundColor:navItem===5?"blue":"#7B7979",borderRadius:"6px",padding:"1px 4px",cursor:"pointer"}} onClick={()=>setNavItem(5)}>
                 <div className="membersItem">
                    <Members style={{height:"12px",fill:"white"}}/>
                    <span>Members</span>
                </div>
                </Link>

                <Link to=''  state={{bid:ind}}   style={{textDecoration:"none",backgroundColor:navItem===6?"blue":"#7B7979",borderRadius:"6px",padding:"1px 4px",cursor:"pointer"}} onClick={()=>setNavItem(6)}>
                <div className="aboutItem">
                    <Info style={{height:"17px"}}/>
                    <span>About</span>
                </div>
                </Link>

                <Link to=''  state={{bid:ind}}  style={{textDecoration:"none",backgroundColor:navItem===7?"blue":"#7B7979",borderRadius:"6px",padding:"1px 4px",cursor:"pointer"}} onClick={()=>setNavItem(7)}>
                <div className="moreItem">
                    <Add style={{height:"17px"}}/>
                    <span>More</span>
                </div>
                </Link>

            </div>
        )
    }
    return(
        <div className="navbar">
            <div className="navbarWrapper">
                <div className="company" style={{display:"flex",alignItems:"center",gap:"10px"}}>
                    <Avatar className='profilePic' src='' sx={{bgcolor:"#172B33",height:"22px",width:"22px",border:"2px solid white",fontSize:"16px"}}>K</Avatar>
                    <span className="companyName" style={{width:"155px",height:"16px",overflow:"hidden"}}>North American Coffee</span>
                </div>
                <div className="navListContainer">
                   <NavList/>
                </div>
                <div className="adminTools" >
                    <Link to='/dashboard' style={{textDecoration:"none",color:"white"}}>
                      <Dashboard style={{height:"17px",padding:"3px 1px",backgroundColor:"#7B7979",borderRadius:"50%",marginTop:"4px"}}/>
                    </Link>
                    <NotificationsNone  style={{height:"17px",padding:" 3px 1px",backgroundColor:"#7B7979",borderRadius:"50%"}}/>
                    <ChatBubbleOutline style={{height:"17px",padding:"3px 1px",backgroundColor:"#7B7979",borderRadius:"50%"}}/>
                </div>
            </div>
        </div>
    )
}


export default Navbar