import { useLocation } from 'react-router-dom';
import Profile from '../../customComponents/Profile/Profile'
import ImageSliderShow from '../ImageSliderShow/ImageSliderShow'
import './BuisnessProfileTop.scss'
import { Buisness } from '../../dumydata';

function BuisnessProfileTop(){
    const location = useLocation()
    const ind= location.state.bid
    const data = Buisness[ind]
    return(
    <div className="BuisnessProfileRightTop">
        <Profile data={data}/>
        <ImageSliderShow images={data.images}/>
        <div className="CompanySlogan">{data.slogan}</div>
    </div>
    )
}

export default BuisnessProfileTop