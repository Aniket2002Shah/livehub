import { Search, Send, ShoppingCart, Tune } from '@mui/icons-material';
import MarketItem from '../MarketItem/MarketItem';
import './Market.scss'
import { useLocation } from 'react-router-dom'
import { Buisness, items } from '../../dumydata'
import { useEffect, useState } from 'react';

function Market({store}){

    const location = useLocation()
    const ind= location?.state?.bid
    const [itemList,setItemList] = useState([])

    useEffect(()=>{
        const fetchStore =()=>{
            const item =items[ind].itemList
            setItemList(item)
        
       }
       const fetchMarket = ()=>{
        setItemList([])
         for(let i=0;i<=2;i++){
            const it = items[i]
            it?.itemList.forEach(itm=>{
            setItemList(old=>[...old,itm])
            })
        }
       }
      
      store?fetchStore():fetchMarket()
     },[ind,store]);


    return(
        <div className="market" style={{maxWidth:store?"970px":"745px"}}>
            <div className="topbar">
                <div className="searchLayout">
                    <div className="searchItemBox">
                     <Search className='searchItemIcon' />
                     <input type="text" className="itemSearch" placeholder='Search products and services...' />
                     <Send className='searchBtn' style={{color:"#508DDD",cursor:"pointer"}}/>
                    </div>

                    <ShoppingCart className='addToCartIcon' style={{color:"#E0B02A",cursor:"pointer"}}/>
                    <Tune className="sortItem" style={{color:"#B538B5",cursor:"pointer"}}/>
                </div>
                <div className="tabLayout">
                    <div className="tabLayoutWrapper">
                    <span className="discount">Discount</span>
                    <span className="trending">Trending</span>
                    <span className="freeDelvery">FreeDelivery</span>
                    <span className="coupon">Coupon</span>
                    <span className="cashback">Cashback</span>
                    <span className="offers">Offer</span>
                    <span className="newItems">NewItems</span>
                    <span className="freeDelvery">FreeDelivery</span>
                    <span className="coupon">Coupon</span>
                    <span className="cashback">Cashback</span>
                    <span className="offers">Offer</span>
                </div>
                </div>
            </div>
            <div className={store?"store":"marketWrapper"}>
             {itemList.map((it,i)=>{
              return(
               <MarketItem store={store}  key={i} data={it} />
              )
              })}
            </div>
        </div>
    );
}

export default Market