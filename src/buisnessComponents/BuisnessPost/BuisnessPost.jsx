import { useEffect, useState } from 'react'
import Post from '../../customComponents/Post/Post'
import { Buisness, events, items, jobs, posts } from '../../dumydata'
import './BuisnessPost.scss'
import { useLocation } from 'react-router-dom'

function BuisnessPost({type}){

    const location = useLocation()
    const ind= location.state.bid
    const buisness = Buisness[ind]
    const [category,setCategory] = useState(buisness.category)
    const name = buisness.name
    const logo = buisness.logo

    const [value,setValue] = useState([])


    useEffect(()=>{

        const fetchData=(type)=>{

            switch(type){
    
                case "post": 
                    const post = posts[ind]
                    setValue(post?.posts)
                    break;
    
                case "job": 
                    const job = jobs[ind]
                    setValue(job?.jobs)
                    setCategory(990)
                    break;
    
                case "event": 
                    const event = events[ind]
                    setValue(event?.events)
                    setCategory(999)
                    break;
    
                default: 
                    const postValue = posts[ind]
                    setValue(postValue?.posts)
        }
    }

    fetchData(type)

    },[type]) 

    return(
        <div className="postBuisnessList" style={{display:"flex",flexDirection:"column",gap:"20px"}}>
        <>{value?.map((it,i)=>{
            console.log(i)
          return(
          <Post categoryId={category} type={type} data={it} key={i} name={name} logo={logo}/>
          )})}</>
       </div>
    )
}

export default BuisnessPost