import './UserProfile.scss'
import Notification from '../../customComponents/Notification/Notification';
import Profile from '../../customComponents/Profile/Profile';
import DescriptionBar from '../../customComponents/DescriptionBar/DescriptionBar';
import Post from '../../customComponents/Post/Post';
import TabBar from '../../customComponents/TabBar/TabBar';
import { userPost } from '../../dumydata';





 function UserProfile(){

    
  const PostList=()=>{
    return(
    <div className="postUserContainer">
      <div className="postUserList">
      {userPost?.map((it,i)=>{
         return(
            <Post categoryId={it.category} type="post" data={it} key={i} name={it.companyname} logo={it.logo}/>
        )})}

     </div>
    </div>
    )
  }

  const Activities=()=>{
    return(
    <div className="activities">
        <div className="activityText">Recent Activity</div>
        <div className="activitiesWrapper">
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
            <Notification activity={true}/>
        </div>
    </div>
        )
    }


    return(
        <div className="UserProfile">
            <div className="UserProfileWrapper">
                <div className="UserProfileRight">
                    <div className="UserProfileRightTop">
                        <Profile userProfile={true}/>
                        <img src='./images/coverPicture.png'  className="proflePic" alt='coverPicture' />
                    </div>
                    <div className="UserProfileRightBottom">
                        <div className="descriptionUserBox">
                        <DescriptionBar userDesc={true}/>
                        </div>
                        <div className="feedBox" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <TabBar/>
                        <PostList/>
                        </div>
                    </div>
                </div>
                <div className="userProfileSidebar">
                    <Activities/>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;