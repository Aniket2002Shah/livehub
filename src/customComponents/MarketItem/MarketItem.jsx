import { Avatar } from '@mui/material';
import './MarketItem.scss'
import { deepOrange } from '@mui/material/colors';
import {ReactComponent as NewIcon} from '../../resources/icons/new.svg'
import {ReactComponent as AddToCart} from '../../resources/icons/AddToCart.svg'
import { Circle, DiscountRounded, Map, Place, Star } from '@mui/icons-material';
import { BASE_URL } from '../../AppConstant';

function MarketItem({store,data}){

    const logo = data?.companyname!=null? data?.companyname?.charAt('0'):"B"

    return(
        <span className="marketItem">
            <span className="marketItemWrapper">
              <div className="posterBox">
                <img src={data?.image} alt="" className="poster" />
                {store || <Avatar className='profilePic' src={data?.companylogo} sx={{bgcolor:deepOrange[500]}}>{logo}</Avatar>}
                <NewIcon className='newIcon'/>
                <AddToCart className='addToCart'/>
                <span className="more">+8 more</span>
              </div>
              <div className="delivery">{data?.type===0?data?.serBy:data?.delivery}</div>
              <div className="itemName">{data?.name}</div>
              <div className="itemDescription">
                <span className="price">$19</span>
                <span className="discount">20% Off</span>
             </div>
             <div className="specialDiscAndOffer">
                    <DiscountRounded  className="specialDiscAndOfferLogo" style={{color:"#F38129",fontSize:"18px"}}/>
                    <span className="offerText">$15 discount on first delivery</span>
             </div>
             <div className="rateReview">
                    < span className="itemRating">
                        <Star className='itemRatingIcon' style={{color:"#FFCD05",fontSize:"20px"}}/>
                        <span className="itemRatingNum">4.5</span>
                    </span>
                    <span className="itemReview">
                        <Circle className='itemReviewIcon' style={{fontSize:"8px"}} />
                        <span className="itemReviewNum">Review&#40;10&#41;</span>
                    </span>
            </div>
            <div className="location">
                    <Place className='itemLocationIcon' style={{color:"#3292DB",fontSize:"20px"}}/>
                    <span className="itemLocation">Near Greenyard Palace</span>
            </div>
           </span>
        </span>
    );
}

export default MarketItem