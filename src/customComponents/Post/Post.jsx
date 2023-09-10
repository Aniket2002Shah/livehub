import './Post.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AccessTime, Circle, DoubleArrow, MoreHoriz, Place, PlayArrow } from '@mui/icons-material';
import Comments from '../Comments/Comments'
import {ReactComponent as Like} from '../../resources/icons/like.svg'
import {ReactComponent as Comment} from '../../resources/icons/comments.svg'
import {ReactComponent as Share} from '../../resources/icons/share.svg'
import {ReactComponent as ViewPublic} from '../../resources/icons/view_public.svg'
import {ReactComponent as ViewMe} from '../../resources/icons/view_lock.svg'
import {ReactComponent as ViewMembers} from '../../resources/icons/view_members.svg'
import {ReactComponent as ViewFollowers} from '../../resources/icons/view_followers.svg'
import {ReactComponent as Save} from '../../resources/icons/save.svg'
import badboy from '../../persons/1x/Badboy.png'
import {ReactComponent as PostIcon} from '../../resources/icons/post.svg'
import {ReactComponent as Interested} from '../../resources/icons/interested.svg'
import { category } from '../../category';
import { Avatar } from '@mui/material';

function Post({categoryId,type,data,name,logo}) {

  const logoIcon = data?.companyname!=null? data?.companyname?.charAt('0'):"B"

  const [commentOpen,setCommentOpen] = useState(false)

  const PostComponent=()=>{
    return(
        <div className="section">
            <div className="topContainer">
            <div className="titleBox">
            <Circle style={{fontSize:"10px"}} className='titleIcon'/>
            <span className="title">{data?.title}</span>
            </div>
          </div>
        </div>
    )
  }

  const EventComponent=()=>{
    return(
        <div className="section">
            <div className="topContainer" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div className="titleBox">
            <Circle style={{fontSize:"10px"}} className='titleIcon'/>
            <span className="title">{data?.title}</span>
            </div>
            <div className="eventInterestedBox" style={{display:"flex",alignItems:"center",gap:"7px"}}>
                <span className="interestedNum" style={{fontSize:"15px",color:"#7F7F7F"}}>{data?.interested}</span>
                <div className="interestedBtn" style={{backgroundColor:"#FE4343",borderRadius:"20px",color:"white",padding:"3px 4px",display:"flex",alignItems:"center"}}>
                <Interested style={{height:"18px"}}/>
                <span className="interestedText" style={{fontSize:"13px",marginLeft:"5px"}}>Interested</span>
                </div>
            </div>
          </div>
          <div className="eventTimeContainer" style={{display:"flex",fontSize:"14px",marginLeft:"40px",marginBottom:"10px",color:"#FE4343",gap:"3px"}}>
            <AccessTime style={{fontSize:"17px"}}/>
            <span className="eventTime">{`${data?.start}  To  ${data?.end}`}</span>
          </div>
          <div className="eventVenueContainer" style={{display:"flex",fontSize:"14px",marginLeft:"40px",marginBottom:"10px",color:"#FE4343",gap:"3px"}}>
            <Place style={{fontSize:"16px"}}/>
            <span className="eventVenue">{data?.venue}</span>
          </div>
        </div>
    );
  }



  const JobComponent=()=>{
    return(
      <div className="section">
       <div className="topContainer" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
         <div className="titleBox">
         <Circle style={{fontSize:"10px"}} className='titleIcon'/>
         <span className="title">{data?.title}</span>
        </div>
       </div>
       <div className="jobDuration" style={{display:"flex",color:"#508DDD",gap:"36px",marginLeft:"40px",marginBottom:"10px",fontSize:"14px"}}>
        <div className="jobDurationText" style={{fontWeight:"500",fontSize:"13px"}}>Job Duration</div>
        <div className="jobDurationValueStart" style={{fontWeight:"400"}}>{data?.arrive}</div>
        <div className="jobDurationValueEnd" style={{fontWeight:"400"}}>{data?.depart}</div>
        <div className="jobType" style={{backgroundColor:"#508DDD",color:"white",borderRadius:"12px",padding:"0 10px",fontSize:"13px"}}>{data?.type}</div>
       </div>
       <div className="jobSalary" style={{display:"flex",color:"#508DDD",gap:"57px",marginLeft:"40px",marginBottom:"10px",fontSize:"14px"}}>
        <div className="jobSalaryText" style={{fontWeight:"500",fontSize:"13px"}}>Job Salary</div>
        <div className="jobSalaryValue" style={{fontWeight:"400"}}>{`${data?.currency}.${data?.salary}(per month)`}</div>
       </div>
       <div className="lastDate" style={{display:"flex",color:"#508DDD",gap:"47px",marginLeft:"40px",marginBottom:"10px",fontSize:"14px"}}>
        <div className="lastdateText" style={{fontWeight:"500",fontSize:"13px"}}>Opened Till</div>
        <div className="lastDateValue" style={{fontWeight:"400"}}>{data?.deadline}</div>
       </div>
     </div>

    )
  }


  const getComponent=(type)=>{
    switch(type){
    case "post": return <PostComponent/>
    case "job": return <JobComponent/>
    case "event":return <EventComponent/>
    default:return <PostComponent/>
    }
  }


    return(
    <div className="post">
       <div className="postWrapper">
        <div className="header">
        <div className="headerStart">
        <Avatar className='profilePic' src={data?.logo} sx={{bgcolor:data?.logoColor}}>{logoIcon}</Avatar>
            <div className="userInfo">
                <span className="username">{name}</span>
                <div className="details">
                    <span className="createdBy">{data?.createdBy}</span>
                    <span className="viewTypeInfo" style={{height:"15px",width:"23px"}}>
                        <Circle  style={{fontSize:"5px",color:"#7F7F7F"}}/>
                        <ViewPublic fill='#7F7F7F' />
                        {/* //switch case */}
                    </span>
                </div>
            </div>
        </div>
        <div className="headerEnd">
            <>{category?.map((c,i)=>{
              if(c.id===categoryId){
                
               return(
               <div className="postType" style={{backgroundColor:c?.bgColor,color:"white"}} key={i}>
               <>{c?.icon}</>
               <span className="typeText">{c?.name}</span>
               </div>
              )
            }
            })}</>
            <MoreHoriz className='postMenu'/>
        </div>
        </div>

        <>
           {getComponent(type)}
        </>

        <div className="body">
            <p className="description">
           {data?.description}
            </p>
           {data?.image!==null &&  <img src={data?.image} alt="post" className="postImg"/>}
        </div>

        <div className="footer">
                <PostIcon className="postIcon" height={14} fontWeight={20} fill='#7F7F7F' stroke='#7F7F7F' />
                <span className="postDate">Posted on 21-22-2002     11:35am</span>
        </div>

        <div className="info">
        <div className="like">
                <Like fill='#6b6b6b' style={{height:"22px",width:"22px"}}/>
                <span>12</span>
            </div>
            <div className="comment">
                <Comment stroke='#6b6b6b' style={{height:"22px",width:"22px"}}/>
                <span>12</span>
            </div>
            <div className="save">
                <Save fill='#6b6b6b' style={{height:"20px",width:"21px"}}/>
            </div>
            <div className="share">
                <Share fill='#6b6b6b' stroke='#6b6b6b' style={{height:"22px",width:"22px"}}/>
                <span>6</span>
            </div>
        </div>

       </div>
    </div>
    );
  }
  
  export default Post;