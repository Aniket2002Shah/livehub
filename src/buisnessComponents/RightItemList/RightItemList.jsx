import MarketItem from '../../customComponents/MarketItem/MarketItem'
import { Buisness, items } from '../../dumydata'
import './RightItemList.scss'
import { useLocation } from 'react-router-dom'


function RightItemList(){
   
    const location = useLocation()
    const ind= location.state.bid
    const item =items[ind]
    const data = Buisness[ind]
    const type = data.type
    const companyLogo = data.logo
    const companyName = data.name


    return(
    <div className="itemList">
      <div className="itemListWrapper">
        {item?.itemList.map((it,i)=>{
          return(
            <MarketItem store={true}  key={i} data={it} type={type} companyLogo={companyLogo} companyName={companyName} />
          )
        })}
       </div>
    </div>
    )
}

export default RightItemList