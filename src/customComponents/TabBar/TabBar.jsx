import { Tab, Tabs } from '@mui/material'
import './TabBar.scss'
import { useState } from 'react'

function TabBar(){

    const [value,setValue] = useState(0)

    const handleTabClick=(newValue)=>{
      console.log(newValue)
      setValue(newValue)
  //switch case
    }


    return(
        <div className="tabBar">
              <div className="tabBarList">
                <div className="postTab" onClick={()=>handleTabClick(0)}>
                    <span className="postText" style={{color:value===0?"#c43fc4":"#6b6b6b"}}>Posts</span>
                </div>
                <div className="followersTab"  onClick={()=>handleTabClick(1)}>
                    <span className="followersText" style={{color:value===1?"#c43fc4":"#6b6b6b"}}>Followers</span>
                </div>
                <div className="followingsTab" onClick={()=>handleTabClick(2)}>
                    <span className="followingText" style={{color:value===2?"#c43fc4":"#6b6b6b"}}>Followings</span>
                </div>
                <div className="imagesTab" onClick={()=>handleTabClick(3)}>
                    <span className="imageText" style={{color:value===3?"#c43fc4":"#6b6b6b"}}>Images</span>
                </div>
                <div className="videosTab" onClick={()=>handleTabClick(4)}>
                    <span className="videoText" style={{color:value===4?"#c43fc4":"#6b6b6b"}}>Videos</span>
                </div>
              </div>
        </div>
    )
}

export default TabBar