import './Profile.scss'
import { CameraAlt, Person, Verified } from '@mui/icons-material'
import {ReactComponent as GraphicDesigner} from '../../resources/icons/graphicDesigner.svg'
import {ReactComponent as Follower} from '../../resources/icons/person.svg'
import {ReactComponent as ItemIcon} from '../../resources/icons/itemIcon.svg'
import {ReactComponent as Star} from '../../resources/icons/star.svg'
import {ReactComponent as PostIcon} from '../../resources/icons/post.svg'
import {ReactComponent as Following} from '../../resources/icons/followings.svg'
import { Avatar } from '@mui/material'
import { category, getIcons } from '../../category'

function Profile({userProfile,data}){

    const logo = data!=null? data?.name.charAt('0'):"J"

    const BuisnessProfileInfoContainer=()=>{
        return(
            <>
            <div className="profileNameCategory">
                <div className="profileName">{data?.name}</div>

              <>
                {category?.map((c,i)=>{
                if(c.id===data.category){
                
               return(
                <div className="categoryBox" key={i}>
                 <span className='categoryIcon' style={{backgroundColor:c.bgColor,color:"white",width:"14px",height:"14px",borderRadius:"4px",padding:"2px 1px",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}>{getIcons(c.id,"13px","13px")}</span>
                <div className="category">{c?.name}</div>
                </div>
              )}})}</>
                   

            </div>
            <div className="profileDetailsContainer">
                <div className="detailContainerFirst container">
                    <Star style={{fill:"#635F5F"}}/>
                    <div className="ratingText text">rating</div>
                    <div className="ratingValue value">4.0</div>
                </div>
                <div className="detailContainerSec container">
                    <Follower style={{fill:"#635F5F"}}/>
                    <div className="followerText text">followers</div>
                    <div className="folllowerValue value">35.6k</div>
                </div>
                <div className="detailContainerThird container">
                    <ItemIcon style={{fill:"#635F5F"}}/>
                    <div className="itemText text">items</div>
                    <div className="itemValue value">38</div>
                </div>
            </div>
        </>
        )
    }




    const UserProfileInfoContainer=()=>{
        return(
            <>
            <div className="profileNameCategory">
                <div className="profileName">Johan Liebert</div>
            </div>
            <div className="profileDetailsContainer">
                <div className="detailContainerFirst container">
                    <PostIcon style={{fill:"#635F5F",width:"14px",height:"14px"}}/>
                    <div className="ratingText text">posts</div>
                    <div className="ratingValue value">348</div>
                </div>
                <div className="detailContainerSec container">
                    <Follower style={{fill:"#635F5F"}}/>
                    <div className="followerText text">followers</div>
                    <div className="folllowerValue value">35.6k</div>
                </div>
                <div className="detailContainerThird container">
                    <Following style={{fill:"#635F5F",height:"14px",width:"18px"}}/>
                    <div className="itemText text">followings</div>
                    <div className="itemValue value">38</div>
                </div>
            </div>
        </>
        )
    }

    return(
    <div className="profile" style={{height:"223px"}}>
        <div className="profileWrapper" style={{display:"flex",flexDirection:"column",gap:userProfile ? "20px":"7px"}}>
             <div className="profileImgContainer" style={{marginTop:userProfile?"15px":"9px"}}>
              <div className="profileImgBorder">
                 <Avatar className='profileImg' src={data?.logo} sx={{bgcolor:"#172B33",height:"75px",width:"75px",fontSize:"25px",objectFit:"cover"}}>{logo || "J"}</Avatar>
             </div>
             <Verified className='verified' style={{height:"18px",width:"20px",color:"#3BD655"}} />
             <CameraAlt  className="camera" style={{height:"16px",width:"18px"}}/>
             </div>
             <div className="profileInfoContainer" style={{display:"flex",flexDirection:"column",gap:userProfile?"20px":"10px"}}>
                {userProfile?<UserProfileInfoContainer/>:<BuisnessProfileInfoContainer/>}
             </div>
        </div>
    </div>
    )
}

export default Profile