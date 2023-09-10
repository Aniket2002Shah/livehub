import { useEffect, useState } from 'react';
import { mainEvents, mainJobs, mainPost } from '../../dumydata';
import Post from '../Post/Post';
import Stories from '../Stories/Stories';
import './Feed.scss'

function Feed({type}) {

  const [value,setValue] = useState([])

  useEffect(()=>{

    const fetchData=(type)=>{

        switch(type){

            case "post": 
                const post = mainPost
                setValue(post)
                break;

            case "job": 
                const job = mainJobs
                setValue(job)
                break;

            case "event": 
                const event = mainEvents
                setValue(event)
                break;

            default: 
                const postValue = mainPost
                setValue(postValue)
    }
}

fetchData(type)

},[type]) 

  const Posts=()=>{
    return(
      <div className="postFeedList" style={{display:"flex",flexDirection:"column",gap:"20px"}}>
      {value?.map((it,i)=>{
          return(
          <Post categoryId={it.category} type={type} data={it} key={i} name={it.companyname} logo={it.logo}/>
          )})}
     </div>
    )
  }


    return (
      <div className="feed">
       <>{type==='post'?<Stories/>:<></>}</> 
       <Posts/>
      </div>
    );
  }
  
  export default Feed;