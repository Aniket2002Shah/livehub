import './Purchase.scss'
import goodboy from '../../persons/1x/Goodboy.png'
import { Refresh, Star } from '@mui/icons-material'

function Purchase(){
    return(
        <div className="purchase">
            <div className="purchaseWrapper">
                <img src="./images/community.jpg" alt="" className="purchasePicture" />

                <div className="purchaseInfo">
                    <div className="purchaseFirst">
                     <div className="purchaseTitle">
                         <img src={goodboy} alt="" className="userPic" />
                         <div className="purchaseTitleText">Aniket Shah purchased new item</div>
                     </div>
                      <div className="purchasePrice">$15</div>
                    </div>
                    <div className="purchaseSec">
                        <div className="purchaseItemName">Skull graphic poster new latest edition</div>
                        <div className="purchaseRating">
                            <Star className='ratingIcon' style={{width:"16px",height:"16px",color:"#FFCD05"}}/>
                            <span className="rating">4.0</span>
                        </div>
                    </div>
                    <div className="purchaseThird">
                    <div className="dateTime">11-22-2002  At  11:30am</div>
                    <div className="purchaseStatus">
                        <Refresh style={{width:"17px",height:"17px",backgroundColor:"#508DDD",color:"white",borderRadius:"50%"}}/>
                        <span className="status">Progress</span>
                    </div>
                    </div>
                </div>
            </div>

          <div className="hrBar" ></div>
        </div>
    )
}

export default Purchase