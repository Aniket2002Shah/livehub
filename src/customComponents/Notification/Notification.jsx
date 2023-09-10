import './Notification.scss'
import {ReactComponent as Liked} from '../../resources/icons/like.svg'
import { Avatar, AvatarGroup } from '@mui/material'

function Notification({activity}){
    return(
        <div className="notification">
            <div className="notificationContainer">
                <Liked style={{height:"48px",width:"50px",fill:"red"}}/>
                <div className="containerRight">
                   
                    <AvatarGroup max={10}>
                        <Avatar alt='Remy Walker' src='' sx={{bgcolor:"blue",height:"22px",width:"22px", fontSize:"13px"}}>R</Avatar>
                        <Avatar alt='Remy Walker' src='' sx={{bgcolor:"green",height:"22px",width:"22px", fontSize:"13px"}}>R</Avatar>
                        <Avatar alt='Remy Walker' src='./images/pexel_login_bg.jpg'sx={{bgcolor:"red",height:"22px",width:"22px", fontSize:"13px"}}>R</Avatar>
                    </AvatarGroup>
                 
                    <div className="notificationTitleDateBox">
                    <div className="notificationTitle"><b>Milkey</b> and <b>4 others</b> liked your post</div>
                    <span className="notificationDate">15-11-2002</span>
                    </div>
                    <div className="notificationDescription">Urgent need a graphic designer at our studio. Payment = 50$/work.Studio = Vampire Graphics...</div>
                </div>
            </div>
            <div className="divHorizontal"></div>
        </div>
    )
}


export default Notification