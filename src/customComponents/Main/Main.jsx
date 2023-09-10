import './Main.scss'
import Event from '../Event/Event'
import { Event as EventIcon, Work } from '@mui/icons-material';
import {ReactComponent as PostIcon} from '../../resources/icons/post.svg'
import PostComponent from '../../buisnessComponents/PostComponent/PostComponent';
import JobComponent from '../../buisnessComponents/JobComponent/JobComponent';
import { useLocation } from 'react-router-dom';
import {events, jobs, posts } from '../../dumydata';

function Main(){

    const location = useLocation()
    const ind= location.state.bid
    const postList = posts[ind]
    const jobList = jobs[ind]
    const eventList = events[ind]

    const JobBuisnessAcc=()=>{
        return(
        <div className="jobBuisnessAcc">
            <div className="jobBuisnessAccTitleBox">
                <div className="jobBuisnessAccTitle">
                    <Work style={{height:"24px",width:"24px"}}/>
                    <span className="jobText">Jobs</span>
                </div>
            </div>
            <div className="jobBuisnessList">
            {jobList?.jobs?.map((j,i)=>
                    (
                        <JobComponent data={j} key={i}/>
                    )
            )}
            </div>
        </div>
            )
    }

    const PostBuisnessAcc = ()=>{
        return(
            <div className="postBuisnessAcc">
                <div className="postBuisnessAccTitleBox">
                    <div className="postBuisnessAccTitle">
                        <PostIcon style={{height:"20px",width:"19px"}}/>
                        <span className="postText">Posts</span>
                    </div>
                </div>
                <div className="postBuisnessAccList">
                    {postList?.posts?.map((p,i)=>
                    (
                        <PostComponent data={p} key={i}/>
                    )
                    )}
                </div>
            </div>
        )
    }

    const EventBuisnessAcc =()=>{
        return(
            <div className="eventBuisnessAcc">
                <div className="eventBuisnessAccTitleBox">
                    <div className="eventBuisnessAccTitle" >
                      <EventIcon />
                      <span className="eventText">Events</span>
                    </div>
                </div>
                <div className="eventBuisnessAccList">
                {eventList?.events.map((e,i)=>
                    (
                        <Event data={e} key={i}/>
                    )
                    )}
                    
                </div>
            </div>
        );
    }

    return(
        <div className="mainBox">
            <div className="eventContainer">
             <EventBuisnessAcc/>
            </div>
            <div className="postContainer">
             <PostBuisnessAcc/>
            </div>
            <div className="jobContainer">
             <JobBuisnessAcc/>
            </div>
        </div>
    )
}

export default Main