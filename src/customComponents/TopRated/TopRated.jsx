import './TopRated.scss'
import badboy from '../../persons/1x/Smartgirl.png'
import { CurrencyRupee, Person, PersonAddAlt1, Search, Send, Star } from '@mui/icons-material';
import {ReactComponent as  WorkIcon} from '../../resources/icons/work.svg'
import {ReactComponent as GraphicDesigner} from '../../resources/icons/graphicDesigner.svg'
import {ReactComponent as  ItemIcon} from '../../resources/icons/itemIcon.svg'
import {ReactComponent as Rating } from '../../resources/icons/star.svg'
import {ReactComponent as Followers} from '../../resources/icons/person.svg'
import {ReactComponent as IosDropDown} from '../../resources/icons/ios-dropdown.svg'
import {ReactComponent as City} from '../../resources/icons/city.svg'
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

function TopRated(){

    const CompanyItem=()=>{
        return(
            <div className="companyItem">
                <img src="./images/watch.jpg" alt="item" className="itemImg" />
                <div className="itemDesc">
                    <div className="itemName">Heart Surgery & Cardiac Services</div>
                    <div className="priceDetails" style={{display:"flex",alignItems:"flex-end"}}>
                        <span style={{fontSize:"15px",color:"#28AD19"}}>&#36;</span>
                        <span className="newAmount" style={{fontSize:"14px"}}>14,000</span>
                        <span className="oldAmount" style={{fontSize:"9px",marginLeft:"1px",color:"red"}}>Offer</span>
                    </div>
                    <div className="rateReview" style={{display:"flex",alignItems:"center"}}>
                        <span className="rating" style={{display:"flex",alignItems:"center"}}>
                            <Star style={{fontSize:"14px"}}/>
                            <span className="rate" style={{fontSize:"14px",fontWeight:"600"}}>4.0</span>
                        </span>
                        <span className="review" style={{fontSize:"10px",marginLeft:"5px"}}>
                            &#40;53&#41;
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    const TopCompany=()=>{
        return(
            <div className="topCompany">
                <div className="topCompanyWrapper">
                <Avatar className='profilePic' src='./images/community' alt='logo'  variant='square' sx={{bgcolor:deepOrange[500],height:"128px",width:"300px",fontSize:"70px",objectFit:"cover",borderRadius:"20px 0 0 0"}}>K</Avatar>
                <div className="companyDesc">
                    <div className="companyNameBox">
                        <span className="companyName">Skull Graphic Designers</span>
                        <GraphicDesigner className='categoryIcon' style={{height:"19px",width:"19px"}}/>
                    </div>
                    <div className="companyWorkBox" style={{display:"flex",alignItems:"baseline"}}>
                        <WorkIcon className='workIcon' style={{width:"19px",height:"19px"}}/>
                        <span className="companyWork">Adobe Photoshop,Illustrator, UI/UX designer</span>
                    </div>
                    <div className="companyCityBox" style={{display:"flex",alignItems:"baseline"}}>
                        <City className='companyCityIcon'/>
                        <span className="companyCity">LasVegas, Columbia, California, New York</span>
                    </div>
                    <div className="companyDetails">
                        <div className="rating" style={{marginLeft:"2px"}}>
                            <Rating />
                            <span className="rate">4.0</span>
                        </div>
                        <div className="followers">
                            <Followers/>
                            <span className="followersNum" style={{marginLeft:"5px"}}>346</span>
                            <span className="folllowersText" style={{marginLeft:"3px",fontSize:"16px",fontWeight:"400"}}>followers</span>
                        </div>
                        <div className="item">
                            <ItemIcon/>
                            <span className="itemNum" style={{marginLeft:"5px"}}>38</span>
                            <span className="itemText"  style={{marginLeft:"3px",fontSize:"16px"}}>items</span>
                        </div>
                    </div>
                  </div>
               </div>
               <div className="companyItemListWrapper">
               <div className="companyItemList">
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>
                <CompanyItem/>
                </div>
               </div>
            </div>
        )
    }

   return(
    <div className="topRated">
        <div className="topRatedWrapper">
            <div className="searchItemBox">
                <div className="searchLayout">
                <Search className='searchItemIcon' />
                <input type="text" className="itemSearch" placeholder='Search products and services...' />
                <IosDropDown style={{height:"10px",cursor:"pointer"}}/>
                </div>
                <Send className='searchBtn' style={{color:"#508DDD",cursor:"pointer",marginLeft:"14px"}}/>
                </div>

            <div className="topRatedList">
                <TopCompany/>
                <TopCompany/>
                <TopCompany/>
            </div>
        </div>
    </div>
   );
}

export default TopRated;