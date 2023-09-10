import './Events.scss'
import { Event as EventIcon } from '@mui/icons-material'
import {ReactComponent as Dropdown} from '../../../resources/icons/dropdown.svg'
import Event from '../../Event/Event'
import { mainEvents } from '../../../dumydata';

function Events(){

    return(
        <div className="events">
            <div className="eventTitleBox">
                <div className="eventTitle" >
                  <EventIcon />
                  <span className="eventText">Events</span>
                </div>
                 <Dropdown style={{height:"14px",width:"18px"}}/>
            </div>
            <div className="eventList">
                {mainEvents.map((e,i)=>
                   (
                    <Event data={e} key={i}/>
                ))}
                
            </div>
            <span className="more" style={{fontSize:"14px", color:"#508DDD", fontWeight:"bold",cursor:"pointer"}}>...more</span>
        </div>
    );
}

export default Events;