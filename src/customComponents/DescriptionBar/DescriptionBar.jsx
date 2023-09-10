import './DescriptionBar.scss'
import { AccessTimeFilled, Chat, Circle, Description, Edit, Email, Facebook, InsertLink, Instagram,Male,Payment, PersonAddAlt1, Phone, Place, WhatsApp, Work, YouTube } from '@mui/icons-material'
import {ReactComponent as GraphicDesigner} from '../../resources/icons/graphicDesigner.svg'
import {ReactComponent as WorkIcon} from '../../resources/icons/work.svg'
import {ReactComponent as City} from '../../resources/icons/city.svg'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { category, getIcons } from '../../category'


function DescriptionBar({userDesc,data}){

    const JobItem=()=>{
        return(
            <div className="jobItem" style={{display:"flex",flexDirection:"column",gap:"7px",fontSize:"14px"}}>
                <div className="jobBox" style={{display:"flex",alignItems:"flex-start",gap:"8px"}}>
                 <Work  style={{fontSize:"19px"}}/>
                 <span className="jobName">Graphic Designer</span>
                </div>
                <div className="workSpace" style={{display:"flex",alignItems:"flex-start",gap:"8px",marginLeft:"30px"}}>
                    <Avatar className='workComapnyLogo' src='./images/community' alt='logo'  variant='square' sx={{bgcolor:deepOrange[500],height:"24px",width:"30px",fontSize:"15px",objectFit:"cover",borderRadius:"2px 0 0 0"}}>K</Avatar>
                     <span className="workCompanyName">Skull Graphic Designers</span>
                </div>
            </div>
        )
    }

    const UserProfileDescription = ()=>{
        return(
            <div className="descriptionBar">
            <div className="statusContainer">
                <div className="activeBox">
                    <Circle style={{height:"9px"}}/>
                    <span className='active' style={{fontSize:"14px"}}>Active</span>
                </div>
                <div className="editBox" >
                    <Edit style={{height:"13px"}}/>
                    <span className="edit" style={{fontSize:"14px"}}>Edit</span>
                </div>
            </div>
            <div className="descriptionContainer">
              <div className="descriptionContainerTop" style={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                <PersonAddAlt1 className='follow'  style={{backgroundColor:"#508DDD"}}/>
                <Chat className='message'  style={{backgroundColor:"#F5E44F"}}/>
              </div>
              <div className="descriptionContainerBottom">
                    <div className="descBox">
                        <Description style={{fontSize:"19px"}}/>
                        <span className="desc">We are the best coffee seller in entire U.S.A. Our product is not just tasty but healthy too. We also provide good offline  and online service</span>
                    </div>
                    <div className="jobItemListBox">
                        <JobItem/>
                        <JobItem/>
                    </div>
                    <div className="genderBox">
                        <Male style={{fontSize:"19px"}}/>
                        <span className="gender">Male</span>
                    </div>
                    <div className="locationBox">
                        <Place style={{fontSize:"20px"}}/>
                        <span className="location">Blue Colony, HellCity, Texas,  U.S.A</span>
                    </div>
                    <div className="phoneBox">
                        <Phone style={{fontSize:"19px"}}/>
                        <span className="phone">7800-987-321</span>
                    </div>
                    <div className="emailBox">
                        <Email style={{fontSize:"19px"}}/>
                        <span className="email">skulldgn@gmail.com</span>
                    </div> 
                    <div className="links">
                        <LinkComponent />
                        <LinkComponent/>
                    </div>
                <div className="otherLinks">
                    <Facebook style={{color:"#508DDD"}}/>
                    <WhatsApp style={{color:"#3BD655"}}/>
                    <Instagram style={{color:"#F61E5F"}}/>
                    <YouTube style={{color:"red"}}/>
                </div>
            </div>
           </div>
        </div>
        )
    }

    const schedule = {
        "Mon":"Open 24 hours",
        "Tue":"06:30am - 04:30pm",
        "Wed":"06:30am - 04:30pm",
        "Thu":"06:30am - 04:30pm",
        "Fri":"06:30am - 04:30pm",
        "Sat":"11:30am - 05:30pm",
        "Sun":"Closed"
    }

    const LinkComponent = ()=>{
        return(
            <div className="link">
                <InsertLink style={{fontSize:"21px",rotate:"45deg"}}/>
                <span>Photos - http://goog.com</span>
            </div>
        )
    }

    const Schedule=()=>{
        return(
            <span className="scheduleList">
                <table style={{borderSpacing:"15px 15px",borderCollapse:"separate"}}>
                    <tbody>
                    <tr className="mon">
                        <td className="day">Mon</td>
                        <td className="time">{schedule["Mon"]}</td>
                    </tr>

                    <tr className="tue">
                        <td className="day">Tue</td>
                        <td className="time">{schedule["Tue"]}</td>
                    </tr>

                    <tr className="wed">
                        <td className="day">Wed</td>
                        <td className="time">{schedule["Wed"]}</td>
                    </tr>

                    <tr className="thu">
                        <td className="day">Thu</td>
                        <td className="time">{schedule["Thu"]}</td>
                    </tr>

                    <tr className="fri">
                        <td className="day">Fri</td>
                        <td className="time">{schedule["Fri"]}</td>
                    </tr>

                    <tr className="sat">
                        <td className="day">Sat</td>
                        <td className="time">{schedule["Sat"]}</td>
                    </tr>

                    <tr className="sun">
                        <td className="day">Sun</td>
                        <td className="time">{schedule["Sun"]}</td>
                    </tr>
                    </tbody>
                </table>
            </span>
        )
    }

    return(<>
       {userDesc?<UserProfileDescription/>:
        <div className="descriptionBar">
            <div className="statusContainer">
                <div className="activeBox">
                    <Circle style={{height:"9px"}}/>
                    <span className='active' style={{fontSize:"14px"}}>Active</span>
                </div>
                <div className="editBox" >
                    <Edit style={{height:"13px"}}/>
                    <span className="edit" style={{fontSize:"14px"}}>Edit</span>
                </div>
            </div>
            <div className="descriptionContainer">
              <div className="descriptionContainerTop">

                <>{category?.map((c,i)=>{
                if(c.id===data?.category){
                
                 return(
                 <span className='categoryIcon' style={{backgroundColor:c?.bgColor,color:"white"}} key={i}>
                    <>{getIcons(c.id,"23px","23px")}</>
                </span>
                 )}})}</>

                 <PersonAddAlt1 className='follow'  style={{backgroundColor:"#508DDD"}}/>
                 <Payment className='paymentIcon'  style={{backgroundColor:"#3BD655"}}/>
                 <Chat className='message'  style={{backgroundColor:"#F5E44F"}}/>
              </div>
              <div className="descriptionContainerBottom">
                    <div className="workBox">
                        <WorkIcon className='workIcon'  style={{height:"24px",width:"24px"}}/>
                        <span className="work">{data?.work}</span>
                    </div>
                    <div className="descBox">
                        <Description style={{fontSize:"19px"}}/>
                        <span className="desc">{data?.description}</span>
                    </div>
                    <div className="scheduleBox">
                        <AccessTimeFilled className='clock' style={{fontSize:"18px"}}/>
                        <Schedule/>
                    </div>

                    <div className="cityBox">
                        <City style={{fontSize:"19px"}}/>
                        <span className="city">LasVegas, Columbia, California, New York</span>
                    </div>
                    <div className="locationBox">
                        <Place style={{fontSize:"20px"}}/>
                        <span className="location">Blue Colony, HellCity, Texas,  U.S.A</span>
                    </div>
                    <div className="phoneBox">
                        <Phone style={{fontSize:"19px"}}/>
                        <span className="phone">7800-987-321</span>
                    </div>
                    <div className="emailBox">
                        <Email style={{fontSize:"19px"}}/>
                        <span className="email">skulldgn@gmail.com</span>
                    </div> 
                    <div className="links">
                        <LinkComponent />
                        <LinkComponent/>
                    </div>
                <div className="otherLinks">
                    <Facebook style={{color:"#508DDD"}}/>
                    <WhatsApp style={{color:"#3BD655"}}/>
                    <Instagram style={{color:"#F61E5F"}}/>
                    <YouTube style={{color:"red"}}/>
                </div>
            </div>
           </div>
        </div>}
        </>
    )
}

export default DescriptionBar